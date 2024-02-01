import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if(top >= offset && top < offset + height){
        sec.classList.add('show-animate')
      }
      else{
        sec.classList.remove('show-animate')
      }
    })
  }

  return (
   <div>
      <section className='sec-1 show-animate'>
        <h1 className='animate'>
            Hi I'm Yuvraj!
        </h1>
        <p className='animate'>Lorem ipsum dolor sit amet.</p>
      </section>

      <section className='sec-2'>
        <h1 className='animate'>
            Keep Scrolling
        </h1>
        <p className='animate'>Lorem ipsum dolor sit amet.</p>
      </section>

      <section className='sec-3'>
        <h1 className='animate'>
            Nice
        </h1>
        <p className='animate'>Lorem ipsum dolor sit amet.</p>
      </section>

      <section className='sec-4'>
        <h1 className='animate'>
            Very Good
        </h1>
        <p className='animate'>Lorem ipsum dolor sit amet.</p>
      </section>

      <section className='sec-5'>
       <div className='images'>
          <img src="img/1.jpg" alt="" />
          <img src="img/2.jpg" alt="" />
          <img src="img/3.jpg" alt="" />
       </div>
      </section>
   </div>
  )
}

export default App
