import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";

function Change_pw_page({ username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <UserHeader user={user}></UserHeader>
    </>
  );
}

export default Change_pw_page;
