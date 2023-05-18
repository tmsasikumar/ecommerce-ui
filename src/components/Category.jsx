// Create a 3 X 3 grid of categories with the following categories:
// 1. Sports
// 2. Casual
// 3. Formal


// Path: src/components/Category.jsx

import React, { Fragment } from "react";
import './Category.css';

const Category = () => {
    // Create a card for each category with icon and name of the category with classname as category__card
    return (
        <Fragment>
            <div className="category__container">
                <div className="category__card">
                    <div className="category__icon">

                    </div>
                    <div className="category__name">Sports</div>
                </div>
                <div className="category__card">
                    <div className="category__icon">

                    </div>
                    <div className="category__name">Casual</div>
                </div>
                <div className="category__card">
                    <div className="category__icon">

                    </div>
                    <div className="category__name">Formal</div>
                </div>
            </div>
        </Fragment>

    )
}

export default Category;