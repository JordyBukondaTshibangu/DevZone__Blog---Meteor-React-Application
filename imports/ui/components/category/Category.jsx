import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({name, image}) => {
    return (
        <div className="category-card">
            <img src={image} alt="/" />
            <Link to="/posts" style={{textDecoration : 'none'}}><h4>{name}</h4></Link>
        </div>
    )
}

export default Category
