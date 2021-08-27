import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditTask = (props) => {
  const { editTask, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editTask(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Task Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Link to="/" className="btn btn-outline-primary">Cancel</Link>
    </Form>
  )
}
