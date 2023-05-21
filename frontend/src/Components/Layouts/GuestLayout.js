import {Outlet} from "react-router-dom";
import TopMenu from "../Menu/TopMenu";

export default function GuestLayout() {
    return (
        <div>
            <TopMenu />
            <Outlet />
        </div>
    )
}