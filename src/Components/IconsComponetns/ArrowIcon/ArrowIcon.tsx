import { FC } from "react"
import "./ArrowIcon.scss"
import { IconsComponetProps } from "../../../interfaces"
import { useNavigate } from "react-router-dom"

const ArrowIcon:FC<IconsComponetProps> = ({width}) => {
	const navigate = useNavigate()
	return(
<div onClick={()=>navigate('/')} className="arrow" >
	<svg 
	className="arrow__icon"
	width={width}
	height={width}
	viewBox="0 0 24 24" 
	fill="none" 
	xmlns="http://www.w3.org/2000/svg">
		<path d="M6 12H18M6 12L11 7M6 12L11 17"/>
	</svg>
	<div className="arrow__text">
		Назад
	</div>
</div>
	
)
}
export default ArrowIcon