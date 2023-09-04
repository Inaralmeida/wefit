import { createContext, useContext, useEffect, useState } from "react";
import { IChildren, IProduct, ICartItem } from "../interfaces";
import { apiGetProducts } from "../service/api";

interface iCartContext {
  handleAddProductCart?: (idProduct: number) => void;
  handleRemoveProductCart?: (idProduct: number) => void;
  handleSetAmountItemCart?: (idProduct: number, newValue: number) => void;
  handleRemoveItemToCart?: (idProduct: number) => void;
  handleAddItemToCart?: (idProduct: number) => void;
  handleCountAmountInCartById?: (idProduct: number) => number;
  handleFormatValue?: (value: number) => string;
  handleResetCart?: () => void;
  products?: IProduct[];
  myCart?: ICartItem[];
  totalItensInCart?: number;
  load?: boolean;
  totalPriceCart?: number;
}

const CartContext = createContext<iCartContext>({});

export const CartProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [myCart, setMyCart] = useState<ICartItem[]>([]);
  const [totalItensInCart, setTotalItensInCart] = useState<number>(0);
  const [load, setLoad] = useState(false);
  const [totalPriceCart, setTotalPriceCart] = useState(0);

  const handleAddProductCart = (idProduct: number) => {
    const productSelected: IProduct | undefined = products?.find(
      (product: IProduct) => product.id === idProduct
    );

    if (productSelected) {
      setMyCart((prev) => {
        const backup = prev !== null ? [...prev] : [];

        backup.push({
          totalPrice: productSelected.price,
          amount: 1,
          product: productSelected,
        });
        return backup;
      });
    }
  };

  const handleRemoveProductCart = (idProduct: number) => {
    const indexItem = myCart?.findIndex(
      (item: ICartItem) => item.product.id === idProduct
    );
    if (indexItem !== -1) {
      setMyCart((prev) => {
        const backup = prev !== null ? [...prev] : [];
        backup.splice(indexItem, 1);
        return backup;
      });
    }
  };

  const handleSetAmountItemCart = (idProduct: number, newValue: number) => {
    const updatedCart: ICartItem[] | null = myCart?.map((item: ICartItem) => {
      if (idProduct === item.product.id) {
        return {
          ...item,
          amount: newValue,
          totalPrice: item.product.price * newValue,
        };
      }
      return item;
    });

    if (updatedCart) {
      setMyCart(updatedCart);
    }
  };

  const handleUpdateLengthCart = (myCart:ICartItem[]) => {
    const totalQuantity = myCart.reduce(
      (total, item) => total + item.amount,
      0
    );
    setTotalItensInCart(totalQuantity);
  };

  const handleUpdateTotalPrice = (myCart:ICartItem[]) => {
    const totalQuantity = myCart.reduce(
      (total, item) => total + item.product.price * item.amount,
      0
    );
    setTotalPriceCart(totalQuantity);
  };

  const handleRemoveItemToCart = (idProduct: number) => {
    const productSelected: ICartItem | undefined = myCart?.find(
      (item: ICartItem) => item.product.id === idProduct
    );
    handleSetAmountItemCart(
      idProduct,
      productSelected ? productSelected.amount - 1 : 1
    );

    if (productSelected && productSelected.amount - 1 === 0) {
      handleRemoveProductCart(idProduct);
    }
  };

  const handleAddItemToCart = (idProduct: number) => {
    const productSelected: ICartItem | undefined = myCart?.find(
      (item: ICartItem) => item.product.id === idProduct
    );

    handleSetAmountItemCart(
      idProduct,
      productSelected ? productSelected.amount + 1 : 0
    );
  };

  const handleCountAmountInCartById = (idProduct: number): number => {
    const productSelected: ICartItem | undefined = myCart?.find(
      (item: ICartItem) => item.product.id === idProduct
    );
    return productSelected ? productSelected.amount : 0;
  };

  const handleGetProducts = async () => {
    setLoad(true);
    const response = await apiGetProducts();

    if (response.success) {
      setProducts(response.data);
      setLoad(false);
    }
  };

  const handleResetCart = () => {
    setMyCart([]);
  };

  const handleFormatValue = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  useEffect(() => {
    handleUpdateLengthCart(myCart);
    handleUpdateTotalPrice(myCart);
  }, [myCart]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const cartValues = {
    handleAddProductCart,
    handleRemoveProductCart,
    handleSetAmountItemCart,
    handleRemoveItemToCart,
    handleAddItemToCart,
    handleCountAmountInCartById,
    handleFormatValue,
    handleResetCart,
    products,
    myCart,
    totalItensInCart,
    load,
    totalPriceCart,
  };

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
