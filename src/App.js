import React, { Component } from 'react';
import "./style.css";
import AdminLTE, { Sidebar, Navbar, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import New from "./New";
import Dash from "./Dash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import Button from 'react-bootstrap/Button';
const element = <FontAwesomeIcon icon={faCoffee} />

const { Item, Header, UserPanel, Searchbar, } = Sidebar;

const { MessageItem, Entry, NotificationItem, TaskItem } = Navbar;



class App extends Component {

  sidebar = [
    <React.Fragment>
    <Item text="Dash" to="/" />

    <Item text="new pageo">
        <Item text="Hello" to="/new" />
    </Item>
    </React.Fragment>
  ]
footer = [<p>Djmk</p>];
  render() {
    return (
      <AdminLTE title={["Hello", "World"]} titleShort={["He", "we"]} theme="blue" sidebar={this.sidebar} footer={this.footer}>
         <Navbar.Core>
            <Entry
              icon="fas-user"
              labelValue="0"
              
            >
            <UserPanel username="User"  imageUrl="https://blog.bonus.ly/hubfs/connie-du.jpg"/>
              <NotificationItem text="Logout" to="/" />
            
            </Entry>
          </Navbar.Core>
        <New path="/new" />
        <Dash path="/" />
        
      </AdminLTE>
    );
  }
}

export default App;