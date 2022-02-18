import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar/';
import SideBarMenu from './components/sidebarMenu/SideBarMenu.jsx';

export const App = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [email, setEmail] = useState("")

    const dev = JSON.parse(localStorage.getItem('dev'));

    useEffect(() => {
        if (dev) {
            setEmail(dev.email)
        }
    })

    const openSideMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeSideMenu = () => {
        setOpenMenu(false)
    }
    
    return(
        email === "" ? null : 
        <div>
            <NavBar dev={dev} openSideMenu={openSideMenu}/> 
                {
                    openMenu ? ReactDOM.createPortal (
                        <SideBarMenu closeSideMenu={closeSideMenu}/>,
                        document.getElementById('react-portal')
                    ) : null
                } 
        </div>)
};
