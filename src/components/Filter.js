import { useState } from "react";
import Button from "./Button";
import Select from "./Select";

const Filter = ({ data, setShowProperty }) => {
  const allLocation = data.location;
  const allPrice = data.price;
  const allPropertyType = data.propertyType;
  const allMonth = data.month;

  const [filteredData, setFilteredData] = useState({
    // location: undefined,
    // property: undefined,
    // price: undefined,
    // date: undefined,
  });

  const handleSearch = () => {
    let newData = data.house_details.filter((item) => {
      for (let key in filteredData) {
        if (filteredData[key] === undefined || filteredData[key] !== item[key])
          return false;
      }
      return true;
    });

    setShowProperty(newData);
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
          <Select
            allMonth={allMonth}
            name={"month"}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
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
          name={"propertyType"}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>

      <div className="flex items-center ">
        <div className="mt-4">
          <Button handleSearch={handleSearch} fillBackground>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
