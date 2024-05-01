import { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = "admin";
  const pass = "admin123";

  const checkCredentials = (e) => {
    e.preventDefault(); // Prevent form default behavior (page refresh)

    if (username === user && password === pass) {
      alert("Login Successfully");
    } else {
      alert("Try Again");
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={checkCredentials}
          action=""
          className="border-solid border-2 p-10 m-16 items-center rounded-2xl bg-slate-200"
        >
          <h2 className="text-center font-playfair font-extrabold text-3xl mb-4">
            Admin Login
          </h2>
          <p className="p-2 mb-3 font-bold">
            UserName:{" "}
            <input
              type="text"
              className="border-solid border-2 font-medium p-2 rounded-xl outline-none caret-slate-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              required
            />
          </p>
          <p className="p-2 mb-3 font-bold">
            Password:{" "}
            <input
              type="password"
              className="border-solid border-2 font-medium p-2 rounded-xl outline-none caret-slate-400"
              value={password} // Bind the input field with state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              id="password"
              required
            />
          </p>

          <button
            type="submit"
            className="border-solid border-2 p-2 mt-4 font-playfair font-semibold bg-green-400 rounded-xl px-4 hover:bg-green-500 text-xl"
            id="btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
