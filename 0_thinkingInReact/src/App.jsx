import { useState } from "react";
import "./App.css";
import FilterableProductTable from "./pages/FilterableProductTable";
import PRODUCTS from "./data/products";

function App() {
	return (
		<>
			<FilterableProductTable products={PRODUCTS} />
		</>
	);
}

export default App;
