import type { ProductFormType } from "../types/ProductFormType";

interface ProductListTableProps {
  products: ProductFormType[];
}

const ProductListTable = ({ products }: ProductListTableProps) => {
  return (
    <div className="p-3">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border">
              <td className="border px-2">{product.name}</td>
              <td className="border px-2">{product.price}</td>
              <td className="border px-2">{product.category}</td>
              <td className="border px-2">{product.quantity}</td>
              <td className="border px-2">{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;
