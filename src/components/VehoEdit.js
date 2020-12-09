import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const VehoEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput multiline source="name" />
        <TextInput multiline source="type" />
        <TextInput source="status" />
        <TextInput multiline source="currentUserName" />
        <TextInput multiline source="currentVehicleName" />
        <TextInput source="currentVehicleId" />
      </SimpleForm>
    </Edit>
  );
};

export default VehoEdit;
