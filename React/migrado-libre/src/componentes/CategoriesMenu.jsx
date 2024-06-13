import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoriesMenu() {
    const [categories, setCategories] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const toggleCategory = (id) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const renderCategories = (categories) => {
        return categories.map(category => (
            <div key={category.id}>
                <button onClick={() => toggleCategory(category.id)}>
                    {expandedCategories[category.id] ? '-' : '+'}
                </button>
                <Link to={`/${category.id}`}>{category.name}</Link>
                {expandedCategories[category.id] && category.children_categories && (
                    <div className="subcategories">
                        {renderCategories(category.children_categories)}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className="categories-menu">
            {renderCategories(categories)}
        </div>
    );
}

export default CategoriesMenu;
