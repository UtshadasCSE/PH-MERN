import useInputForm from "./useInputForm";

const HookForm = () => {
  const [name, changeName] = useInputForm("Mr.Bean");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello,", name);
  };
  return (
    <div>
      <div>
        <h2>CustomHook Form</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            value={name}
            onChange={changeName}
            type="text"
            name="name"
            className="p-3"
          />
          <input type="email" name="email" className="p-3" />
          <input type="number" name="phone" className="p-3" />
          <input
            type="submit"
            value="Submit"
            className="bg-red-400 p-5 rounded-md text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default HookForm;
