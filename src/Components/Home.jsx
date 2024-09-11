import "./Components.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { addTocart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export const Home = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-center mt-5">
        <Card />
      </div>
    </>
  );
};

const Card = () => {
  const [Data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap  gap-[20px] min-w-full justify-center">
        {Data.map((data, i) => (
          <div
            key={i}
            className=" bg-white text-black p-4 rounded-lg text-center flex flex-col justify-center  items-center gap-[10px] font-medium"
          >
            <img
              src={data.image}
              alt=" image"
              className=" w-[300px] h-[300px]   "
            />

            <h4 className=" "> $ {data.price}</h4>
            <button
              className=" bg-blue-700 text-white p-2  rounded-lg font-semibold hover:bg-blue-500"
              onClick={() => {
                dispatch(addTocart(data));
                toast.success("Items Add SuccessFully ", {
                  autoClose: 2000,
                });
              }}
            >
              {" "}
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
