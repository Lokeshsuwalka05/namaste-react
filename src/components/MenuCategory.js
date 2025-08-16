import ItemList from "./ItemList";
const MenuCategory = (category) => {
  console.log(category);
  const { title, itemCards } = category.category;
  const handleClick=()=>{
    return console.log("clicked");
  }
  return (
    <div className="" onClick={handleClick}>
      <div className="flex justify-between">
        <span>
          <h1>{title + "(" + itemCards.length + ")"}</h1>
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {category.category.itemCards.map((item,index) => {
          return <ItemList key={index} item={item}></ItemList>;
        })}
      </div>
    </div>
  );
};
export default MenuCategory;
