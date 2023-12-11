import React from "react";

function Searchbar({
	filterText,
	inStockOnly,
	onFilterTextChange,
	onInStockOnlyChange,
}) {
	return (
		<>
			<input
				type="search"
				value={filterText}
				onChange={(e) => onFilterTextChange(e.target.value)}
				placeholder="Search here..."
			/>
			<div>
				<input
					type="checkbox"
					value={inStockOnly}
					onChange={(e) =>
						onInStockOnlyChange(e.target.checked)
					}
					name="productsInStock"
				/>
				<label htmlFor="productsInStock">
					Only search for products in stock
				</label>
			</div>
		</>
	);
}

export default Searchbar;
