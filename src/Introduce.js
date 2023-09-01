import React from 'react';
import { useNavigate  } from 'react-router-dom'; 
import './Introduce.css';

function Introduce() {
  const navigate = useNavigate(); // useNavigate로 수정

  const handleBackButtonClick = () => {
    navigate('/'); // Main 페이지로 이동
  };

  return (
    <div className="introducePage">
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
      <div className='separator'></div>
      <div className='container'>
        <div className='subtitle'>
          <h2>Introduction</h2>
          <div className='content'>
            <h2>안녕하세요!✋</h2>
            <p>프론트엔드 개발자가 되기 위해 공부하는📚</p>
            <p>개발자 지망생 장한혁입니다.🙋‍♂️</p>
            <p>끊임없이 공부하고 발전하는 중입니다!</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='subtitle'>
          <h2>Education / Military</h2>
          <div className='divide'>
            <div className='content'>
              <h3>👨‍🎓 여의도 고등학교 졸업</h3>
              <h3>👨‍🎓 한국해양대학교 기계시스템공학과 학사</h3>
              <h3>👨‍💻 코리아 IT 아카데미 파이썬 기본과정 수료</h3>
              <h3>👨‍💻 코리아 IT 아카데미 프론트엔드 과정 수료</h3>
            </div>
            <div className='content'>
              <h3>💪대한민국 육군 병장 만기전역</h3>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='mainbutton'>
          <a href="">
            <div className='back' onClick={handleBackButtonClick}>⤶</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
