import vacations from "../components/vacations";
import { withAuth } from "./auth"
import Register from "../components/Register"
import AddVacation from "../components/AddVacation/index.tsx"
import React from "react"
import Graph from "components/graph";

export const routes = [
    { exact: true, isVisible: false, title: "Register", path: "/register", component: Register },
    {
        exact: true, isVisible: false, title: "Add Vacation", path: "/addVacation", component: (props) => {
            const isAdmin = true
            const AddVacationsWithAuth = withAuth(AddVacation, isAdmin);
            return <AddVacationsWithAuth {...props} isAdmin />
        }
    },
    {
        exact: true, isVisible: false, title: "Graph", path: "/graph", component: (props) => {
            const isAdmin = true
            const AddVacationsWithAuth = withAuth(Graph, isAdmin);
            return <AddVacationsWithAuth {...props} isAdmin />
        }
    },
    {
        exact: true, isVisible: true, title: "Vacations", path: "/vacations", component: (props) => {
            const isAdmin = false
            const VacationsWithAuth = withAuth(vacations, isAdmin);
            return <VacationsWithAuth {...props} role />
        }
    }

]
