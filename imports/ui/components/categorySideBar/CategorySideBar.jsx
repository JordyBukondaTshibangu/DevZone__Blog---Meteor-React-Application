import React from 'react';
import './CategorySideBar.css';

const CategorySideBar = () => {
    return (
        <div className="category-side-bar">
            <h3> Categories </h3>
            <div className="category-menu">
                <ul>
                    <li>Programming</li>
                    <li>health</li>
                    <li>science</li>
                    <li>architecture</li>
                    <li>chemistry</li>
                    <li>tech</li>
                    <li>Religion</li>
                    <li>Music</li>
                    <li>culture</li>
                    <li>Artificial intelligence</li>
                </ul>
            </div>
        </div>
    )
}

export default CategorySideBar
