import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { useRecoilState } from "recoil";
import { cartItemSelector } from "../../recoils/cart";
// import { ProductPropsType } from "../../types";

const ProductItem = ({
  id,
  title,
  description,
  image,
  price,
}: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount(prev => (prev || 0) + 1);
  
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
      <button className="product-item__add-cart" onClick={addToCart}>담기</button>
      <span>{cartAmount || 0}</span>
    </li>
  )
}

export default ProductItem;