import { useEffect, useRef } from "react";
const Refform = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <div>
        <h2>Statefull Form</h2>
        <div>
          <form
            onSubmit={handleForm}
            className="flex flex-col justify-center items-center gap-4"
          >
            <input ref={nameRef} type="text" name="name" className="p-3" />
            <input ref={emailRef} type="email" name="email" className="p-3" />
            <input ref={phoneRef} type="number" name="phone" className="p-3" />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              className="p-3"
            />
            <input
              type="submit"
              value="Submit"
              className="bg-red-400 p-5 rounded-md text-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Refform;
