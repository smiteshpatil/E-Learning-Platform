import axios from "axios";

const acessToken =
  "sl.BvvlCDfc80lYe9l3L9HcRtt4YCnLjFVeRLp8IVrYXUrsi18YtkliCuniUZZC68pIdA5K7152XgNdZwDPZ2EzciKTWW4U5wnzsncn-APnm_TdnXGpyTbokgtTzPeeNTd1gdQQW1AvoHIHSUU";

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
    let directLink = replaceDlWithRaw(sharedLinkResponse.data.url);
    console.log(directLink);

    return directLink;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
