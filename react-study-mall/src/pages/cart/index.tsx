import { useQuery } from "react-query";
import { CartType, GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import CartList from "../../components/cart";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), { 
    staleTime: 0,
    cacheTime: 1000,
  });

  console.log(data);

  const cartItem = Object.values(data || {}) as CartType[];

  if (!cartItem.length) return <div>장바구니가 비어있어요</div>

  return <CartList items={cartItem} />
}

export default Cart;