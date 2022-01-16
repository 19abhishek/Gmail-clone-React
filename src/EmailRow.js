import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./store/mailSlice";

function EmailRow({ title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ title, subject, description, time }));
    history.push("/mail");
  };
  return (
    <div className="container">
      <div onClick={openMail} className="emailRow">
        <div className="emailRow--options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="emailRow--title">{title}</h3>
        <div className="emailRow--message">
          <h4>
            {subject}
            <span className="emailRow--description"> - {description}</span>
          </h4>
        </div>
        <div className="emailRow--time">{time}</div>
      </div>
    </div>
  );
}

export default EmailRow;
