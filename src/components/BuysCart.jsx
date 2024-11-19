//Styles
import buyscartModule from "./BuysCart.module.css";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BuysCart = () => {
  return (
    <article className={buyscartModule.article}>
      <span className={buyscartModule.text}>Ver carrito</span>
      <FontAwesomeIcon icon={faCartShopping} size="3x" />
    </article>
  );
};

export default BuysCart;
