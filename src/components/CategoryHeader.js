import React from 'react';
import '../styles/CategoryHeader.css';

const CategoryHeader = (props) => {

    return (
        <div className="category-header-block">
            <h1 className="category-header">{props.category}</h1>
        </div>
    );
}

export default CategoryHeader;
