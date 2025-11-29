import { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import ProductListTable from "./ProductListTable";
import type { ProductFormType } from "../types/ProductFormType";

const ProductDashboard = () => {
  const [products, setProducts] = useState<ProductFormType[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/product.json'); 
    const data = await response.json();
    setProducts(data); 
  };

  
    fetchData();
  }, []);

  return (
    <div>
      <AddProductForm  />
      <ProductListTable products={products} />
    </div>
  );
};

export default ProductDashboard;
