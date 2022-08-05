const Select = () => {
  return (
    <div class="mb-3 ">
      <select
        class="mt-1
      block
      px-3
      w-[12rem]
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
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Three</option>
        <option value="3">Three</option>
        <option value="3">Three</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default Select;
