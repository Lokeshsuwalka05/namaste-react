import React from "react";
const ItemCards = (itemCard) => {
  console.log(itemCard);
  return itemCard.itemCard.map((item) => {
    const { name, price, description, id } = item.card.info;
    return (
      <React.Fragment key={id}>
        <li>
          {name}-{price / 100}
        </li>
        <p>{description}</p>
      </React.Fragment>
    );
  });
};
export default ItemCards;
