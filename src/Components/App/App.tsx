import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import HomePage from '../../Pages/HomePage'
import EditPage from '../../Pages/EditPage/EditPage'

function App() {
	
  return (
    <>
	 	<Routes>
			<Route path='/' element={<Layout/>}>
				<Route index element={<HomePage/>}/>
				<Route path='edit/:id' element={<EditPage/>}/>
			</Route>
		</Routes>
    </>
  )
}

export default App
