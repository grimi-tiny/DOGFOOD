import React from "react";
import ReactDOM from "react-dom";
import"./style.css";

const Card = function() {
return <div className="card">^__^</div>
}

ReactDOM.render(
  <>
  <h1>Hello dear <span className="mark">React</span></h1>
  <div class="box">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
</div>
  </>,
  document.querySelector("#root")
)