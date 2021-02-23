import React from 'react';
import './Category.css';

const Category = ({name, image}) => {
    return (
        <div className="category-card">
            <img src={image} alt="/" />
            <h4>{name}</h4>
        </div>
    )
}

export default Category
