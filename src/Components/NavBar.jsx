import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const count = useSelector((state) => state.totalitems);

  return (
    <>
      <div className=" flex justify-between p-3 bg-slate-500 items-center  min-w-[100vw]      sticky top-0">
        <h1 className="text-[35px]"> React Cart</h1>
        <ul className="flex  justify-center gap-3 text-[20px] items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" flex  relative">
            <NavLink to={"/Cart"}>
              <BsCart className=" text-[30px]" />
              {count > 0 && (
                <p className="absolute bg-white rounded-full  w-[22px]  h-[22px] bottom-[60%] left-[40%] flex justify-center items-center text-black p-[1px]">
                  {count}
                </p>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
