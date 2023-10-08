import React, { useState } from "react";
import UserNav from "../../Components/Nav/UserNav";
import { auth } from "../../firebase";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a credential with the user's current email and password
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    try {
      // Re-authenticate the user with their current credentials
      await reauthenticateWithCredential(user, credential);

      // If reauthentication is successful, update the password
      await updatePassword(user, newPassword);

      setLoading(false);
      setCurrentPassword("");
      setNewPassword("");
      toast.success("Password updated");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Current Password</label>
        <input
          type="password"
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="form-control"
          placeholder="Enter current password"
          disabled={loading}
          value={currentPassword}
        />
      </div>
      <div className="form-group">
        <label>Your New Password</label>
        <input
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
          placeholder="Enter new password"
          disabled={loading}
          value={newPassword}
        />
      </div>
      <button
        className="btn btn-primary"
        disabled={!currentPassword || !newPassword || loading}
      >
        Submit
      </button>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Password Update</h4>
          )}
          {passwordUpdateForm()}
        </div>
      </div>
    </div>
  );
};

export default Password;
