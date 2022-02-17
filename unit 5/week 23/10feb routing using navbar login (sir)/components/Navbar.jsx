import { Link } from "react-router-dom";
// import styled from "styled";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about" style={{ margin: "0px 10px" }}>
        About
      </Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users" style={{ margin: "0px 10px" }}>
        Users list
      </Link>
    </div>
  );
};

// const StyledLink = styled(Link)``
