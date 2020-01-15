import mainAxion from "../Axios/mainAxios"
import axios from "axios"

export const registerService = async (userDetails: object) => {
    try {
        const { data } = await axios.post("http://localhost:4000/user/register", userDetails)
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const loginService = async (userDetails: object) => {
    try {
        const { data } = await axios.post("http://localhost:4000/user/login", userDetails)
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const getVacationsService = async () => {
    try {
        const { data } = await mainAxion.get(`/vacations/all`)
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const handleFollowService = async (vacationId: number, checked: boolean) => {
    try {
        const { data } = await mainAxion.post("/vacations/follow", { vacationId, checked })
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const initService = async () => {
    try {
        const { data } = await mainAxion.get("/user/verify")
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const addVacationService = async (vacationsDetails:Object) => {
    try {
        const { data } = await mainAxion.post("/vacations/add", vacationsDetails)
        return data
    }
    catch (err) {
        console.log(err);

    }
}