import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="df gap-8 h-14 px-8 border-b border-[rgba(255,255,255,.6)]">
      <p className='mr-auto text-xl'>MBE</p>

      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
    </nav>
  )
}

export default Nav