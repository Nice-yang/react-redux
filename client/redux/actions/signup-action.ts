import { SIGNUP } from '../reducers/signup';

export const signupAction = (success: boolean) => {
    return {
        type: SIGNUP,
        payload: success
    }
}