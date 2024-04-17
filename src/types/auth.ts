export interface ICurrentUser {
    id: string
    showname: string
}

export interface SignInResponse extends ICurrentUser {
    token: string
}
