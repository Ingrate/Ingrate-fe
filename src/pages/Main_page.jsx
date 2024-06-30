import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Main_page({ onChange, username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <div>
      <Navbar user={user}></Navbar>
      <Header></Header>
      <Search onChange={onChange}></Search>
    </div>
  );
}

export default Main_page;
