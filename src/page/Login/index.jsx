import React from "react";
import axios from "axios";
import swal from "sweetalert";

function login() {
  const checkLogin = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("username: " + username + ", password: " + password);

    axios({
      url: "http://localhost:8080/account/login",
      method: "POST",
      data:{
        username: username,
        password: password,
      }
    })
    .then(data=>{console.log(data)
    swal("Thong Bao","Dang nhap thanh cong","success");
    })
    
    .catch(err => {console.log(err)});

  };

  return (
    <div>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            checkLogin();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default login;