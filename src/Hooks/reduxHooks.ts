import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppDispath, RootState } from "../Store";

export const useAppDispath = () => useDispatch<AppDispath>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;