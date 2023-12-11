import React from "react";
import "../components/ProductTable.css";

function ProductRow({ product }) {
	const colorProduct = !product.stocked ? "red" : "black";

	return (
		<div className="productRow">
			<h4 style={{ color: colorProduct }}>
				{product.name}
			</h4>
			<h4>{product.price}</h4>
		</div>
	);
}

export default ProductRow;
