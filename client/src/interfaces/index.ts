export interface stateTypes {
    loginDetails: { message: string, name: string, role: string },
    vacations: Array<object>,
    registerDetails: { message: string, redirect: boolean }
}