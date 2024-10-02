import CustomPopup from "../../Components/CustomPopup/CustomPopup"
import EditForm from "../../Components/EditForm/EditForm"
import EditSideBar from "../../Components/EditSideBar/EditSideBar"
import ArrowIcon from "../../Components/IconsComponetns/ArrowIcon/ArrowIcon"
import Loader from "../../Components/Loader/Loader"
import useFetchUsers from "../../Hooks/useFetchUsers"
import { useAppSelector } from "../../Hooks/reduxHooks"
import "./EditPage.scss"

const EditPage = () => {
	
	const loading = useAppSelector(state=>state.users.loading)
	useFetchUsers()
	
	return(
		<div className="editPage">
			<div className="container">
				<div className="editPage__container">
					<ArrowIcon width="23"/>
					<CustomPopup/>
					{!loading ? <div className="editPage__content">
						<EditSideBar/>
						<EditForm/>
					</div>:<Loader loading={loading}/>}
				</div>
			</div>
		</div>
)
}
export default EditPage