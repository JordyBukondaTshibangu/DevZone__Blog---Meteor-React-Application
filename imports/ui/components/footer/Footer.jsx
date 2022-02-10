import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    FaHome,
    FaPlusSquare,
    FaUsers,
    FaBook,
    FaChild,
    FaGithub,
    FaFacebook,
    FaTwitterSquare,
    FaInstagramSquare
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    const dev = JSON.parse(localStorage.getItem('dev'));

    const [email, setEmail] = useState("")

    useEffect(() => {
        if (dev) {
            setEmail(dev.email)
        }
    })

    return (
        <> {
            // email === "" ? null : <footer>
            //     <div className="menu-list">
            //         <ul>
            //             <li>
            //                 <Link className="list-item-group" to="/"><FaHome/><span>Home</span>
            //                 </Link>
            //             </li>
            //             <li>
            //                 <Link className="list-item-group" to="/new-post"><FaPlusSquare/><span>New Post</span>
            //                 </Link>
            //             </li>
            //             <li>
            //                 <Link className="list-item-group" to="/devs"><FaUsers/><span>DevsZoners</span>
            //                 </Link>
            //             </li>
            //             <li>
            //                 <Link className="list-item-group" to="/posts"><FaBook/><span>Posts</span>
            //                 </Link>
            //             </li>
            //             <li>
            //                 <Link className="list-item-group" to="/about"><FaChild/><span>About</span>
            //                 </Link>
            //             </li>
            //         </ul>
            //         <ul>
            //             <li><FaFacebook/></li>
            //             <li><FaTwitterSquare/></li>
            //             <li><FaInstagramSquare/></li>
            //             <li><FaGithub/></li>
            //         </ul>
            //     </div>
            //     <div>
            //         <p>
            //             DEV Community – A constructive and inclusive social network for software developers. With you every step of your journey.
            //                                                     Built on Forem — the open source software that powers . DEV Community © 2016 - 2021.
            //         </p>

            //     </div>
            // </footer>
        } </>
    )
}

export default Footer
