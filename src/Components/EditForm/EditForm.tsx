import { useState } from "react"
import "./EditForm.scss"
import { useParams } from "react-router-dom"
import { useAppDispath, useAppSelector } from "../../Hooks/reduxHooks"
import CustomInput from "../CustomInput/CustomInput"
import { editUserCard, hidePopupSucces } from "../../Store/userSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditForm = () => {
	const {id} = useParams()
	const activeUsers = useAppSelector(state=>state.users.activeUsers)
	const user = activeUsers.find(user=>user.id === Number(id))
   const [name, setName] = useState<string>(user?.name ?? "");
	const [username, setUsername] = useState<string>(user?.username?? "");
	const [email, setEmail] = useState<string>(user?.email?? "");
	const [city, setCity] = useState<string>(user?.address.city?? "");
	const [phone, setPhone] = useState<string>(user?.phone?? "");
	const [nameCompany, setNameCompany] = useState<string>(user?.company.name?? "");
	const dispatch = useAppDispath()

	const showWarning= () => toast("Заполните все поля!",
	{
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
	}
	);

	const newUserdata = {
		id:Number(id),
		isActive:true,
		name,
		username,
		email,
		address:{
			city
		},
		phone,
		company:{
			name
		}
	}
	return(
		<div className="editForm">
			<div className="editForm__title">Данные профиля</div>
			<CustomInput title="Имя" state={name} onChange={setName}/>
			<CustomInput title="Никнейм" state={username} onChange={setUsername}/>
			<CustomInput title="Почта" state={email} onChange={setEmail}/>
			<CustomInput title="Город" state={city} onChange={setCity}/>
			<CustomInput title="Телефон" state={phone} onChange={setPhone}/>
			<CustomInput title="Название компании" state={nameCompany} onChange={setNameCompany}/>
			
			<div onClick={()=>{
				if(name && username && email && city && phone && nameCompany){
					dispatch(editUserCard(newUserdata));
					setTimeout(()=>{dispatch(hidePopupSucces())},4000)
				}else{
					showWarning()
				}
			
			}} 
			className="editForm__button">Сохранить</div>
			<ToastContainer 
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			/>
		</div>
)
}
export default EditForm