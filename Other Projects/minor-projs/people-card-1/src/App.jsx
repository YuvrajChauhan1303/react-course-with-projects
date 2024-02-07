import './App.css'
import Social from './components/Social'
import PeopleCard from './components/PeopleCard'

function App() {


  return (
   <div className='flex justify-center items-center w-full h-[100vh]'> 
      <Social />
      
      <PeopleCard image={"https://images.unsplash.com/photo-1706859450156-0214dca4260d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"}/>
   </div>
  )
}

export default App
