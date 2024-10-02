import { useEffect } from "react";
import { fetchUsers } from "../Store/userSlice";
import { useAppDispath } from "./reduxHooks";

export default function useFetchUsers(){
	const dispath = useAppDispath();

	useEffect(()=>{
		dispath(fetchUsers())
	},[dispath])

}