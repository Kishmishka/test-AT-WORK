import { FC } from "react"
import "./UserInfo.scss"

interface HeaderUserInfoProps{
	nickname:string,
	imgURL:string,
}

const UserInfo:FC<HeaderUserInfoProps> = ({nickname,imgURL}) => {
	return(
		<div className="userInfo">
			<img className="userInfo__avatar" src={imgURL} alt="" />
			<div className="userInfo__nickname">{nickname}</div>
		</div>
)
}
export default UserInfo