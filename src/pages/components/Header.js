import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <nav className='p-3 bg-slate-100 shadow-md w-full grid grid-cols-2 header_section'>
//         <div className='border border-dark p-3 w-1/6 logo_sec'>
//           <Link to='/'><img src="/next.svg" alt="logo" className='m-auto' /></Link>
//         </div>
//         <ul className='custom-list grid grid-cols-4 text-blue-400 '>
//           <Link to='/'><li>Home</li></Link>
//           <Link to='/about'><li>About</li></Link>
//           <Link to='/movie'><li>Movie</li></Link>
//           <Link to='/contact'><li>Contact</li></Link>
//         </ul>
//       </nav>
//     </>
//   )
// }

// export default Header 
import React from 'react'

const Header = () => {
  return (
    <>
{/* <nav>
        <ul className='custom-list grid grid-cols-4 text-blue-400 '>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/movie"><li>Movie</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
</nav> */}
<Link to={"to"} unstable_viewTransition>
  Click me
</Link>
    </>
  )
}

export default Header