import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import NavBar from './components/NavBar';
import SideBarMenu from './components/SideBarMenu';

export const App = () => {

    const history = useHistory();

    const dev = JSON.parse(localStorage.getItem('dev'));

    if(!dev) history.push('/sign-in');
    

    const [openMenu, setOpenMenu] = useState(false);

    const openSideMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeSideMenu = () => {
        setOpenMenu(false)
    }

    return (
      !dev ? null : 
      <div>
        <NavBar dev={dev}
            openSideMenu={openSideMenu}/> {
        openMenu ? ReactDOM.createPortal (<SideBarMenu closeSideMenu={closeSideMenu}/>, document.getElementById('react-portal')) : null
    } </div>
    )

};
