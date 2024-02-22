import React from "react";
import { useNavigate } from "react-router-dom";
import * as Components from '../Components';



function LoginSignUp() {
    const navigate = useNavigate();
    const [signIn, toggle] = React.useState(true);
    const handleSignIn = (username, password) => {
        // Perform authentication logic here
        // For simplicity, let's assume some predefined username/password combinations
        if (username === "student" && password === "student") {
            console.log("Invalid credentials");
            navigate("/Studentpage");
        } else if (username === "teacher" && password === "teacher") {
            navigate("/Teacherpage");
        } else if (username === "admin" && password === "admin") {
            navigate("/Adminpage");
        } else {
            // Handle invalid credentials or show an error message
            console.log("Invalid credentials");
        }
    };

    const handleSignInClick = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        handleSignIn(username, password);
    };

    return (
        <div style={{ display: "flex" , alignItems:"center", justifyContent: "center", flexDirection: "column", height:"100vh", margin: "-20px 0 50px", backgroundSize:"cover" }}>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='FirstName' />
                        <Components.Input type='text' placeholder='LastName' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Input type='password' placeholder='Confirm Password' />
                        <Components.CheckboxContainer>
                            <Components.Checkbox id="teacherCheckbox" type="checkbox" />
                            <Components.CheckboxLabel htmlFor="teacherCheckbox">I am a Teacher</Components.CheckboxLabel>
                        </Components.CheckboxContainer>
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>


                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='intput' id='username' placeholder='Username' />
                        <Components.Input type='password' id='password' placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleSignInClick}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>First Time here!</Components.Title>
                            <Components.Paragraph>
                                Enter Your Details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    )
}

export default LoginSignUp;

