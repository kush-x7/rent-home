const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="px-4 py-1 font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded
                   transition ease-in-out
                   focus:border-primary-purple focus:outline-none "
      placeholder={placeholder}
    />
  );
};

export default Input;
