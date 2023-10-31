import ShoppingItem from "./ShoppingItem";
const ShoppingDisplay = (props) => {
  return (
    <div>
      <h3>
        Total:
        {props.list.length > 0
          ? props.list.reduce((acc, cv) => {
              return acc + cv.itemAmount * cv.itemPrice;
            }, 0)
          : " No items added"}{" "}
        $SGD
      </h3>
      <div className="flexCenter">
        {props.list.length > 0
          ? props.list.map((item, index) => {
              return (
                <div key={index}>
                  <ShoppingItem
                    index={index}
                    item={item}
                    deleteItem={props.deleteItem}
                    markAsBought={props.markAsBought}
                  />
                </div>
              );
            })
          : "Add an item please"}
      </div>
    </div>
  );
};

export default ShoppingDisplay;
