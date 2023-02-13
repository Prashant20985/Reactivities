import React, { useEffect} from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Container } from "semantic-ui-react";
import ActivityDashBoard from "../../features/Activities/Dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content="Loading app" />;

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard />
      </Container>
    </>
  );
}

export default observer(App);
