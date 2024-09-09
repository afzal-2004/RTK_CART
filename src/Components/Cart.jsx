import "./Components.css";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTocart } from "../redux/CartSlice";
export default function Cart() {
  return (
    <>
      <main className=" relative  ">
        <div className="  overflow-x-hidden overflow-scroll h-[90vh] w-[80%] scrollProperty">
          <AddItems />
        </div>
        <CartBill />
      </main>
    </>
  );
}

const CartBill = () => {
  return (
    <>
      <div className="w-[20%] h-[90vh]    cartBill">
        <h1>Cart Bill</h1>
      </div>
    </>
  );
};

const AddItems = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.totalitems);
  console.log(count);
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
                className="  max-w-[300px] max-h-[300px]"
              />

              <div>
                <h4 className=" "> {item.price}</h4>
              </div>
            </section>
            <div className=" flex  items-center gap-2 text-[35px]">
              <IoMdAdd className="  border-2 border-gray-100   " />
              0
              <RiSubtractFill className="  border-2 border-gray-100 " />
              <MdDelete onClick={() => dispatch(removeTocart(item.id))} />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};
