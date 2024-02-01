import './App.css'

function App() {

  document.addEventListener("mousemove", function(dets){
    document.querySelectorAll(".img").forEach((e) => {
      const position = e.getAttribute("value");
      let x = (window.innerWidth - dets.clientX * position)/ 50;
      let y = (window.innerHeight - dets.clientY * position) / 50;

      e.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  })
  

  return (
   <div id="main">
    <div value = "5" className="img img1"></div>
    <div value = "7" className="img img2"></div>
    <div value = "4" className="img img3"></div>
    <div value = "6" className="img img4"></div>
    <div value = "7" className="img img5"></div>
    <div value = "5" className="img img6"></div>
    <div value = "4" className="img img7"></div>
    <div value = "8" className="img img8"></div>
   </div>
  )
}

export default App
