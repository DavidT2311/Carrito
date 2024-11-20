import React, { useState, useEffect } from "react";
//Styles
import cartModule from "./Cart.module.css";
//Components
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
//Redux
import { clearCart, deleteProductFromCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";

const Cart = () => {
  //Elementos para la paginacion Carrito
  const [currentPageCart, setCurrentPageCart] = useState(1);
  const lastIndexSliceCart = currentPageCart * 4;
  const firstIndexSliceCart = lastIndexSliceCart - 4;
  //Redux
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);

  let totalPrice = 0;

  if (cartProducts.length != 0) {
    totalPrice = cartProducts
      .map((item) => item.price * item.quantity)
      .reduce((acc, act) => acc + act);
  }

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <>
      {cartProducts.length == 0 ? (
        ""
      ) : (
        <article className={cartModule.article}>
          <h1 className={cartModule.title}>Carrito</h1>
          <Button
            text="Limpiar carrito"
            classes="green"
            handleEvent={() => dispatch(clearCart())}
          />

          <span>
            <strong>Precio total:</strong> {totalPrice}
          </span>
          <section className={cartModule.cart_section}>
            <section className={cartModule.cart_intern_section}>
              {cartProducts
                .map(
                  (
                    {
                      id,
                      title,
                      price,
                      description,
                      category,
                      image,
                      rating,
                      quantity,
                    },
                    index
                  ) => (
                    <Card
                      key={id}
                      ID={id}
                      title={title}
                      description={description}
                      category={category}
                      image={image}
                      rating={rating}
                      quantity={quantity}
                      action={dispatch}
                    />
                  )
                )
                .slice(firstIndexSliceCart, lastIndexSliceCart)}
            </section>
            <section className={cartModule.pagination}>
              {cartProducts.length == 0 ? (
                ""
              ) : (
                <PaginationComponent
                  key={1}
                  currentPage={currentPageCart}
                  setCurrentPage={setCurrentPageCart}
                  quantityOfProducts={cartProducts.length}
                  quantityProductsPerPage={4}
                />
              )}
            </section>
          </section>
        </article>
      )}
    </>
  );
};

export default Cart;
