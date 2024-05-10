import React, { useState } from 'react';
 

function Progress({ courseData }) {
  const [completedVideos, setCompletedVideos] = useState(0);

  // Function to update the progress when a video is clicked
  const handleVideoClick = () => {
    setCompletedVideos(prevCount => prevCount + 1);
  };

  // Calculate the completion percentage
  const completionPercentage = (completedVideos / courseData.length) * 100;

  return (
    <div>
      <h1>Course Title</h1>
      <p>Total Videos: {courseData.length}</p>
      <p>Completed Videos: {completedVideos}</p>

      {/* Render each video with an onClick handler to track progress */}
      {courseData.map((video, index) => (
        <div key={index} onClick={handleVideoClick}>
          <h2>Video {index + 1}</h2>
          <p>{video.title}</p>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Progress;
