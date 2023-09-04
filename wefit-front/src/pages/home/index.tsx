import { CircularProgress } from "@mui/material";
import CardProduct from "../../components/CardProduct";
import { useCartContext } from "../../core/Context/CartContext";

const Home = () => {
  const {
    handleAddItemToCart,
    products,
    handleCountAmountInCartById,
    handleAddProductCart,
    load,
  } = useCartContext();

  return (
    <div className="container home">
      {load ? (
        <div className="load">
          <CircularProgress color="primary" />
        </div>
      ) : (
        products &&
        products.map((product) => {
          const amountInCart = handleCountAmountInCartById
            ? handleCountAmountInCartById(product.id)
            : 0;

            const handleAddToCart = amountInCart === 0 ? handleAddProductCart : handleAddItemToCart;
          return (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              addCart={() =>handleAddToCart && handleAddToCart(product.id)}
              amount={amountInCart}
              isActive={amountInCart > 0}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
