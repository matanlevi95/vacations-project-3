export interface stateTypes {
    loginDetails: { message: string, name: string, role: string },
    vacations: Array<object>,
    registerDetails: { message: string, redirect: boolean }
}

export interface vacationTypes {
    id?: number,
    description: String,
    destination: string,
    images: any,
    check_in: string,
    check_out: string,
    price: string,
    followers_count?: number,
    is_following?: boolean
}