import UserList from "../Components/UserList/UserList"
import useFetchUsers from "../Hooks/useFetchUsers"
import { useAppSelector } from "../Hooks/reduxHooks"

const HomePage = () => {
	useFetchUsers()
	const activUsers = useAppSelector(state=>state.users.activeUsers)
	const archiveUsers = useAppSelector(state=>state.users.archiveUsers)
	return( 
		<>
			<UserList items={activUsers} title='Активные'/>
			<UserList items={archiveUsers} title='Архив'/>
		</>
)
}
export default HomePage