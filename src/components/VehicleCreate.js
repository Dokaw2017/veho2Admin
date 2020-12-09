import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const VehicleCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="vin" />
        <TextInput source="name" />
        <TextInput multiline source="vehicleId" />
        <TextInput multiline source="soc" />
        <TextInput multiline source="ownerId" />
        <TextInput multiline source="endOfChargeTime" />
        <TextInput multiline source="battreyState" />
        <TextInput multiline source="battreyStatus" />
      </SimpleForm>
    </Create>
  );
};

export default VehicleCreate;
