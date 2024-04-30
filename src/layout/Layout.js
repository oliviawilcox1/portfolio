import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export const Layout = () => {
    <>
        <Header/>
            
        <Outlet />
    </>
}