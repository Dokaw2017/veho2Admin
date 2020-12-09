import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const VehoList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="status" />
        <TextField source="currentUserName" />
        <TextField source="currentUserId" />
        <TextField source="chargingVehicleName" />
        <TextField source="chargingVehicleId" />

        <EditButton basePath="/veho" />
        <DeleteButton basePath="/veho" />
      </Datagrid>
    </List>
  );
};

export default VehoList;
