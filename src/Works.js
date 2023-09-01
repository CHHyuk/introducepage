import React from 'react';
import { useNavigate  } from 'react-router-dom'; 
import './Works.css';

function Works() {
  const navigate = useNavigate(); // useNavigate로 수정

  const handleBackButtonClick = () => {
    navigate('/'); // Main 페이지로 이동
  };

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
          <br/>
          <br/>
          <div className='divide'>
            <div className='content-img'>
              <img src="image/kakao.png"></img>
            </div>
            <div className='content'>
              <h3><a href="https://chhyuk.github.io/kakao_imitation/" target="_blank">👉카카오뱅크 홈페이지 모작</a></h3>
              <br/>
              <h3>✔ 기초적인 html,css 활용</h3>
              <h3>✔ 바닐라 자바스크립트 활용</h3>
              <h3>✔ 움직이는 애니매이션 등 구현</h3>
              <h3><a href="https://github.com/CHHyuk/kakao_imitation" target="_blank">코드</a></h3>
            </div>
          </div>
          <div className='divide'>
            <div className='content-img'>
              <img src="image/todolist.png"></img>
            </div>
            <div className='content'>
              <h3><a href="https://chhyuk.github.io/my_note/" target="_blank">👉Todolist 페이지</a></h3>
              <br/>
              <h3>✔ 리액트 활용</h3>
              <h3>✔ 달력을 이용한 날짜 버튼 구현</h3>
              <h3>✔ 작성순, 현재 시간 대비 급한순, 여유로운 순으로 정렬 가능</h3>
              <h3><a href="https://github.com/CHHyuk/react_todolist" target="_blank">코드</a></h3>
            </div>
          </div>
          <div className='divide'>
            <div className='content-img'>
              <img src="image/amazon.png"></img>
            </div>
            <div className='content'>
              <h3><a href="https://fir-9fb2b.web.app/ " target="_blank">👉쇼핑몰 페이지</a></h3>
              <br/>
              <h3>✔ 리액트 활용</h3>
              <h3>✔ 아마존 홈페이지 상단바 구현</h3>
              <h3>✔ firebase 활용, 사용자 아이디,비밀번호 DB 활용(회원가입 가능)</h3>
              <h3>✔ 제품 장바구니에 담고 목록 확인 및 총액 확인 가능</h3>
              <h3><a href="https://github.com/CHHyuk/react_portfolio" target="_blank">코드</a></h3>
            </div>
          </div>
        </div>
        <div className='mainbutton'>
          <a href="">
            <div className='back' onClick={handleBackButtonClick}>⤶</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
