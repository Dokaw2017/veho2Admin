import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Chip from "@material-ui/core/Chip";

const TextArrayField = ({ record, source }) => {
  const [queues, setQueues] = useState([]);

  const ref = firebase.firestore().collection("queue");

  const getQueues = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setQueues(items);
    });
  };

  useEffect(() => {
    getQueues();
  }, []);

  const array = queues[source];
  if (typeof array === "undefined" || array === null || array.length === 0) {
    return <div />;
  } else {
    return (
      <>
        {array.map((item) => (
          <Chip label={item} key={item} />
        ))}
      </>
    );
  }
};
TextArrayField.defaultProps = { addLabel: true };

export default TextArrayField;
