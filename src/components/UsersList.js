import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {users.map((user, i) => (
            <UserCard user={user} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
