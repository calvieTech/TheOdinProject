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

/**
 * This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything. You need to add an event handler to it so that pressing it decreases the count of the corresponding product. If you press ”–” when the count is 1, the product should automatically get removed from the cart. Make sure it never shows 0.
 * @returns JSX
 */
export default function ShoppingCart2() {
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		setProducts(
			products.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						count: product.count + 1,
					};
				} else {
					return product;
				}
			})
		);
	}

	function handleDecreaseClick(productId) {
		const updatedProducts = products.map((product) => {
			if (product.id === productId) {
				if (product.count <= 1) {
					return;
				} else {
					const decreasedProductCount = {
						...product,
						count: product.count - 1,
					};
					return decreasedProductCount;
				}
			}
			return product;
		});

		const filterProduct = updatedProducts.filter(
			(product) => {
				if (product) {
					return product;
				}
			}
		);

		console.log(`updatedProducts: `, filterProduct);

		setProducts(filterProduct);
	}

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}>
						+
					</button>
					<button
						onClick={() => handleDecreaseClick(product.id)}>
						–
					</button>
				</li>
			))}
		</ul>
	);
}
