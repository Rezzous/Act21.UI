export interface LoginModel {
    email: string;
    password: string;
  }

export interface AuthenticatedResponse{
    token: string;
    // refreshToken: string;
}