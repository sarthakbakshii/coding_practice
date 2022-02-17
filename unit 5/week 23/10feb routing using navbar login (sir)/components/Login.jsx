import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="Enter Password" />
      <input type="text" placeholder="Enter password" />
      <button
        onClick={() => {
          // Imperative
          navigate(-1);
        }}
      >
        Login
      </button>
    </div>
  );
};
