import "./CustomPopup.scss"
import CrossIcon from "../IconsComponetns/CrossIcon/CrossIcon";
import seccessImg from '../../Img/saveSuccess.png'
import { hidePopupSucces } from "../../Store/userSlice";
import { useAppDispath, useAppSelector } from "../../Hooks/reduxHooks";
const CustomPopup = () => {
	const dispatch = useAppDispath()
	const popupSuccesIsActive = useAppSelector(state=>state.users.popupSuccesIsActive)
	
	return(
		<div 
		className={`customPopup ${popupSuccesIsActive ? "active":""}`}
		onClick={()=>dispatch(hidePopupSucces())}>
			<div 
			className={`customPopup__container ${popupSuccesIsActive ? "active":""}`} 
			onClick={e=> e.stopPropagation()}>
				<div 
				onClick={()=>dispatch(hidePopupSucces())} 
				className="customPopup__cross">
					<CrossIcon width="13"/>
				</div>
				<div className="customPopup__content">
					<img className="customPopup__img" src={seccessImg} alt="success"/>
					<div className="customPopup__text">Изменения сохранены!</div>
				</div>
			</div>
		</div>
)
}
export default CustomPopup