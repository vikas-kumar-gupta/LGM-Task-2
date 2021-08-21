import React from "react";
import style from "./users.module.css";

const Users = ({ img, fname, lname, email, id }) => {
  return (
    <div className={style.user}>
      <div className={style.imgBoX}>
        <img className={style.avatar} src={img} alt=""></img>
      </div>
      <h2>
        {fname} {lname}
      </h2>
      <a href="#">
        <p>{email}</p>
      </a>
    </div>
  );
};

export default Users;
