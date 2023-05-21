import React from "react";
import {Route, Routes} from "react-router-dom";
import GuestLayout from "../Layouts/GuestLayout";
import NotFound from "../Pages/NotFound";
import MainPage from "../Pages/MainPage";
import CreateApartment from "../Pages/CreateApartment";

function RoutesContent() {
    return (
        <div>
            <Routes>
                <Route exact="true" path="/" element={<GuestLayout />}>
                    <Route exact="true" path="/" element={<MainPage />} />
                    <Route exact="true" path="/create-apartment" element={<CreateApartment />} />
                </Route>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    )
}

export default RoutesContent
