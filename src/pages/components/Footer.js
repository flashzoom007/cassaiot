// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className='p-3 bg-slate-100 shadow-md text-center footer_section'>
        <ul className='custom-list grid grid-cols-4 text-blue-400 hover:text-blue-900'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/movie'><li>Movie</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <div className='border border-dark p-3 w-1/5 m-auto logo_sec'>
          <Link to='/'><img src="/next.svg" alt="logo" className='m-auto' /></Link>
        </div>
      </nav>
    </>
  )
}
export default Footer 