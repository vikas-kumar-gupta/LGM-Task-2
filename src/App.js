import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Users from "./Users";

const App = () => {
  const [clicked, setClicked] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clicked && getUsers();
    console.log("yes Im there");
  }, [clicked]);

  const getUsers = async () => {
    setLoading(true);
    try {
      document.getElementById("main--user--box").style.display = "block";
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setLoading(false);
      console.log(data.data);
      setUsers(data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <div className="App">
        <Navbar onBtnIsClicked={setClicked} />
        <div id="main--user--box">
          <div className="users--div">
            {users.map((items) => (
              <Users
                key={items.id}
                img={items.avatar}
                fname={items.first_name}
                lname={items.last_name}
                email={items.email}
                id={items.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default App;
