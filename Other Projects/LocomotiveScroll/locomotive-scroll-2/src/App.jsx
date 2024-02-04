import React, { useEffect } from 'react';
import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css'

function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });

    return () => {
      scroll.destroy();
    };
  }, []); 

  return (
    <div data-scroll-container className='page1'>

      <div className='innerpage1'>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>

      <div className='innerpage2'>
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
      </div>

      <div className='innerpage3'>
        <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">Yeh 'CanDo' generation hai!</h2>
      </div>

    </div>
  );
}

export default App;
