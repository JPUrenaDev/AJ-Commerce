import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FaCheckCircle } from "react-icons/fa";
const pages = Array.from("123");

export const ProgressPage = () => {
  const actualPage = useSelector((state: RootState) => state.counter?.value);
  return (
    <div className="flex gap-4 relative ">
      {pages.map((page, index) => (
        <span
          className={`${
            index + 1 <= actualPage ? "bg-blue-400" : "bg-zinc-300"
          } 
        ${index == 4 ? " w-[90px]" : "w-[140px]"} h-[08px]  rounded-lg `}
        ></span>
      ))}

      <FaCheckCircle
        className={`absolute right-[-7px] bottom-[-13px] bg-white rounded-full ${
          actualPage > 2 ? "text-blue-400" : "text-zinc-300"
        } `}
        size={40}
      />
    </div>
  );
};
