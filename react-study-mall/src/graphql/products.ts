import { gql } from 'graphql-tag';

export type Product = {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  createdAt: string
}

export type Products = {
  products: Product[]
}

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    title
    description
    image
    price
    createdAt
  }
`
export default GET_PRODUCTS;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: number) {
    id
    title
    description
    image
    price
    createdAt
  }
`;
