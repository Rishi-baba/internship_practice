import { NavLink } from "react-router-dom";

const navlinks = [
  {name:"Swiggy Corporate", path:"",},
  {name:"Partner with us", path:""},
  {name:"Get the App",  path:"", classname:"p-3 pl-8 pr-8 flex justify-center border border-white rounded-xl"},
  {name:"Sign in", path:"", classname:"bg-black p-3 pl-8 pr-8 flex justify-center border border-black rounded-xl"},
]

const Navbar = () => {
  return (
    <div className='flex center items-center justify-around h-30 container m-auto'>
      <div>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" className='h-16' alt="" />
      </div>
      <div className='pl-10 flex-row flex items-center gap-9 text-white font-medium text-md justify-center pt-5 pb-5 '>
        {
          navlinks.map((link)=>(
            <NavLink key={link.name} to={link.path} className={link.classname}>
              {link.name}
              <div>
                
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar