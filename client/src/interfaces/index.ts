export interface stateTypes {
    loginDetails: { message: string, name: string, role: string },
    vacations: Array<vacationTypes>,
    registerDetails: { message: string, redirect: boolean },
    newVacationId: Number
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
    is_following?: boolean,
    mainImage?: { url: string },
    image2?: { url: string },
    image3?: { url: string },
    image4?: { url: string },
    image5?: { url: string },
    confirmMessage?: string

}