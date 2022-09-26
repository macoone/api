import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/users">
        <h3>List Users</h3>
      </Link>
    </div>
  );
}
