import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Ken" job="Developer" />
      <Person img="22" name="Warner" job="Designer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          totam!
        </p>
      </Person>
      <Person img="61" name="Richardson" job="CTO" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
