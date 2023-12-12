import { useState } from "react";

const initialProducts = [
	{
		id: 0,
		name: "Baklava",
		count: 1,
	},
	{
		id: 1,
		name: "Cheese",
		count: 5,
	},
	{
		id: 2,
		name: "Spaghetti",
		count: 2,
	},
];

export default function ShoppingCart() {
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		const updatedProducts = products.map((product) => {
			if (product.id === productId) {
				const updatedProduct = {
					...product,
					count: product.count + 1,
				};
				return updatedProduct;
			}
			return product;
		});
		setProducts(updatedProducts);
	}

	return (
		<ul style={{ listStyle: "none" }}>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}>
						+
					</button>
				</li>
			))}
		</ul>
	);
}
