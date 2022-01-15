import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./store/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail--header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail--close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail--error">To is required"</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail--error">Subject is required</p>
        )}
        <input
          placeholder="Message"
          type="text"
          className="sendMail--message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail--error">Message is required</p>
        )}
        <div className="sendMail--option">
          <Button
            className="sendMail--send"
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
