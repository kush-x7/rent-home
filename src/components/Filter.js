import Button from "./Button";
import Select from "./Select";

const Filter = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div class="flex justify-between items-center bg-white p-4 z-10">
      <div>
        <p>Location</p>
        <Select />
      </div>
      <div>
        <p>When</p>
        <div className="mb-3">
          <input
            className="mt-1 w-[12rem] py-1 text-base font-normal  text-gray-700 bg-white
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out  
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="date"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <p>Price</p>
        <Select />
      </div>
      <div>
        <p>Property Type</p>
        <Select />
      </div>

      <div className="flex items-center ">
        <div className="mt-4">
          <Button fillBackground>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
