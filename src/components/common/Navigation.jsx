   import { Disclosure } from "@headlessui/react";
import { useJwt } from "react-jwt";
import {NavLink} from "react-router-dom"




   const navigation = [
    { title:" Users Managment" ,access:"user:list" , subMenu:[
        {title:"Create User" ,access:"user:create", path:"/user/create"},
        {title:"Users List", access:"user:list" , path : "/user/all"}
    ]

    }
   ]
   
   
   
   const Navigation = () => {

 let {decodedToken}  =useJwt( localStorage.getItem("token"))




    return (<nav className=" min-width-[300px] border drop-shadow-sm bg-slate-100 p-4 h-screen">
        {navigation.map((nav,index)=>  
       // decodedToken?.scopes?.include(nav.access)&& 
          <Disclosure key={index}>
            <Disclosure.Button className="py-2">
                    <span className="font-exrtabold"> {nav.title}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">

                    <div className="flex flex-col" >{nav.subMenu.map
                    ((item,index)=> 
                       // decodedToken?.scopes?.include(item.access) && 
                    <NavLink to={item.path} key={index} className={(isActive)=> `p-1 ${isActive && "text-rose-400"}`} >
                         {item.title}</NavLink>)}</div>
                
            </Disclosure.Panel>
        </Disclosure>
)}

    





    </nav>  );
}
 
export default Navigation;