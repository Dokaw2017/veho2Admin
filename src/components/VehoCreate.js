import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const VehoCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput multiline source="name" />
        <TextInput multiline source="type" />
        <TextInput source="status" hidden="true" defaultValue="null" />
        <TextInput
          multiline
          source="currentUserName"
          hidden="true"
          defaultValue="null"
        />
        <TextInput
          multiline
          source="currentVehicleName"
          hidden="true"
          defaultValue="null"
        />
        <TextInput
          source="currentVehicleId"
          hidden="true"
          defaultValue="null"
        />
      </SimpleForm>
    </Create>
  );
};

export default VehoCreate;
