import { render } from "@testing-library/react";
import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi"
import { appContext } from "../AppState"

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  render() {
    return (
      <appContext.Consumer>{
        (value) => {
          return <div className={styles.cartContainer}>
            <button className={styles.button}
              onClick={this.handleClick}
            >
              <FiShoppingCart />
              <span>购物车 {value.shoppingCart.items.length} (件)</span>
            </button>
            <div className={styles.cartDropDown}
              style={{
                display: this.state.isOpen ? "block" : "none"
              }}
            >
              <ul>
                {value.shoppingCart.items.map(i => 
                  <li>{i.name}</li>  
                )}
              </ul>
            </div>
          </div>
        }
      }
      </appContext.Consumer>

    );
  }
}



export default ShoppingCart;