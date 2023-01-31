import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
// import { ProductPropsType } from "../../types";

const ProductItem = ({
  id,
  title,
  description,
  image,
  price,
}: Product) => {
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
    </li>
  )
}

export default ProductItem;