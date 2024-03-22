const Simpleform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("Form submitted");
  };
  return (
    <div>
      <div>
        <h2>Simple Form</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input type="text" name="name" className="p-3" />
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

export default Simpleform;
