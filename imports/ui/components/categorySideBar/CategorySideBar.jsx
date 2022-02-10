import React from 'react';

const CategorySideBar = ({filterPostByCategory}) => {
    const categories = ["Programming", "health", "science", "architecture", "chemistry", "tech", "Religion", "Music", "Culture", "Artificial intelligence", "Novel" ]
    return (
        <div className="category-side-bar">
            <h3> Categories </h3>
            <div className="category-menu">
                <ul>
                    {
                        categories.map((category, index) => <li key={index} onClick={() => filterPostByCategory(category)}>{category}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default CategorySideBar