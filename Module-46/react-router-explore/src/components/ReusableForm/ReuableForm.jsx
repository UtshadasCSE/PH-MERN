const ReuableForm = ({ title, handleSubmit, btnText = "submit" }) => {
  return (
    <div>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-4"
            >
              <input type="text" name="name" className="p-3" />
              <input type="email" name="email" className="p-3" />
              <input type="number" name="phone" className="p-3" />
              <input type="password" name="password" className="p-3" />
              <input
                type="submit"
                value={btnText}
                className="bg-red-400 p-5 rounded-md text-black"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuableForm;
