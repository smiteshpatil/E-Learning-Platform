import axios from "axios";

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
          Authorization: `Bearer sl.BvpZYyG9QVPJu3_GBODKfot4E0g_7I50RDSsqmTfVhv8TtBeDFxLrBTf0wu-q6pZu9wWzadoagbzlQKkFx1uKBps1gKArmpAc0_d3eATQE66V6rkwFsmWT_6pT9PhOMnpWTfZ25mNzoa9q4`,
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
          Authorization: `Bearer sl.BvpZYyG9QVPJu3_GBODKfot4E0g_7I50RDSsqmTfVhv8TtBeDFxLrBTf0wu-q6pZu9wWzadoagbzlQKkFx1uKBps1gKArmpAc0_d3eATQE66V6rkwFsmWT_6pT9PhOMnpWTfZ25mNzoa9q4`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Shared link:", sharedLinkResponse.data.url);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
