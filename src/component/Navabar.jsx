import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg'
const Navbar=()=>{
return (
  <div className="flex   items-center justify-between space-x-4 h-[100px] bg-white  sticky top-0 z-50 shadow">
    <img src={logo} alt="Logo" className="h-12 pl-[25px]" />
    <div className="flex space-x-4">
    <div className='mr-10 '>Become a host</div>
    <div className='w-7 h-7 rounded-full bg-green-200 flex items-center justify-center'><img src={search} alt="Search" className="h-5" /></div>
    <div className='w-7 h-7 mr-15 rounded-full bg-green-200 flex items-center justify-center'><img src={menu} alt="menu" className="h-5" /></div>
    </div>
    
  </div>
);
}
export default Navbar;
