import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Rate from "../components/Rate";

function Rate_page({ ingred, username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <Rate ingred={ingred}></Rate>
    </>
  );
}

export default Rate_page;
