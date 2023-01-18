import { useNavigate,Outlet } from "react-router-dom";
import { useEffect } from "react";

function ProctectedRoutes({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("record");
    //const allData = JSON.parse(data);
 
    if (!data) {
      navigate("/login");
    }
  });

  return (
    <div>
      After Login
      <Outlet />
    </div>
  );
}

export default ProctectedRoutes;
