import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userid } = useParams();

  return <div>User Details : {userid}</div>;
};
