import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../../components/product/item";
import { ProductPropsType } from "../../types";

const ProductList = () => {
  const { data } = useQuery<ProductPropsType[]>(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products'
  }))
  // console.log(data);

  if (!data) return null;

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.map(product => (
          <ProductItem  {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;