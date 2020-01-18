import mainAxion from "../Axios/mainAxios"
import axios from "axios"
import mainAxios from "../Axios/mainAxios";

export const registerService = async (userDetails: object) => {
    try {
        const { data } = await axios.post("http://localhost:4000/user/register", userDetails)
        console.log(data);

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
        const { data } = await mainAxios.get(`/vacations/all`)
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const handleFollowService = async (vacationId: number, checked: boolean) => {
    try {
        const { data } = await mainAxios.post("/follow", { vacationId, checked })
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const initService = async () => {
    try {
        const { data } = await mainAxios.get("/user/verify")
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const addVacationService = async (vacationsDetails: Object) => {
    try {
        const { data } = await mainAxios.post("/vacations/add", vacationsDetails)
        return data
    }
    catch (err) {
        console.log(err);

    }
}

export const deleteVacationService = async (vacationId: number) => {
    try {
        const { data } = await mainAxios.post("/vacations/delete", { vacationId })
        return data
    }
    catch (err) {
        console.log(err);

    }
}

export const editVacationService = async (vacationDetails: object) => {
    try {
        const { data } = await mainAxios.post("/vacations/edit", vacationDetails)
        return data
    }
    catch (err) {
        console.log(err);

    }
}