import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const QueueEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="userId" />
      </SimpleForm>
    </Edit>
  );
};

export default QueueEdit;
