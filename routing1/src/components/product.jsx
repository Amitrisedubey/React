import { useParams } from "react-router-dom";
export const Products = () => {
  const { id } = useParams();
  return <div>products details of id:- {id}</div>;
};
