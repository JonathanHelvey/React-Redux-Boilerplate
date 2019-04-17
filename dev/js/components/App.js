import React from "react";
require("../../scss/style.scss");
import UserList from "../containers/user.list";

const App = () => (
  <div>
    <h2>User Names List:</h2>
    <UserList />
    <hr />
    <h2>User Details: </h2>
  </div>
);

export default App;
