import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()


    const handleLogout =()=>{
        setUser(null)
        navigate("/login")
        console.log("logout");
    }

    const [user, setUser] = useState("")
    const userName = "Gonzalo"
    

    return (
        <nav class="w-full bg-slate-600 text-gray-100 flex items-center h-[60px]">
            
            <Link  class="text-2xl justify-start p-2 hover:text-yellow-400 "  to="/">
                HeroApp
            </Link>

            <div class="flex flex-row justify-end  p-2 ">

                    <NavLink to="/marvel" >
                       <h4 class="text-white m-2 active:text-yellow-400"> Marvel </h4>
                    </NavLink>

                    <NavLink to="/dc">
                       <h4 class="text-white m-2 active:text-yellow-400"> DC </h4>
                    </NavLink>

                    <NavLink to="/search">
                       <h4 class="text-white m-2 active:text-yellow-400"> Search </h4>
                    </NavLink>
             
                    <h4 class="text-white m-2 active:text-yellow-400"> {user.length? userName : <button onClick={()=> setUser(userName)}>Login</button>} </h4>

                    <button onClick={handleLogout} class="text-white m-2 active:text-yellow-400"> {user.length? <h4>Logout</h4> : null}</button>
            </div>

             

        </nav>
    )
}