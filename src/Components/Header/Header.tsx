import "./Header.scss"
import Like from "../IconsComponetns/Like/Like"
import Notification from "../IconsComponetns/Notification/Notification"
import logo from "../../Img/logo.png"
import UserInfo from "../UserInfo/UserInfo"
import userPhoto from "../../Img/userPhoto.jpg"
const Header = () => {
	return(
	<header className="header">
		<div className="container header__container">
			<img className="header__img" src={logo} alt="logo" />
			<div className="header__menu ">
				<div className="header__menu-buttons">
					<Like width="20"/>
					<Notification width="20"/>
				</div>
				<UserInfo nickname="misha" imgURL={userPhoto}/>
			</div>
		</div>
	</header>
)
}
export default Header