import "./EditSideBar.scss"
const EditSideBar = () => {
	return(
		<div className="editSideBar">
			<div className="editSideBar__photo"/>
			<div className="editSideBar__menu">
				<div className="editSideBar__menu-item active">Данные профиля</div>
				<div className="editSideBar__menu-item">Рабочее пространство</div>
				<div className="editSideBar__menu-item">Приватность</div>
				<div className="editSideBar__menu-item">Безопасность</div>
			</div>
		</div>
)
}
export default EditSideBar