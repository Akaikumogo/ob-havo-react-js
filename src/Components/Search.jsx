import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [inpValue, setInpValue] = useState("");
  const { setCity } = useGlobalContext();

  const handleSearch = () => {
    setCity(inpValue);
    setInpValue("");
  };

  return (
    <form className="glass w-[95%] sm:w-[68%] sm:mx-auto p-2 justify-between  h-[50px]  bg-white items-center mt-[30px] m-[10px] rounded-xl flex gap-3">
      <input
        className="glass w-[70%] sm:w-[100%] h-[35px] px-2 py-2 "
        placeholder="enter country"
        type="text"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button
        disabled={inpValue?.length === 0}
        className={
          "w-[30%] rounded-md text-white px-2 py-1 bg-violet-900 transition-all ease-in-out" +
          `${
            inpValue?.length != 0
              ? "hover:border-violet-900 hover:text-violet-600 hover:bg-white"
              : ""
          }`
        }
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
