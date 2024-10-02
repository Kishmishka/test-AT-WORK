import { FC } from "react"
import "./CustomInput.scss"

interface CustomInputProps{
	title:string,
	state:string,
	useState:(state:string)=>void,
}

const CustomInput:FC<CustomInputProps> = ({state, title, useState}) => {
	return(
		<div className="customInput">
			<div className="customInput__title">{title}</div>
				<input 
				onChange={(e)=>{useState(e.target.value)}}
				className="customInput__input"
				type="text"
				value={state}/>
		</div>
		
)
}
export default CustomInput