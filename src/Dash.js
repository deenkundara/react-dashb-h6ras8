
import React from "react"; 
import "./style.css";
//import { Button } from 'react-bootstrap';
import AdminLTE, {
  Sidebar,
  Navbar,
  Content,
  Row,
  Col,
  Box,
  Button
} from "adminlte-2-react";

class Dash extends React.Component {
  state = {}

  render() {
    return (
      <Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            Hello World-
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}


export default Dash;