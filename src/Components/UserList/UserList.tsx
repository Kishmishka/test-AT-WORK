import { FC } from "react"
import "./UserList.scss"
import { IUserCardList } from "../../interfaces"
import UserCard from "../UserCard/UserCard"
import { useAppSelector } from "../../Hooks/reduxHooks"
import Loader from "../Loader/Loader"

const UserList:FC<IUserCardList> = ({items,title}) => {
	const loadingUsers = useAppSelector(state=>state.users.loading)
	return(
		<div className="userList">
			<div className="container">
				<div className="userList__title">{title}</div>
				<Loader loading={loadingUsers}/>
				<div className="userList__items">
					{items.map((el)=><UserCard key={el.id} isActive={el.isActive} username={el.username} city={el.address.city} companyName={el.company.name} id={el.id}/>)}
				</div>
			</div>
		</div>
)
}
export default UserList