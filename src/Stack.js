import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Stack.css';

function Stack() {
  const navigate = useNavigate(); // useNavigate로 수정

  const handleBackButtonClick = () => {
    navigate('/'); // Main 페이지로 이동
  };

  return (
    <div className="stackpage">
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
          <h2>Skills</h2>
            <div className='content'>
              <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=ffffff"/>
              <h3>2022년 10월 경, 코딩 입문을 파이썬으로 했습니다.</h3>
              <h3>현재는 프로그래머스 2~3레벨, 백준 골드5 정도의</h3>
              <h3>알고리즘 문제 수행 능력을 가지고 있습니다.</h3>
            </div>
            <div className='content'>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=ffffff"/>
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=ffffff"/>
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=ffffff"/>
              <h3>코리아 IT 아카데미에서 웹 개발 기초과정을 통해</h3>
              <h3>웹페이지의 다양한 기능을 바닐라 자바스크립트를 활용해</h3>
              <h3>구현할 수 있습니다.</h3>
            </div>
            <div className='content'>
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=ffffff"/>
              <h3>마찬가지로, 코리아 IT 아카데미에서 웹 개발 심화과정을 통해</h3>
              <h3>웹페이지를 리액트의 다양한 라이브러리를 통해 제작할 수 있으며</h3>
              <h3>현재의 자기소개 웹 페이지도 리액트를 활용해 제작하였습니다.</h3>
            </div>
        </div>
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

export default Stack;
