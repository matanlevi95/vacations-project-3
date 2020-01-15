import { Link, Route } from "react-router-dom";
import React from "react";


export const AppLinks = (props) => {
    const { routes } = props
    
    return routes.filter(route => route.isVisible).map(route => <button key={route.title} type="submit" className="btn btn-primary">
        <Link style={{ color: "white", textTransform: "capitalize" }} to={route.path}>{route.title}</Link>
    </button>)
}

export const AppRoutes = (props) => {
    const { routes } = props
    const result = routes.map(route =>
        <Route key={route.title} {...route} />
    )
    return <>{result}</>
}