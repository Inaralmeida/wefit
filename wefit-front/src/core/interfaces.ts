import React from "react";

export interface IChildren {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ICartItem {
  product: IProduct,
  amount: number
  totalPrice: number
}