import { FC, useEffect, useRef, useState } from "react"
import "./CustomDropdown.scss"
import DropdownIcon from "../IconsComponetns/DropdownIcon/DropdownIcon";
import { useAppDispath } from "../../Hooks/reduxHooks";
import { activeUserCard, arhiveUserCard, deleteUserCard} from "../../Store/userSlice";
import { Link } from "react-router-dom";

interface IDropdownItems{
	id:number,
	isActive:boolean,
}

const CustomDropdown:FC<IDropdownItems> = ({id,isActive}) => {
	const dispatch = useAppDispath()
	const [activeDropdown, setshowDropdown] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	function toggleDropdown(){
		setshowDropdown((activeDropdown)=>!activeDropdown)
	}

	const handleClick = (e:Event) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setshowDropdown(false)
		}
	 };

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
		  document.removeEventListener("click", handleClick);
		};
	 });
	return(
		<div className="customDropdown" >
			{isActive? 
			<div  className={`customDropdown__items ${activeDropdown ? "active":""}`}>
				<Link to={`/edit/${id}`} className="customDropdown__item">Редактировать</Link>
				<div onClick={()=>{dispatch(arhiveUserCard(id))}} className="customDropdown__item">Архивировать</div>
				<div onClick={()=>{dispatch(deleteUserCard(id))}} className="customDropdown__item">Скрыть</div>
			</div>:<div  className={`customDropdown__items ${activeDropdown ? "active":""}`}>
				<div onClick={()=>{dispatch(activeUserCard(id))}} className="customDropdown__item">Активировать</div>
			</div>
			}
			<div ref={ref}>
				<DropdownIcon width="16" onClick={toggleDropdown} clicked={activeDropdown}/>
			</div>
		</div>
		)
}
export default CustomDropdown