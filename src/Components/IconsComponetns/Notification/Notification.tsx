import { FC, useState } from "react"
import { IconsComponetProps } from "../../../interfaces"
import './Notification.scss'
const Notification:FC<IconsComponetProps> = ({width}) => {
	const [iconClick, iconClickState] = useState(false)
	return(
		<svg
			onClick={()=>iconClickState(true)} 
			className="notification"
			width={width} 
			height={width}
			viewBox="0 0 14 14" 
			fill={iconClick ? "#595959":"#161616"}
			xmlns="http://www.w3.org/2000/svg">
				<path d="M5.73936 1.04978C5.84095 0.798689 6.01521 0.583658 6.23981 0.432249C6.4644 0.28084 6.72909 0.199951 6.99995 0.199951C7.27081 0.199951 7.53551 0.28084 7.7601 0.432249C7.98469 0.583658 8.15895 0.798689 8.26054 1.04978C9.26599 1.32629 10.1529 1.92523 10.785 2.75459C11.417 3.58395 11.7594 4.59788 11.7595 5.64066V8.83428L13.0051 10.7027C13.0734 10.8051 13.1126 10.9241 13.1186 11.0471C13.1246 11.17 13.0971 11.2923 13.039 11.4009C12.9809 11.5094 12.8945 11.6001 12.7889 11.6634C12.6833 11.7266 12.5625 11.76 12.4394 11.76H9.35591C9.27404 12.3265 8.99082 12.8445 8.55815 13.2191C8.12546 13.5937 7.57229 13.8 6.99995 13.8C6.42762 13.8 5.87444 13.5937 5.44176 13.2191C5.00908 12.8445 4.72587 12.3265 4.644 11.76H1.56052C1.43743 11.76 1.31664 11.7266 1.21103 11.6634C1.10543 11.6001 1.01898 11.5094 0.960912 11.4009C0.90284 11.2923 0.875322 11.17 0.881294 11.0471C0.887266 10.9241 0.926505 10.8051 0.994823 10.7027L2.24045 8.83428V5.64066C2.24045 3.44857 3.7227 1.60188 5.73936 1.04978ZM5.75693 11.76C5.88679 12.1826 6.0742 12.4409 6.27637 12.584C6.44862 12.7059 6.78928 12.7713 7.00029 12.7713C7.2113 12.7713 7.5765 12.7313 7.8347 12.5486C8.16238 12.3167 8.24851 11.959 8.31873 11.76H5.75693ZM6.99995 1.85273C6.09831 1.85273 4.9363 2.28174 4.29874 2.91929C3.66118 3.55685 3.30301 4.73901 3.30301 5.64066V9.0403C3.30304 9.17461 3.26329 9.30591 3.18878 9.41766L2.24045 10.7027H11.7595L10.8042 9.41766C10.73 9.30584 10.6905 9.17454 10.6907 9.0403V5.64066C10.6907 4.73901 10.3325 3.55685 9.69496 2.91929C9.0574 2.28174 7.90159 1.85273 6.99995 1.85273Z"/>
		</svg>
)
}
export default Notification