const Select = ({
  filteredData,
  setFilteredData,
  name,
  allLocation,
  allPrice,
  allPropertyType,
}) => {
  console.log(allLocation, "sam");
  const handleSelect = (event) => {
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
    <div className="mb-3 ">
      <select
        name={name}
        onChange={handleSelect}
        className="mt-1
      block
      px-3 
      sm:w-[12rem] md:w-[11rem] lg:w-[12rem]
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white 
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
    
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option disabled selected hidden>
          Select
        </option>
        {allLocation &&
          allLocation.map((location) => (
            <option value={location}>{location}</option>
          ))}

        {allPrice &&
          allPrice.map((price) => <option value={price}>{price}</option>)}

        {allPropertyType &&
          allPropertyType.map((propertyName) => (
            <option value={propertyName}>{propertyName}</option>
          ))}
      </select>
    </div>
  );
};

export default Select;
