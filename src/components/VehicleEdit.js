import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const VehicleEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
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
    </Edit>
  );
};

export default VehicleEdit;
