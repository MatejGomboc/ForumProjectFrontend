export default class AuthService {
    static async register(username, email /* TODO !!! */, password, password_confirm) {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + "/api/auth/register",
                {
                    method: "POST",
                    mode: "cors",
                    cache: "no-store",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    redirect: "error",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(
                        {
                            "username": username,
                            "password": password,
                            "confirmPassword": password_confirm
                        }
                    )
                }
            );

            if (response.status !== 201) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }

    static async login(username, password) {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + "/api/auth/login",
                {
                    method: "PATCH",
                    mode: "cors",
                    cache: "no-store",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    redirect: "error",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(
                        {
                            "username": username,
                            "password": password
                        }
                    )
                }
            );

            if (response.status !== 200) {
                return "";
            }

            const tokens = await response.json();
            return tokens;

        } catch {
            return "";
        }
    }

    static async refresh(access_token, refresh_token) {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + "/api/auth/refresh",
                {
                    method: "PATCH",
                    mode: "cors",
                    cache: "no-store",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    redirect: "error",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(
                        {
                            "accessToken": access_token,
                            "refreshToken": refresh_token
                        }
                    )
                }
            );

            if (response.status !== 200) {
                return "";
            }

            const tokens = await response.json();
            return tokens;

        } catch {
            return "";
        }
    }

    static async logout(access_token) {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + "/api/auth/logout",
                {
                    method: "PATCH",
                    mode: "cors",
                    cache: "no-store",
                    credentials: "omit",
                    headers: {
                        "Authorization": "bearer " + access_token
                    },
                    redirect: "error",
                    referrerPolicy: "no-referrer"
                }
            );

            if (response.status !== 200) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }

    static async unregister(access_token) {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + "/api/auth/logout",
                {
                    method: "DELETE",
                    mode: "cors",
                    cache: "no-store",
                    credentials: "omit",
                    headers: {
                        "Authorization": "bearer " + access_token
                    },
                    redirect: "error",
                    referrerPolicy: "no-referrer"
                }
            );

            if (response.status !== 200) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }
}
