import "./Components.css";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
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
  let imag1 =
    "https://th.bing.com/th/id/R.394d42a12a654a01aff55a4ac589de48?rik=8meqYWp%2fRiAmDw&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05475056_1750x1285.jpg&ehk=hFHW0bsoA4Vrq9NqTnBn9ZROJe9jXLuXOG2U%2bb2O7Wk%3d&risl=&pid=ImgRaw&r=0";

  return (
    <>
      <div className="   bg-white  flex  text-black  items-center   gap-[20px] justify-between  sm:w-[100%] p-3">
        <section className="flex gap-3  items-center">
          <img src={imag1} alt="" className="  max-w-[300px] max-h-[300px]" />

          <div>
            <h3 className=" uppercase">Name</h3>
            <h4 className=" "> ₹50000</h4>
          </div>
        </section>
        <div className=" flex  items-center gap-2 text-[35px]">
          <IoMdAdd className="  border-2 border-gray-100   " />
          0
          <RiSubtractFill className="  border-2 border-gray-100 " />
          <MdDelete />
        </div>
      </div>
      ;
    </>
  );
};
