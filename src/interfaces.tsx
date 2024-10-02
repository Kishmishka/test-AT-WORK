export interface IconsComponetProps{
	width:string,
}

export interface IUserCard{
	username:string,
	city:string,
	companyName:string,
	id:number,
	isActive:boolean
}

export interface IUserCardList{
	items:User[];
	title:string;
}


interface IGetUserApiResponse{
	name:string;
	username:string;
	email:string;
	city:string;
	phone:string;
	nameCompany:string;

}

export interface IActiveSection{
	items:IGetUserApiResponse[]
}


export interface User {
	id:number;
	isActive:boolean;
	name:string;
	username:string;
	email:string;
	address:{city:string},
	phone:string;
	company:{name:string};
}