// перечисление enum, которые содержит в себе все типы action-ов
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// interfaces
export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

// Создаем тип UserAction для объединения action-ов

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction