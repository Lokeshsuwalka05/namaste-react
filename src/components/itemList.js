const ItemList = (item) => {
  const { title } = item.item;
  const { itemCards } = item.item;
  console.log(item);
  return (
    <>
      <div className="border border-gray-600 m-3 p-2">
        <div className="flex justify-between m-2 p-2 border">
          <span>
            <h1>{title + "(" + itemCards.length + ")"}</h1>
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {itemCards.map((item) => {
            const { name, description } = item.card.info;
            return (
              <>
                <div className="">
                   
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ItemList;
