import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeTask} = useContext(GlobalContext);

  return (
    
    <ListGroup className="mt-4">
      {
        <div className="d-flex">
          <div className='d-flex'>
            Task
          </div>
          <div className="ml-auto">Action</div>
        </div>     
               }
      {users.length > 0 ? (
        <>
          {users.map(user => (
            
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeTask(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Tasks</h4>
        )}
    </ListGroup>
  )
}
