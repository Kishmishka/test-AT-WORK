import { FC, useEffect, useRef, useState, } from "react"
import "./CustomInput.scss"
import CrossIcon from "../IconsComponetns/CrossIcon/CrossIcon"


interface CustomInputProps{
	title:string,
	state:string,
	onChange:(state:string)=>void,
}

const CustomInput:FC<CustomInputProps> = ({state, title, onChange}) => {
	const [isAvtive, setIsActive] = useState<boolean>(false)
	const [isDone, setisDone] = useState<boolean>(false)
	const ref = useRef<HTMLDivElement>(null);

	const handleClick = (e:Event) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setIsActive(false)
		}
	 };

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
		  document.removeEventListener("click", handleClick);
		};
	 });

	return(
		<div className="customInput">
			<div className="customInput__title">{title}</div>
			<div 
			ref={ref}
			onBlur={()=>setisDone(true)}
			className="customInput__container">
				<input
					onChange={(e)=>onChange(e.target.value)}
					onFocus={()=>{
						setIsActive(true);
						setisDone(false)}}
					className={`customInput__input ${isDone ? "done":""}`}
					type="text"
					value={state}/>
					<div
					className={`customInput__icon ${isAvtive ? "active":""}`}
					onClick={()=>{
						onChange("")}}>
						<CrossIcon width="12"/>
					</div>
				</div>	
		</div>
)
}
export default CustomInput