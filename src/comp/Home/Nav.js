import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tokenise from './Modals/Tokenise';


function Nav() {
  const [open, setOpen] = useState(false)

  const updateOpen = () => setOpen(p => !p)

  return (
    <>
      <nav className="df gap-8 h-14 px-8 border-b border-[rgba(255,255,255,.6)]">
        <p className='mr-auto text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-emerald-700 bg-clip-text text-transparent'>
          Micro Bond Exchange
        </p>

        <button
          className='hover:text-emerald-500'
          onClick={updateOpen}
        >
          Tokenize your bond
        </button>

        <Link className='hover:text-emerald-500' to="login">Login</Link>
        <Link className='hover:text-emerald-500' to="signup">Signup</Link>
      </nav>

      <Tokenise
        isOpen={open}
        closeModal={updateOpen}
      />
    </>
  )
}

export default Nav