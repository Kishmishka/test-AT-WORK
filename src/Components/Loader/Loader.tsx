import { FC } from "react"
import "./Loader.scss"
import { MutatingDots } from "react-loader-spinner"

interface LoaderProps{
	loading:boolean
}

const Loader:FC<LoaderProps> = ({loading}) => {
	return(
		<div className="loader">
				<MutatingDots
					visible={loading}
  					height="100"
  					width="100"
  					color="#22A0BC"
  					secondaryColor="#22A0BC"
  					radius="12.5"
  					ariaLabel="mutating-dots-loading"
  				/>
		</div>
		
)
}
export default Loader