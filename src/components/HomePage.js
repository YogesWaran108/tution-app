import React from 'react';
import { Link } from 'react-router-dom';
import myVideo from '../vidoes/video_1.mp4';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="sticky-top">Welcome to the Tution App</h1>
      <div className="content">
        <p>This is the home page of the Tution App. Here you can find various resources and information about our services.</p>
        <video className="video" controls autoPlay>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-3">
          <Link to="/form">
            <button className="btn btn-primary">Go to Form Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;