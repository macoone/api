import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  console.log(userId, "userId");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>{user && user.name}</h3>
      <h3>{user && user.username}</h3>
      <h3>{user && user.email}</h3>
    </div>
  );
}
