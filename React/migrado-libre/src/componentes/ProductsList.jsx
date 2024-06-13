import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductsList() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = categoryId
            ? `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&category=${categoryId}`
            : 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="products-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <a href={product.permalink} target="_blank" rel="noopener noreferrer">
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Precio: {product.price} {product.currency_id}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
