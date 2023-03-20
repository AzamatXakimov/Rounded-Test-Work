import axios from "axios"
import { LoginBtn, LoginForm, LoginInput, LoginTitle, LoginWrapper } from "./Login.syled"
import { useRef } from "react"

export const Login = () => {
    const LoginEmailRef = useRef()
    const LoginPasswordRef = useRef()

    const hendelSubmit = () => {
        // axios.post("loaclhost:8080/")
    }

    return <>
        <LoginWrapper>
            <LoginTitle>
                Login
            </LoginTitle>
            <LoginForm onSubmit={evt => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <LoginInput type="email" ref={LoginEmailRef} aria-label="Enter Admin Email" placeholder="Email"/>
                <LoginInput type="password" ref={LoginPasswordRef} aria-label="Enter Admin Password" placeholder="Password"/>
                <LoginBtn type="submit">
                    Login
                </LoginBtn>
            </LoginForm>
        </LoginWrapper>
    </>
}
