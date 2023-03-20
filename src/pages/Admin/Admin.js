import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminBox, AdminInner, AdminMain, AdminWrapper } from "./Admin.styled";
import { AdminNavBar } from "../../components/AdminNavBar/AdminNavBar";
import { AdminHeader } from "../../components/AdminHeader/AdminHeader";

export const Admin = () => {
    const {token} = useSelector((state) => state.token);
    const navigate = useNavigate()
    useEffect(() => {
        if(!token){
            // navigate("/login")
        }
    }, [token]);
    return <>
        <AdminWrapper>

            <AdminHeader/>
            <AdminMain>
                <AdminInner>
                    <AdminNavBar />

                    <AdminBox>
                        <Routes>
                            {/* <Route index element={< />}/> */}
                            {/* <Route path="customers" element={<Customers />}/> */}
                        </Routes>
                    </AdminBox>
                </AdminInner>
            </AdminMain>
        </AdminWrapper>
    </>
}
