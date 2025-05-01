import React from "react";

const EditProfile = () => {
  return (
    <div
      id="w-node-_8af30e3c-d563-cc2d-005d-c6de7b4297be-1538e4e7"
      className="edit-profile"
    >
      <div className="edit-profile-form w-form">
        <form
          id="wf-form-signup"
          name="wf-form-signup"
          data-name="signup"
          method="get"
          data-ms-form="signup"
          className="signup-container-profile-edit"
          data-wf-page-id="674c4bd4a2796e5a1538e4e7"
          data-wf-element-id="c0af0e32-571a-6f65-650c-11a88c7aa943"
        >
          <h4 className="edit-profile-hesding">Edit Profile</h4>
          <div
            id="w-node-d5ba6a23-980e-f379-d4e9-02ca982da006-27b28b52"
            data-current="Tab 1"
            data-easing="ease"
            data-duration-in={300}
            data-duration-out={100}
          >
            <div className="input-field-wrapper-edit-profile">
              <div className="input-wrapper-edit-profile">
                <input
                  className="form-field-edit-profile w-input"
                  maxLength={256}
                  name="first_name"
                  placeholder="Name"
                  type="text"
                  id="Name-3"
                  // value={formData?.first_name}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-wrapper-edit-profile">
              <div className="input-wrapper-edit-profile">
                <input
                  className="form-field-edit-profile w-input"
                  maxLength={256}
                  name="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  // value={formData?.email}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="edit-profile-input-flex">
              <div className="input-field-wrapper-edit-profile">
                <div className="input-wrapper-edit-profile">
                  <input
                    className="form-field-edit-profile w-input"
                    maxLength={256}
                    name="Gender"
                    placeholder="Gender"
                    type="text"
                    id="Gender"
                    //   value={formData?.gender}
                    //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-field-wrapper-edit-profile">
                <div className="input-wrapper-edit-profile">
                  <input
                    className="form-field-edit-profile w-input"
                    maxLength={256}
                    name="Age"
                    placeholder="Age"
                    type="number"
                    id="Age"
                    //   value={formData?.age}
                    //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-wrapper-edit-profile">
              <input
                className="form-field-edit-profile w-input"
                maxLength={256}
                name="about_me"
                placeholder="something about you"
                type="text"
                id="Name-3"
                //   value={formData?.about_me}
                //   onChange={handleChange}
                required
              />
              <div
                //   onClick={handleSubmit}
                data-wait="Please wait..."
                className="button-4 w-button mt-5"
                defaultValue="Update"
              >
                Update
              </div>
            </div>
            {/* <div onClick={handleSubmit} type="submit">
        Update Profile
      </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
