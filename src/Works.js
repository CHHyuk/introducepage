import React from 'react';
import { useNavigate  } from 'react-router-dom'; 
import './Works.css';

function Works() {
  return (
    <div className='workpage'>
      <div className='sidebar'>
        <div className='profileimg'>
          <img src='image/profile.png'/>
          <div className='profile'>
            <h1>CHANG HANHYUK</h1>
            <h3>Front-end Developer</h3>
          </div>
          <br/>
          <div className='profile'>
            <h2>🎂 1994.07.18</h2>
            <h2>📱 010-9881-8517</h2>
            <h2>📧 gksgur1@gmail.com</h2>
            <h2><a href="https://github.com/CHHyuk" target="_blank"><img src="image/github.png"></img></a></h2>
          </div>
        </div>
      </div>
      <div className='saparator'></div>
      <div className='container'>
        <div className='subtitle'>
          <h2>Works</h2>
          <div className='divide'>
            <div className='content'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
