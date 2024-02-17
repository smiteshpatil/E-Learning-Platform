import axios from "axios";

const acessToken =
  "sl.BvwRkVoPJbWvcm4I8s-eh0-K0xOPALxn4bUsAwgioo5P5hLGZCTfuiv4q-GFegpP7iyV2fl1NxWqDvKJsoZXRgrnNvJAkNSc20FZZchAWsvIri_8kPT-HjSiLmUWt76f9Y-T0p0PQs8BtDM";

export const uploadFileToDropbox = async (file) => {
  if (!file) {
    console.error("No file selected.");
    return;
  }

  try {
    const response = await axios.post(
      "https://content.dropboxapi.com/2/files/upload",
      file,
      {
        headers: {
          Authorization: "Bearer " + acessToken,
          "Content-Type": "application/octet-stream",
          "Dropbox-API-Arg": JSON.stringify({
            path: `/${file.name}`,
            mode: "add",
            autorename: true,
            mute: false,
            strict_conflict: false,
          }),
        },
      }
    );

    console.log("Uploaded successfully. File URL:", response.data.path_display);

    // Generate a shared link for the uploaded file
    const sharedLinkResponse = await axios.post(
      "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings",
      {
        path: response.data.path_display,
      },
      {
        headers: {
          Authorization: "Bearer " + acessToken,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Shared link:", sharedLinkResponse.data.url);

    function replaceDlWithRaw(url) {
      return url.replace(/dl=0/g, "raw=1");
    }
    let url = replaceDlWithRaw(sharedLinkResponse.data.url);
    let path = response.data.path_display;
    console.log(path);
    console.log(url);

    return [url, path];
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
