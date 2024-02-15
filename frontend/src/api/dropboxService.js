import axios from "axios";

const acessToken =
  "sl.BvrkEWBwjugegUhAsBH9X75fD6gm56Bt6D1tjRR6fsEvYdcGTMXzdzRf8fc7XUEh7pHlho3p12jxfihFGynRH4schJCR9eaE32tV8i7n45t0y6evfCbU1ovJOKMCcijA6SRf_5ShF_BOWqk";

export const uploadVideoToDropbox = async (file) => {
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
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
