
import { HiOutlineMenu } from 'react-icons/hi'



const Header = () => {
    return (<header className="flex  justify-between p-2 items-center w-full"> 
        
        <div className=' flex items-center' >
            <HiOutlineMenu size={30}  />

        <h2 className=" text-bold text-xl px-4"> Admin Panel</h2>
        </div>
            <button className='font-light'> Log out </button>


        
        
        </header>);
}

export default Header;