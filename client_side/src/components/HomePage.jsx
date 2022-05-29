import React from "react";


export const HomePage = () => {
  const fetchFunction = () => {
    let data = {
      username: "Gaja113",
      email: "gc@gmail.com",
      phone: 70000877,
      password: "12345",
    };
    fetch(`http://localhost:8000/register`, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((actualData) => console.log("Datttt:", actualData));
  };

  return (
    <>
      <div className="navbar">
        <h3>Login</h3>
        <h3
          onClick={() => {
            fetchFunction();
          }}
        >
          SignUp
        </h3>
      </div>
     
    </>
  );
};
