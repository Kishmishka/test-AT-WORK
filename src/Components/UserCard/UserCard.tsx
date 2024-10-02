import { FC } from "react"
import "./UserCard.scss"
import { IUserCard } from "../../interfaces"
import CustomDropdown from "../CustomDropdown/CustomDropdown"


const UserCard:FC<IUserCard> = ({username, city, companyName, id, isActive}) => {
	return(
		<div className="userCard">
			<div className="userCard__container">
				<div className={`userCard__img ${!isActive ? "arhive":""}`}/>
				<div className="userCard__content">
					<div className="userCard__userInfo userInfo">
						<div className="userInfo__container">
							<div className="userInfo__nameSection">
								<div className={`userInfo__nameSection-name ${!isActive ? "arhive":""}`} >{username}</div>
								<CustomDropdown isActive={isActive} id={id}/>
							</div>
							<div className={`userInfo__company ${!isActive ? "arhive":""}`}>{companyName}</div>
						</div>
						<div className={`userInfo__city ${!isActive ? "arhive":""}`}>{city}</div>
					</div>
				</div>	
			</div>
		</div>
)
}
export default UserCard