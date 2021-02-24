import React from 'react';
import { categories } from './categories.js'
import Category from '../../components/category/Category.jsx';
import './BlogCategories.css';

const BlogCategories = () => {

    return <div className="blog-categories">
                {
                    categories.map((categorie,index) =>  <Category key={index} name={categorie.name} image={categorie.image} />)
                    
                }
        </div>
    
}

export default BlogCategories
