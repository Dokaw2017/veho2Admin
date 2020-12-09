import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Chip from "@material-ui/core/Chip";
import TextArrayField from "./TextArrayField";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ArrayField,
  SingleFieldList,
  ChipField,
  SelectField,
} from "react-admin";

const QueueList = (props) => {
  /*const [queues, setQueues] = useState([]);

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
  }, []);*/
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="queue" id="id" />

        <EditButton basePath="/queue" />
        <DeleteButton basePath="/queue" />
      </Datagrid>
    </List>
    /*<List {...props}>
      <Datagrid>
        <SelectField source="queue" />
      </Datagrid>
    </List>*/
    /*<List {...props}>
      <ArrayField source="queue">
        <SingleFieldList>
          <QueueField />
        </SingleFieldList>
      </ArrayField>
    </List>*/

    /*<ul>
      {queues.map((item) => {
        <li key={item.id}>{item.id}</li>;
      })}
    </ul>*/
    /*<ul>
      {queues.map((queue) => (
        <li key={queue}>{queue}</li>
      ))}
    </ul>*/

    /* <TextArrayField source="tags">
      <SingleFieldList>
        <ChipField source="id" />
      </SingleFieldList>
    </TextArrayField>*/
  );

  /*QueueList.defaultProps = {
    addLable: true,
  };*/
};

export default QueueList;
