import React from "react";
import { Admin, Login, Resource } from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import { FirebaseAuthProvider } from "react-admin-firebase";
import { auth } from "./firebase";
import VehoList from "./components/VehoList";
import VehoEdit from "./components/VehoEdit";
import VehoCreate from "./components/VehoCreate";
import app from "./firebase";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import UserCreate from "./components/UserCreate";
import VehicleList from "./components/VehicleList";
import VehicleEdit from "./components/VehicleEdit";
import VehicleCreate from "./components/VehicleCreate";
import QueueList from "./components/QueueList";
import QueueEdit from "./components/QueueEdit";
import QueueCreate from "./components/QueueCreate";

const trackedResources = [{ name: "veho", isPublic: true }];

const options = {
  logging: true,
  rootRef: "root_collection/some_document",
};

const dataProvider = FirebaseDataProvider(app, trackedResources);
const authProvider = FirebaseAuthProvider(app);

const App = () => {
  return (
    <Admin
      loginPage={Login}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="veho"
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

      <Resource
        name="vehicle"
        list={VehicleList}
        edit={VehicleEdit}
        create={VehicleCreate}
      />

      <Resource
        name="queue"
        list={QueueList}
        edit={QueueEdit}
        create={QueueCreate}
      />
    </Admin>
  );
};

export default App;
