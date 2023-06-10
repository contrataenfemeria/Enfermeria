import { Route, Routes } from "react-router-dom"
import {Menu} from "../Home/Menu"
import { Home } from "../Home/Home"
import { Servicios } from "../Servicios/Servicios"
import {Historia} from "../Historia/Historia"
import { Formulario } from "../Formulario/Formulario"
import { Empleados } from "../Empleados/Empleados"



export function CustomRoute() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/historia" element={<Historia/>} />
                <Route path="/nosotros" element={<Empleados/>} />
                <Route path="/formulario" element={<Formulario/>} />
                <Route path="/servicios" element={<Servicios/>} />
            </Routes>
        </>
    )
}