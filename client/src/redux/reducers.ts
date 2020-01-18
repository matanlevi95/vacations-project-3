import Actions from "./actions.config";

const initialState = {
    registerDetails: { message: "", redirect: false },
    loginDetails: { message: "", role: "", name: "" },
    vacations: [],
    newVacationId: 0
}

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.REGISTER: {
            const { redirect, message } = action.payload
            return {
                ...state,
                registerDetails: { message, redirect }
            }
        }
        case Actions.LOGIN: {
            const { message, role, name, token, redirect } = action.payload
            localStorage.setItem("token", token)
            return {
                ...state,
                loginDetails: { message, role, name, redirect }
            }
        }
        case Actions.LOGOUT: {
            localStorage.setItem("token", "")
            return {
                ...state,
                loginDetails: { message: "", role: "", name: "" }
            }
        }
        case Actions.GET_VACATIONS: {
            return {
                ...state,
                vacations: action.payload
            }
        }
        case Actions.INIT: {
            const { loginDetails } = state
            const { name, role } = action.payload
            return {
                ...state,
                loginDetails: { ...loginDetails, name, role }
            }
        }
        case Actions.ADD_VACATION: {
            return {
                ...state,
                newVacationId: action.payload
            }
        }
        default: {
            return state
        }
    }
}