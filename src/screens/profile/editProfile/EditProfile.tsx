import React, { useContext, useState } from "react";
import AuthContext from "../../../contexts/authContext/authContext";
import { api } from "../../../utils";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    full_name: user?.name,
    email: user?.email,
    gender: user?.gender,
    age: user?.age,
    description: user?.about || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const dummyUserId = user?.id; // <-- replace with real one later
      const result = await api.auth.editUserDetails(formData, dummyUserId);
      setUser(result);
      console.log("User updated:", result);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile-form w-form">
        <form
          name="wf-form-signup"
          method="get"
          className="signup-container-profile-edit"
        >
          <h4 className="edit-profile-hesding">Edit Profile</h4>

          <div className="input-field-wrapper-edit-profile">
            <div className="input-wrapper-edit-profile">
              <input
                className="form-field-edit-profile w-input"
                maxLength={256}
                name="full_name"
                placeholder="Name"
                type="text"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-field-wrapper-edit-profile">
            <div className="input-wrapper-edit-profile">
              <input
                className="form-field-edit-profile w-input disabled-input"
                maxLength={256}
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>
          </div>

          <div className="edit-profile-input-flex">
            <div className="input-field-wrapper-edit-profile">
              <div className="input-wrapper-edit-profile">
                <input
                  className="form-field-edit-profile w-input"
                  maxLength={256}
                  name="gender"
                  placeholder="Gender"
                  type="text"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-wrapper-edit-profile">
              <div className="input-wrapper-edit-profile">
                <input
                  className="form-field-edit-profile w-input"
                  maxLength={256}
                  name="age"
                  placeholder="Age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-wrapper-edit-profile">
            <input
              className="form-field-edit-profile w-input"
              maxLength={256}
              name="description"
              placeholder="Something about you"
              type="text"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div
            onClick={handleSubmit}
            className="button-4 w-button mt-5"
            style={{ cursor: "pointer" }}
          >
            Update
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
