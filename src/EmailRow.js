import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";

function EmailRow({ title, subject, description, time }) {
  const history = useHistory();
  return (
    <div class="container">
      <div onClick={() => history.push("/mail")} className="emailRow">
        <div class="emailRow--options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 class="emailRow--title">{title}</h3>
        <div class="emailRow--message">
          <h4>
            {subject}
            <span class="emailRow--description"> - {description}</span>
          </h4>
        </div>
        <div class="emailRow--time">{time}</div>
      </div>
      <div className="emailRow">
        <div class="emailRow--options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 class="emailRow--title">{title}</h3>
        <div class="emailRow--message">
          <h4>
            {subject}{" "}
            <span class="emailRow--description"> - {description}</span>
          </h4>
        </div>
        <p class="emailRow--time">{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
