import clsx from "clsx";

const Button = ({ fillBackground, children, handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className={clsx(
        "text-primary-purple border border-light-purple pt-1 pb-2 px-4 rounded-md",
        { "bg-primary-purple text-white": fillBackground }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
