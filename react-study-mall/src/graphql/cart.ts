import { gql } from "graphql-tag";

export type CartType = {
  id: string;
  title: string;
  image: string;
  price: number;
  amount: number;
}

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    cart(id: $id) {
      id
      title
      image
      price
      amount
    }
  }
`

export const GET_CART = gql`
  query GET_CART {
    cart {
      id
      title
      image
      price
    }
  }
`;
