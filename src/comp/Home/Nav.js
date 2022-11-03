import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="df gap-4 sm:gap-8 h-14 px-8 border-b border-[rgba(255,255,255,.6)]">
        <p className='mr-auto text-xl sm:text-[26px] font-semibold bg-gradient-to-r from-emerald-300 to-emerald-700 bg-clip-text text-transparent'>
          Micro Bond Exchange
        </p>

        <Link className='hover:text-emerald-500' to="/my-account">My Account</Link>
        <Link className='hover:text-emerald-500' to="/tokenize">Tokenize</Link>
        <Link className='hover:text-emerald-500' to="/login">Login</Link>
        <Link className='hover:text-emerald-500' to="/signup">Signup</Link>
      </nav>
    </>
  )
}

export default Nav