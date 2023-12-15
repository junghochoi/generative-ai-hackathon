const TextInput = ({ name, handleChange, value, placeholder }: any) => {
  return (
    <input
      type="text"
      name={name}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      className="w-96 h-9 bg-white rounded-lg flex justify-center items-center gap-2 inline-flex p-2.5 border border-neutral-400"
    />
  );
};

export default TextInput;
