import { useState } from "react";
import cart from "/images/cart.webp";

const ShoppingForm = (props) => {
  const [formInformation, setFormInformation] = useState({
    item: "",
    itemAmount: 0,
    itemPrice: 0,
  });

  const handleUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setListItem = () => {
    let itemToAdd = {
      ...formInformation,
      markAsBought: false,
    };
    props.addItem(itemToAdd);
    setFormInformation({ item: "", itemAmount: 0, itemPrice: 0 });
  };

  return (
    <>
      <div className="flexCenter item">
        <div className="form">
          <label>Item</label>
          <br />
          <input
            type="text"
            name="item"
            value={formInformation.item}
            placeholder="Item to Add"
            onChange={handleUpdate}
          />
        </div>
        <div className="form">
          <label>Amount</label>
          <br />
          <input
            type="number"
            name="itemAmount"
            value={formInformation.itemAmount}
            onChange={handleUpdate}
          />
        </div>
        <div className="form">
          <label>Price</label>
          <br />
          <input
            type="number"
            name="itemPrice"
            value={formInformation.itemPrice}
            onChange={handleUpdate}
          />
        </div>
        <div className="form formButton">
          <button onClick={setListItem}>
            <img className="icon" src={cart} alt="Add Item" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingForm;
