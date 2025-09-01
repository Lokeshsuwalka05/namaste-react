import ItemList from "./ItemList";
const ItemCards = ({ itemCards, showItems }) => {
  return (
    <div>
      {itemCards.map((item, index) => {
        return showItems && <ItemList key={index} item={item}></ItemList>;
      })}
    </div>
  );
};
export default ItemCards;
