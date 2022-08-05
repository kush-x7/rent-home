import Button from "./Button";
import Select from "./Select";

const Filter = ({ filteredData, setFilteredData, data }) => {
  const allLocation = data.location;
  const allPrice = data.price;
  const allPropertyType = data.propertyType;

  const handleDate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFilteredData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="block md:flex  justify-between items-center flex-wrap bg-white p-4 z-10">
      <div>
        <p>Location</p>
        <Select
          allLocation={allLocation}
          name={"location"}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <div>
        <p>When</p>
        <div className="mb-3">
          <input
            onChange={handleDate}
            name="date"
            className="px-3  mt-1 sm:w-[12rem] md:w-[11rem] lg:w-[12rem] py-1 text-base font-normal  text-gray-700 bg-white
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out  
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="date"
          />
        </div>
      </div>
      <div>
        <p>Price</p>
        <Select
          allPrice={allPrice}
          name={"price"}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <div>
        <p>Property Type</p>
        <Select
          allPropertyType={allPropertyType}
          name={"property"}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
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
