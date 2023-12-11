import React from "react";
import "../components/ProductTable.css";

function ProductCategoryRow({ category }) {
	return (
		<div className="productCategory__row">
			<h3>{category}</h3>
		</div>
	);
}

export default ProductCategoryRow;
