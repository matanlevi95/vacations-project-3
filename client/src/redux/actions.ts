import Actions from "./actions.config"
import { registerService,addVacationService, loginService, getVacationsService, handleFollowService, initService } from "./services"

export const registerSuccess = (result: object) => {
    return {
        type: Actions.REGISTER,
        payload: result
    }

}

export const register = (userDetails: object) => {
    return async (dispatch: Function) => {
        const result = await registerService(userDetails)
        dispatch(registerSuccess(result))
    }
}

export const loginSuccess = (result: Object) => {
    return {
        type: Actions.LOGIN,
        payload: result
    }
}

export const login = (userDetails: Object) => {
    return async (dispatch: Function) => {
        const result = await loginService(userDetails)
        dispatch(loginSuccess(result))
    }
}

export const logout = () => {
    return {
        type: Actions.LOGOUT,
    }
}

export const getVacationsSuccess = (result: Array<Object>) => {
    return {
        type: Actions.GET_VACATIONS,
        payload: result
    }
}

export const getVacations = () => {

    return async (dispatch: Function) => {
        const result = await getVacationsService()
        dispatch(getVacationsSuccess(result))
    }
}

export const handleFollow = (vacationsId: number, checked: boolean) => {
    return async (dispatch: Function) => {
        const result = await handleFollowService(vacationsId, checked)
        dispatch(getVacationsSuccess(result))
    }
}

export const initSuccess = (result: object) => {
    return {
        type: Actions.INIT,
        payload: result
    }
}

export const init = () => {
    return async (dispatch: Function) => {
        const result = await initService()
        dispatch(initSuccess(result))
    }
}

export const addVacation = (vacationDetails:Object) => {
    return async (dispatch: Function) => {
    const result = await addVacationService(vacationDetails)      
    // dispatch(getVacationsSuccess(result))
    }
}