import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((x) => x.json())
      .then(({ data }) => setUsers(data));
  }, []);

  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {users.map((e, i) => (
        <p key={i}>
          User {e.id}. - <Link to={`/users/${e.id}`}>{e.first_name}</Link>
        </p>
      ))}
    </div>
  );
};

// Declarative vs Imperative
