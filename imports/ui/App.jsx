import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import NavBar from './components/navbar/NavBar.jsx';
import SideBarMenu from './components/sidebarMenu/SideBarMenu.jsx';
import LoginPage from './pages/login/LoginPage'

export const App = () => {

    const history = useHistory();

    const dev = JSON.parse(localStorage.getItem('dev'));
    console.log(dev, "from app component")

    if(!dev){
         history.push('/')
    };
    

    const [openMenu, setOpenMenu] = useState(false);

    const openSideMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeSideMenu = () => {
        setOpenMenu(false)
    }

    return (
      !dev ? <LoginPage /> : 
      <div>
        <NavBar dev={dev}
            openSideMenu={openSideMenu}/> {
        openMenu ? ReactDOM.createPortal (<SideBarMenu closeSideMenu={closeSideMenu}/>, document.getElementById('react-portal')) : null
    } </div>
    )

};
