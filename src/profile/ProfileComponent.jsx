import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = ({ fullName, bio, profession, children }) => {
  ProfileComponent.defaultProps = {
    fullName: "Anonymous",
    bio: "Empty",
    profession: "Empty",
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    profilePicture: {
      flexBasis: "20%",
      display: "flex",
      flexDirection: "column",
      color: "#1d2733",
    },
    info: {
      margin: "5px",
      padding: "5px",
      border: "2px solid #1d2733",
      borderRadius: "15px",
      fontWeight: "bold",
      flexBasis: "70%",
      height: "relative",
      display: "flex",
      flexDirection: "column",
    },
  };
  const handleName = (x) => {
    alert(`hey ${x}, quite a nice profile!`);
  };
  return (
    <div className="container" style={styles.container}>
      <div className="profilePicture" style={styles.profilePicture}>
        {children}
        <h1 style={{ fontSize: "2.3vw", fontWeight: "bold" }}>{fullName}</h1>
      </div>
      <div className="info" style={styles.info}>
        <span>profession : {profession}</span>
        <span>{bio}</span>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => handleName(fullName)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default ProfileComponent;
