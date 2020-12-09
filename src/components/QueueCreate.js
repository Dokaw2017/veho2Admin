import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const QueueCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="userId" />
      </SimpleForm>
    </Create>
  );
};

export default QueueCreate;
