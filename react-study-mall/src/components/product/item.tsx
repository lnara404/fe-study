import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
// import { ProductPropsType } from "../../types";
// import { useRecoilState } from "recoil";
// mport { cartItemSelector } from "../../recoils/cart";

const ProductItem = ({
  id,
  title,
  description,
  image,
  price,
}: Product) => {
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  // const addToCart = () => setCartAmount(prev => (prev || 0) + 1);

  const {mutate: addCart} = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }));
  
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <div className="product-item__img">
          <img src={image} alt="" />
        </div>
        <p className="product-item__title">{title}</p>
        <div>{description}</div>
        <span className="product-item__price">{price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>담기</button>
      <span>{}</span>
    </li>
  )
}

export default ProductItem;