import Foodoption from "../components/Foodoption"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Restcard from "../components/Restcard"



const Landing = () => {
  return (
    <div>    <>
      <div className='w-full  bg-black overflow-x-hidden'>
        <header className=' bg-[#FF5200] pb-20 w-screen'>
          <Navbar></Navbar>
          <Hero></Hero> 
        </header>
      </div>
      <Foodoption></Foodoption>
      <Restcard></Restcard>

    </></div>
  )
}

export default Landing