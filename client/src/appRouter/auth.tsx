import React, { useState, useEffect } from "react";
import mainAxios from "../Axios/mainAxios"
import { Redirect } from "react-router-dom"

export const withAuth = (WrappedComponent: any, isAdmin: boolean) => {
    return function (props: any) {
        const [verified, setVerified] = useState({ status: "loading", role: "", adminOnly: false });
        useEffect(() => {
            const verify = async () => {
                const { data } = await mainAxios.get("/user/verify")
                let { status, role } = data;
                setVerified({ status, role, adminOnly: isAdmin })

            }
            verify();
        }, [])
        const { status, role, adminOnly } = verified

        if (status === "loading") return <div className="loader"></div>
        if (!status) {
            localStorage.setItem("token", "")
            return <Redirect to="/login" />
        }
        else {
            if (adminOnly && role === "admin") {
                return <WrappedComponent {...props} role />
            }
            if (!adminOnly) {
                return <WrappedComponent {...props} />
            }
            return <Redirect to="/vacations" />
        }
    }
}