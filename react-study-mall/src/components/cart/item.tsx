import { CartType } from "../../graphql/cart";

const CartItem = ({
  id,
  title,
  image,
  price,
  amount
}: CartType) => {
  return (
    <li>
      {id}
      {title}
      <img src={image} alt="" />
      {price}
      {amount}
    </li>
  )
}

export default CartItem;