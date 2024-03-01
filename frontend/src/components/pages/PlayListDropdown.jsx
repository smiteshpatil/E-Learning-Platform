import React, { useEffect, useState } from "react";
import "./css/PlayListDropdown.css";
import { getAllContentsByCourseId } from "../../api/contentService";
import { toast } from "react-toastify";

const PlaylistDropdown = (props) => {
  console.log(props.currId);
  //current playlist containing content Objects
  const [playlist, setPlaylist] = useState([]);

  const token = localStorage.getItem("token");

  const handleItemClick = (videoUrl, index) => {
    console.log("Clicked video URL:", videoUrl);
    props.changeVideoUrl(videoUrl, index);
  };

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const resp = await toast.promise(
          getAllContentsByCourseId(props.currId, token),
          {
            pending: "loading...",
            error: "unexpected error occured",
          }
        );
        console.log(resp.data);
        setPlaylist(resp.data);
      } catch (error) {
        toast.error("an unexpected error occured!");
      }
    };
    fetchPlaylist();
  }, []);

  return (
    <div className="playlist-dropdown-container">
      <h3 className="course-content">Course Contents</h3>

      <ul className="content-list">
        {playlist.map((lecture) => (
          <li key={lecture.id} className="content-item">
            <button
              onClick={() => handleItemClick(lecture.contentUrl, lecture.id)}
              className="lecture-name"
            >
              {lecture.contentName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDropdown;
