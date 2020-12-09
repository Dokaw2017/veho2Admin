import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="userName" />
        <TextInput source="email" />
        <TextInput source="phoneNumber" />
        <TextInput source="type" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
