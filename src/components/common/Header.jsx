
import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi'
import { useNavigate } from 'react-router';
import { MainContext } from '../../provider/MainProvider';



const Header = () => {

    const { setToken } = useContext(MainContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        setToken(undefined)
        localStorage.clear()
        navigate("/login", {replace:true})


    }

    return (<header className="flex  justify-between p-2 items-center w-full">

        <div className=' flex items-center' >
            <HiOutlineMenu size={30} />

            <h2 className=" text-bold text-xl px-4"> Admin Panel</h2>
        </div>
        <button className='font-light' onSubmit={handleLogout}> Log out </button>




    </header>);
}

export default Header;