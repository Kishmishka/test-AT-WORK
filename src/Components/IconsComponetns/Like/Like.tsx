import { FC, useState } from "react"
import { IconsComponetProps } from "../../../interfaces"
import './Like.scss'

const Like: FC<IconsComponetProps> = ({width}) => {
	const [iconClick, iconClickState] = useState(false)
	return(
		<svg 
			onClick={()=>iconClickState(true)}
			className="likeIcon"
			width={width} 
			height={width} 
			viewBox="0 0 14 12" 
			fill="none" 
			stroke={iconClick ? "#595959":"#161616"}
			xmlns="http://www.w3.org/2000/svg">
				<path d="M6.54316 1.85453L6.99998 2.39097L7.45679 1.85453C8.04423 1.16469 8.94805 0.72793 9.87998 0.72793C11.5198 0.72793 12.8 2.0081 12.8 3.64793C12.8 4.66044 12.35 5.62601 11.4355 6.74406C10.5142 7.87052 9.185 9.07731 7.52493 10.5827L7.52407 10.5834L6.99844 11.0619L6.47549 10.5895C6.47527 10.5893 6.47504 10.5891 6.47482 10.5889C4.81493 9.08047 3.48592 7.87227 2.56453 6.74501C1.64992 5.62605 1.19998 4.66045 1.19998 3.64793C1.19998 2.0081 2.48015 0.72793 4.11998 0.72793C5.0519 0.72793 5.95572 1.16469 6.54316 1.85453Z" />
		</svg>
)
}
export default Like