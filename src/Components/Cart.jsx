import "./Components.css";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTocart,
  increaseItemCount,
  decreaseItemCount,
} from "../redux/CartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export default function Cart() {
  const itemsCount = useSelector((state) => state.totalitems);

  return (
    <>
      <main className=" sm:relative  ">
        <div
          className={` overflow-x-hidden  overflow-scroll ${
            itemsCount && "sm:h-[90vh] sm:w-[75%] max-h-[62vh]"
          } scrollProperty `}
        >
          <AddItems />
        </div>

        {itemsCount ? (
          <CartBill />
        ) : (
          <>
            <div
              className="  text-center 
            h-[90vh] w-[100%] flex  justify-center items-center  gap-4"
            >
              Oops Cart is Empty
              <Link to={"/"}>
                <button className=" bg-red-400 p-3 rounded-md">
                  Add items inside cart
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}

const CartBill = () => {
  let delivery;
  const count = useSelector((state) => state.totalitems);

  const TotalSum = useSelector((state) => state.totalPrice);

  if (TotalSum > 500) {
    delivery = 0;
  } else {
    delivery = 50;
  }
  const FixedPrice = TotalSum + delivery;

  return (
    <>
      <div className="sm:w-[20%] sm:h-[90vh]    cartBill">
        <div>
          <h1 className=" font-semibold  sm:text-[25px] text-[20px]">
            Cart Bill
          </h1>
          <h1 className=" mt-3">{`Total Items : ${count}`}</h1>

          <h2>Delivery Charge : ${delivery}</h2>
          <h1> {`Total Payable Amount :  $${FixedPrice.toFixed(2)}`}</h1>

          <button className=" bg-red-500 rounded-lg p-3 mt-4">
            {" "}
            {`Pay  $${FixedPrice.toFixed(2)} Amount`}
          </button>
        </div>
      </div>
    </>
  );
};

const AddItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items);

  return (
    <>
      {cartItems.map((item, i) => (
        <div key={i}>
          <div className="   bg-white  flex  text-black  items-center   gap-[20px] justify-between  sm:w-[100%] p-3">
            <section className="flex gap-3  items-center">
              <img
                src={item.image}
                alt=""
                className=" w-[150px] h-[150px]  sm:max-w-[300px] sm:max-h-[300px]"
              />

              <div>
                <h4 className=" "> ${item.price}</h4>
              </div>
            </section>
            <div className=" flex  items-center gap-2 text-[35px]">
              <IoMdAdd
                className="  border-2 border-gray-100   "
                onClick={() => {
                  dispatch(increaseItemCount(item));
                  toast.success(" Items Count Increase ");
                }}
              />
              {item.quantity}
              <RiSubtractFill
                className="  border-2 border-gray-100 "
                onClick={() => {
                  dispatch(decreaseItemCount(item));
                  toast.success("  One Items  is Remove ");
                }}
              />
              <MdDelete
                onClick={() => {
                  dispatch(removeTocart(item));
                  toast.success("Items is delated Succefully ");
                }}
              />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};
