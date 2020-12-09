import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const VehicleList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="vin" />
        <TextField source="vehicleId" />
        <TextField source="soc" />
        <TextField source="ownerId" />
        <TextField source="name" />
        <TextField source="endOfChargeTime" />
        <TextField source="battreyState" />
        <TextField source="battreyStatus" />

        <EditButton basePath="/vehicle" />
        <DeleteButton basePath="/vehicle" />
      </Datagrid>
    </List>
  );
};

export default VehicleList;
