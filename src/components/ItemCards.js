import ItemList from "./ItemList";
const ItemCards=({itemCards,showItems})=>{
  return (
    <>
        {itemCards.map((item,index) => {
          return showItems&&<ItemList key={index} item={item}></ItemList>;
        })} 
    </>
  )
}
export default ItemCards;