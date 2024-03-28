"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    axios
      .get("https://9f1d-2405-201-2006-7d89-d96-9df0-5414-cd7b.ngrok-free.app/adminget")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); 

  const handleDelete = (userId) => {
    console.log("Deleting user with ID:", userId);
    setShowDeleteModal(false);
    // Optionally, remove the user from the state to update the UI
    setUsers(users.filter(user => user.u_id !== userId));
  };
  const handleStatusChange = (userId, newStatus) => {
    // Update the status in the backend first
    axios.patch(`https://yourapiendpoint.com/user/${userId}`, { status: newStatus })
      .then(response => {
        setUsers(users.map(user => {
          if (user.u_id === userId) {
            return { ...user, status: newStatus };
          }
          return user;
        }));
      })
      .catch(error => {
        console.error("Error updating user status:", error);
      });
  };
  
  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3 mt-5">
        <Link href="addnew" passHref>
          <button className="btn btn-primary">Add New</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Alternate No.</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.u_id}>
              <td>
                <div className="d-flex align-items-center">
                  <Image
                    src={user.avatar || "/noavatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-circle me-2"
                    unoptimized 
                  />
                  {user.first_name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.alternate_phone}</td>
              <td>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      id={`statusSwitch${user.u_id}`}
      checked={user.status}
      onChange={(e) => handleStatusChange(user.u_id, e.target.checked)}
    />
  </div>
</td>

<td> 
<div className="d-flex gap-2">
  <Link href={`/${user.u_id}`} passHref className="icon-link">
      <VisibilityIcon style={{ cursor: 'pointer' }} />
  </Link>
  <DeleteIcon
    style={{ cursor: 'pointer' }}
    onClick={() => {
      setShowDeleteModal(true);
      setUserToDelete(user.u_id);
    }}
  />
</div>
</td>

</tr>
))}
</tbody>
</table>

      {showDeleteModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this user?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(userToDelete)}
                >
                  Yes, Delete it !!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
