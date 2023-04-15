import React, { useState, useEffect } from "react";

const Cart = () => {


  const [items, setItems] = useState([]);

  function MyComponent() {
    const [menus, setMenus] = useState([]);
  
    useEffect(() => {
        setItems([
          { name: "Ürün 1", quantity: 2 },
          { name: "Ürün 2", quantity: 1 },
          { name: "Ürün 3", quantity: 3 }
        ]);
      }, [menus]);
  
    return <div>My Component</div>;
  }

  

  return (
    <div className="cart">
      <h1>Sepetim</h1>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}
            </li>
          ))
        }
      </ul>
      <button>Ödeme Yap</button>
    </div>
  );
};

export default Cart;
