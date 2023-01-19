export type RatingType = {
  rate: number;
  count: number;
}

export type ProductPropsType = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: RatingType;
}