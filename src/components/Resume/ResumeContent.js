import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item" style={{ textAlign: "center" }}>
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index} style={{ textAlign: "center" }}> ‣ {value}</li>
        ))}
      </ul>
      {
        props.link &&  
        <a href={props.link} target="_blank" style={{"textDecoration": "none",}}>Paper Link</a>

      }
    </div>
  );
}

export default ResumeContent;
