import "./index.css";
import { getUsers } from "./api/userApi";

getUsers.then(result => {
  let userBody = "";
  result.forEach(user => {
    userBody += `<tr><td>${user}</td></tr>`
  });
  global.document.getElementById("users").innerHTML = userBody;
})
