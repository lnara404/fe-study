import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../../components/product/item";
import GET_PRODUCTS, { Products } from "../../graphql/products";
// import { ProductPropsType } from "../../types";

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))
  // console.log(data);

  if (!data) return null;

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.products?.map(product => (
          <ProductItem  {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;