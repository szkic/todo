const Button = ({ children, onClick }) => {
  return (
    <button
      className="rounded-md border border-[#3498db] px-2 py-1 text-[#3498db] hover:bg-[#3498db] hover:text-white"
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
