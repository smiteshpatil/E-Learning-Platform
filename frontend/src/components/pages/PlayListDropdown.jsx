import React, { useState } from "react";
import "./css/PlayListDropdown.css";

const PlaylistDropdown = (props) => {
  const days = [
    {
      id: "day1",
      name: "Day 1",
      videos: [
        {
          title: "Video 1",
          url: "https://www.dropbox.com/scl/fi/tdt5pwmfy1axl039ucmzt/09bd3cf8c4704199bd605661bf955e36.mp4?rlkey=r4d7yk5wnyvzvz2n4xwruw8c1&raw=1",
        },
        {
          title: "Video 2",
          url: "https://www.dropbox.com/scl/fi/hldrytn68bochhie8zpm4/20220602_152154.mp4?rlkey=e219id7vkdjp4zjq1aqf0s37i&raw=1",
        },
      ],
    },
    {
      id: "day2",
      name: "Day 2",
      videos: [
        {
          title: "Video 1",
          url: "https://www.dropbox.com/scl/fi/tdt5pwmfy1axl039ucmzt/09bd3cf8c4704199bd605661bf955e36.mp4?rlkey=r4d7yk5wnyvzvz2n4xwruw8c1&raw=1",
        },
        { title: "Video 2", url: "https://www.example.com/day2/video2.mp4" },
      ],
    },
    {
      id: "day3",
      name: "Day 3",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day3/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day3/video2.mp4" },
      ],
    },
    {
      id: "day4",
      name: "Day 4",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day4/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day4/video2.mp4" },
      ],
    },
    {
      id: "day5",
      name: "Day 5",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day5/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day5/video2.mp4" },
      ],
    },
    {
      id: "day6",
      name: "Day 6",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day6/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day6/video2.mp4" },
      ],
    },
    {
      id: "day7",
      name: "Day 7",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day7/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day7/video2.mp4" },
      ],
    },
    {
      id: "day8",
      name: "Day 8",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day8/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day8/video2.mp4" },
      ],
    },
    {
      id: "day9",
      name: "Day 9",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day9/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day9/video2.mp4" },
      ],
    },
    {
      id: "day10",
      name: "Day 10",
      videos: [
        { title: "Video 1", url: "https://www.example.com/day10/video1.mp4" },
        { title: "Video 2", url: "https://www.example.com/day10/video2.mp4" },
      ],
    },
  ];

  const [openDay, setOpenDay] = useState(null);

  const toggleDropdown = (dayId) => {
    setOpenDay(openDay === dayId ? null : dayId);
  };

  const handleItemClick = (videoUrl) => {
    console.log("Clicked video URL:", videoUrl);
    props.changeVideoUrl(videoUrl);
  };

  return (
    <div className="playlist-dropdown-container">
      <h3 className="mt-3 mx-3">Course Contents</h3>

      {days.map((day) => (
        <div key={day.id} className="dropdown">
          <button onClick={() => toggleDropdown(day.id)} className="dropbtn">
            {day.name}
            <span className={`arrow ${openDay === day.id ? "open" : ""}`}>
              &#9660;
            </span>
            <span className={`arrow ${openDay === day.id ? "" : "open"}`}>
              &#9658;
            </span>
          </button>
          <div
            id={`playlistDropdown-${day.id}`}
            className={`dropdown-content ${openDay === day.id ? "show" : ""}`}
          >
            {day.videos.map((video) => (
              <a
                key={video.title}
                href="#!"
                onClick={() => handleItemClick(video.url)}
              >
                {video.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistDropdown;
