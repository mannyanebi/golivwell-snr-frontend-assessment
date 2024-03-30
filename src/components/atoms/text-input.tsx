export type TextInputProps = {
  placeholder: string;
  type: string;
  icon: string;
};

function TextInput({ icon, placeholder, type }: TextInputProps) {
  return (
    <div className="flex flex-row space-x-4 py-3 px-5 rounded-2xl w-full xl:w-3/5 border-gray-400 border">
      <span className="border-r-2 p-2 border-r-[#DBE3FF]">
        <img src={icon} width="25px" alt="icon" />
      </span>
      <input
        className="p-2 w-full placeholder:text-black"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default TextInput;
