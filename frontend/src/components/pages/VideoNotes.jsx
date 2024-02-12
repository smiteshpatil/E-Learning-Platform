import React from "react";

const VideoNotes = () => {
  const resources = [
    { name: "Lecture Slides", link: "https://example.com/lecture_slides.pdf" },
    {
      name: "Homework Assignment",
      link: "https://example.com/homework_assignment.pdf",
    },
    {
      name: "Additional Readings",
      link: "https://example.com/additional_readings.pdf",
    },
    // Add more resources as needed
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Download Course Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoNotes;
