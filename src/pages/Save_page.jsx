import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Save from "../components/Save";
import { useEffect, useState } from "react";

function Save_page({ ingred, onChange, onRegister, username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <Header></Header>
      <Save {...ingred} onChange={onChange} onRegister={onRegister}></Save>
    </>
  );
}

export default Save_page;
