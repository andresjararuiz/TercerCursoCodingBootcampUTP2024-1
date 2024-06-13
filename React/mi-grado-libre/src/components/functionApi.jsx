
import React ,{ useState, useEffect } from "react";


export function InfoProducts() {

		const [ products, setProducts] = useState([])

    const ProductsMiguel = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json'
		const Renderizando = (url) => {
			fetch(url)
			.then(res => res.json())
			.then(res => { 
				const data = res.results
				setProducts(data)
			})
		}
			useEffect(() => {
				Renderizando(ProductsMiguel)
			},
			[]
			) 	
			return(
				<div className="products">{
					products.map((data) => (

						<div className="container-producto">
							<a className="interior-container" href={data.permalink}target="/blank">
								<h3 className="titulo-producto">{data.title}</h3>
								<img className="img-producto" src={data.thumbnail} alt="producto" />
								<p className="precio-producto">El precio es ${data.price}</p>
							</a>
						</div>
						
					))}
				</div>
			);
	
}

// export default InfoApi;