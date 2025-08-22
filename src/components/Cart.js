import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utills/cartSlice";
const Cart=()=>{
  const itemCards=useSelector((store)=>store.cart.items);
  const showItems=true;
  const dispatch=useDispatch();
  const handleClearCart=()=>{
          dispatch(clearCart());
  }
  return (
    <div className="m-auto w-6/12">
      <div className="text-center relative">
        <h1 className="font-bold ">Cart</h1>
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 absolute -top-1.5 right-0" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className="m-2 p-2">
        {itemCards.length===0?<h1 className="text-center">Cart is empty just buy some Items</h1>:<ItemCards itemCards={itemCards} showItems={showItems}></ItemCards>}
        
      </div>
    </div>
  )
}
export default Cart;