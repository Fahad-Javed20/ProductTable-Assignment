import { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import ProductListTable from "./ProductListTable";
import type { ProductFormType } from "../types/ProductFormType";

const ProductDashboard = () => {
  const [products, setProducts] = useState<ProductFormType[]>([]);

  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("products.json");
    const data = await response.json();
    setProducts(data);
  };

  fetchData();
}, []);


  const addProduct = (newProduct: ProductFormType) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div>
      <AddProductForm onAddProduct={addProduct} />
      <ProductListTable products={products} />
    </div>
  );
};

export default ProductDashboard;
