import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function SwitchButton({ to, label }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div className="switchButton">
        <span className="buttonText">{label}</span>
      </div>
    </Link>
  );
}

function HomePage() {
  const starsRef = useRef(null);
  const [stars, setStars] = useState([]); // 별 객체 배열

  useEffect(() => {
    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      createStar(x, y);
    };

    // 페이지 진입 시 마우스 이벤트 리스너 등록
    document.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트 언마운트 시 마우스 이벤트 리스너 해제
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // 별 랜덤 생성 타이머
    const createRandomStars = () => {
      for (let i = 0; i < 5; i++) { // 별 생성
        const x = getRandomInt(0, window.innerWidth);
        const y = getRandomInt(0, window.innerHeight);
        createStar(x, y);
      }
    };

    // 랜덤 별 생성
    const randomStarsInterval = setInterval(createRandomStars, 500);

    // 컴포넌트 언마운트 시 타이머 해제
    return () => {
      clearInterval(randomStarsInterval);
    };
  }, []);

  const createStar = (x, y) => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    starsRef.current.appendChild(star);

    // 별 객체 배열 업데이트
    setStars((prevStars) => [...prevStars, star]);

    // 별 삭제
    setTimeout(() => {
      star.remove();
      setStars((prevStars) => prevStars.filter((prevStar) => prevStar !== star));
    }, 2000);
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="homePage">
      <SwitchButton to="/introduce" label="Profile" />
      <SwitchButton to="/stack" label="Stack" />
      <SwitchButton to="/works" label="Works" />
      <div className="stars" ref={starsRef}></div>
    </div>
  );
}

export default HomePage;
