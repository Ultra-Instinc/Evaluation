import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
const RequireAuth = () => {
	const user = useAppSelector((state) => state.user.value);
	return <div>{user === true ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default RequireAuth;
