export interface UserInterface {
    fname: string
    lname: string
    email: string
    tel: string
    password: string
}

export interface RegisterSuccess {
    fname: string
    lname: string
    email: string
    tel: string
}

export interface ResponseRegsiter{
    status: boolean
    message: string
    data?: RegisterSuccess
}