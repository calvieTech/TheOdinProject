import React from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";
import "./ProductTable.css";

function ProductTable({
	products,
	filterText,
	inStockOnly,
}) {
	const rows = [];
	let lastCategory = null;

	products.forEach((produce) => {
		if (
			produce.name
				.toLowerCase()
				.indexOf(filterText.toLowerCase()) === -1
		) {
			return;
		}

		if (!produce.stocked && inStockOnly) {
			return;
		}

		if (produce.category !== lastCategory) {
			let categoryRow = (
				<ProductCategoryRow
					category={produce.category}
					key={produce.category}
				/>
			);
			rows.push(categoryRow);
		}
		let productRow = (
			<ProductRow
				product={produce}
				key={produce.name}
			/>
		);

		rows.push(productRow);

		lastCategory = produce.category;
	});

	return (
		<div className="productTable">
			<div className="productTable__headers">
				<h2>Name</h2>
				<h2>Price</h2>
			</div>
			<div className="productTable__rows">{rows}</div>
		</div>
	);
}

export default ProductTable;
