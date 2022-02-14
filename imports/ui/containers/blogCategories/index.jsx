import React from 'react';
import { categories } from '../../utils/categories.js';
import { Topics, Typography, TagContainer, Tag, TagLink } from './BlogCategoryElement.js';

const BlogCategories = () => {

    return <Topics>
            <Typography>Topics</Typography>
            <TagContainer>
            {
                    categories.map((categorie,index) => (
                        <Tag key={index}>
                            <TagLink to="/posts">{categorie.name}</TagLink>
                        </Tag>)
                    )  
            }
            </TagContainer>
        </Topics>
    
}

export default BlogCategories
