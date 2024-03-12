import { Route, Routes } from "react-router-dom"
import { InicioPage } from "../pages/InicioPage"
import { NavBar } from "./NavBar"
import { DetailPage } from "../pages/DetailPage"
import { UserProvider } from "../context/UserProvider"

export const HomeRouter = () => {
    return (
      <>
      <UserProvider>

      <NavBar />
          <Routes>
              <Route path="/inicio" element={<InicioPage/>}/>
              <Route path="/detail/:id" element={<DetailPage/>}/>
              <Route path="/*" element={<InicioPage/>}/>

          </Routes>
      </UserProvider>
          
      </>
    )
  }