function LogIn() {
  //   {
  //     const username = document.getElementById("username").value;
  //     const password = document.getElementById("password").value;
  //     const btn = document.getElementById("btn");

  //     const user = "admin";
  //     const pass = "admin123";

  //     function checkCredentials(username,password) {
  //         if(username===user && password === pass){

  //         }
  //     }
  //   }
  return (
    <>
      <div>
        <form
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
              id="username"
              required
            />
          </p>
          <p className="p-2 mb-3 font-bold">
            Password:{" "}
            <input
              type="password"
              className="border-solid border-2 font-medium p-2 rounded-xl outline-none caret-slate-400"
              id="password"
              required
            />
          </p>

          <button
            className="border-solid border-2 p-2 mt-4 font-playfair font-semibold bg-green-400 rounded-xl px-4 hover:bg-green-500 text-xl"
            id="btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
