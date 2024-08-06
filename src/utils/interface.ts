export interface User {
  login: string,
  firstName: string  ,
  lastName: string,
  roles: string[]
}

export interface userRequest {
  firstName: string,
  lastName: string,
  login: string,
  password: string
}

export interface userUpdateRequest {
  firstName: string,
  lastName:  string,
  userName: string,
  password: string
}

export interface userUpdatePassword {
  userName: string,
  password: string,
  newPassword: string
}
