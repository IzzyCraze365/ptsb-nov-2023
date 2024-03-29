import "./User.css";
import UserDetails from "./UserDetails.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const User = () => {
  const [, , theme] = useContext(ThemeContext); /* this pulls the theme from the ThemeContext - Props out of Sync */
  return (
    <div className="user-container" style={theme}>
      <UserDetails />
    </div>
  );
};

export default User;