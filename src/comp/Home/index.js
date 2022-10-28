import Sidebar from './Sidebar';
import LiveC from './LiveC';
import Nav from './Nav';

function Home() {
  return (
    <div className="home h-screen bg-slate-900 text-white overflow-hidden">
      <Nav />
      <LiveC />
      <Sidebar />
    </div>
  )
}

export default Home