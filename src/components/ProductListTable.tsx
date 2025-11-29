import type { ProductFormType } from "../types/ProductFormType"

interface ProductListTableProps {
    products:ProductFormType[]
}

const ProductListTable = ({products}:ProductListTableProps) => {
  return (
    <div>
        {products.map((product) =>(
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.rating}</td>

            </tr>
        ))}
    </div>
  )
}

export default ProductListTable
