import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export function InfoCategories() {
    const [categories, setCategories] = useState([]);
    const [link, setLink] = useState([]);

    const urlCategories = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&category';

    const Renderizando = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            const data = res.results;
            setCategories(data);

            // Generar nuevos enlaces y actualizar el estado `link`
            const newLinks = data.map((data2) => {
                const categoryID = data2.category_id;
                const nuevoLink = `${urlCategories}=${categoryID}`;
				setLink(nuevoLink)
				return nuevoLink
            });
            
        });
    };

    useEffect(() => {
        Renderizando(urlCategories);
    }, []);

    return(

        <div className="categorias">{
            categories.map((cat) => (
                    <div className="cadaCategoria">
                      <a href={cat}> {cat.category_id}</a>
                         </div>
                

            ))

        }
        
        </div>
    )



}
