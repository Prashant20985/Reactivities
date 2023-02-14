import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilter() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon='filter' attached color='teal' content='Filters' />
          <Menu.Item content='All Activites' />
          <Menu.Item content="I'm going" />
          <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
}
