import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineKingBed } from "react-icons/md";
import { TbBath, TbResize } from "react-icons/tb";

const Card = ({ data }) => {
  console.log(data, "kush");
  return (
    <div className="max-h-[450px]  bg-white rounded-md">
      {/* Image */}
      <div className="h-[50%] w-[100%] ">
        <img
          className="h-full w-full object-cover rounded-md"
          src={data.img}
          alt="house"
        />
      </div>

      <div className="px-4 pt-5">
        {/* first Row */}
        <div className="flex justify-between items-center">
          <h2 className="text-gray-500">
            <span className="text-3xl font-semibold text-primary-purple">
              {`$${data.price}`}
            </span>
            /month
          </h2>
          <div className="border-[2px] border-gray-200 rounded-[50%] full p-2">
            <AiOutlineHeart className="fill-primary-purple h-5 w-5" />
          </div>
        </div>

        {/* Second Row */}
        <h2 className="text-3xl font-bold mt-1">{data.houseName}</h2>

        {/* Third Row */}
        <p className="mt-2 text-gray-500">{data.houseAddress}</p>

        <hr className="mx-auto w-[95%] my-3" />
        <div className="flex justify-between">
          <div className="flex items-center">
            <MdOutlineKingBed className="h-6 w-6 fill-primary-purple mr-1" />{" "}
            {data.bed}
          </div>
          <div className="flex items-center">
            <TbBath className="h-5 w-5 stroke-primary-purple mr-1" />{" "}
            {data.bathroom}
          </div>
          <div className="flex items-center">
            <TbResize className="h-5 w-5 stroke-primary-purple mr-1" />{" "}
            {data.size} m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
