import React from "react";
import { Admin, Login, Resource } from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import { FirebaseAuthProvider } from "react-admin-firebase";
import { auth } from "./firebase";
import VehoList from "./VehoList";
import VehoEdit from "./VehoEdit";
import VehoCreate from "./VehoCreate";
import app from "../firebase";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import UserCreate from "./UserCreate";

const trackedResources = [{ name: "vehos", isPublic: true }];

const options = {
  logging: true,
  rootRef: "root_collection/some_document",
};

const dataProvider = FirebaseDataProvider(app, trackedResources);
const authProvider = FirebaseAuthProvider(app);

const AdminPage = () => {
  return (
    <Admin loginPage={Login} dataProvider={dataProvider}>
      <Resource
        name="vehos"
        list={VehoList}
        edit={VehoEdit}
        create={VehoCreate}
      />
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
};

export default AdminPage;
