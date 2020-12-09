import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="userName" />
        <TextInput source="email" />
        <TextInput source="phoneNumber" />
        <TextInput source="type" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
