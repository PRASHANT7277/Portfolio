import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/PRASHANT7277" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/prashant-kumar-346037159/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        {/* <a href="https://www.instagram.com/n1r4jkumar/" target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCMj15TEUdhEjr2YHL-qO7uQ" target="_blank">
                            <i className='fa fa-youtube-play'></i>
                        </a>
                        <a href="https://twitter.com/n1r4jkumar" target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a> */}
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Prashant Kumar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical
                            loop={Infinity}
                            steps ={[
                                
                                "Full Stack developer 🖥",
                                1500,
                                "Enthusiastic Dev 🔴",
                                1500,
                                
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1PVs_HqbLC2EoSVYomORLxeAeq05efZgG/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='resumeButton'>Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
