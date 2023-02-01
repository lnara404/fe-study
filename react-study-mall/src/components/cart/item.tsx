import { ForwardedRef, forwardRef, SyntheticEvent } from "react";
import { QueryClient, useMutation } from "react-query";
import { CartType, DELETE_CART, UPDATE_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({
  id,
  title,
  image,
  price,
  amount
}: CartType, ref: ForwardedRef<HTMLInputElement>) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string, amount: number }) => graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART)

        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(QueryKeys.CART);

        if (!prevCart?.[id]) return prevCart;
    
        const newCart = {
          ... (prevCart || {}),
          [id]: { ...prevCart[id], amount }
        }
        queryClient.setQueryData(QueryKeys.CART, newCart)

        return prevCart;
        // onSuccess: () => queryClient.invalidateQueries(QueryKeys.CART), // 단점: 잦은 요청이 일어남
      },
      onSuccess: (newValue) => {
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(QueryKeys.CART);
        const newCart = {
          ...(prevCart || {}),
          [id]: newValue,
        }
        queryClient.setQueryData(QueryKeys.CART, newCart)
      }
    }
  );

  const { mutate: delectCart } = useMutation(({ id }: {id: string}) => 
    graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART)
      }
    }
  )

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart(
      { id, amount }
    )
  };

  const handleDelectCart = () => {
    delectCart({ id })
  };

  return (
    <li className="cart-item">
      <input className="cart-item__checkbox" type="checkbox"  name="select-item" ref={ref} />
      <img className="cart-item__image" src={image} alt="" />
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}</p>
      <input className="cart-item__amount" type="number" min={1} value={amount} onChange={handleUpdateAmount} />
      <button className="cart-item__button" type="button" onClick={handleDelectCart}>삭제</button>
    </li>
  )
}

export default forwardRef(CartItem);