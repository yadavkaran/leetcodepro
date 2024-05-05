import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from '../Components';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function LoginSignUp() {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        isTeacher: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const { firstname, lastname, email, password, confirmPassword, isTeacher } = userDetails;

        if (password !== confirmPassword) {
            console.log("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password,
                    isTeacher
                })
            });

            const data = await response.json();
            if (response.status === 201) {
                window.alert("Signup successful");  // Show an alert to the user
                setUserDetails({  // Reset the form state
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    isTeacher: false
                });
                navigate("/login");  // Redirect to login page
            } else {
                console.log(data); // Log the error message from the server
            }
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const handleSignInClick = async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: username,
                    password
                })
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log("Login successful", data);
                // Redirect based on user role
                navigate(`/${data.user.role}page`);
            
            } else {
                console.log(data.message); // Log the error message from the server
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <div style={{ marginBottom: "50px" }}>
                <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
                    <Navbar.Brand as={NavLink} to="/" className='ps-5'>Leetcode Pro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh", margin: "-20px 0 50px", backgroundSize: "cover" }}>
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSignUp}>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='FirstName' name='firstname' value={userDetails.firstname} onChange={handleInputChange} />
                            <Components.Input type='text' placeholder='LastName' name='lastname' value={userDetails.lastname} onChange={handleInputChange} />
                            <Components.Input type='email' placeholder='Email' name='email' value={userDetails.email} onChange={handleInputChange} />
                            <Components.Input type='password' placeholder='Password' name='password' value={userDetails.password} onChange={handleInputChange} />
                            <Components.Input type='password' placeholder='Confirm Password' name='confirmPassword' value={userDetails.confirmPassword} onChange={handleInputChange} />
                            <Components.CheckboxContainer>
                                <Components.Checkbox id="teacherCheckbox" name="isTeacher" type="checkbox" checked={userDetails.isTeacher} onChange={handleInputChange} />
                                <Components.CheckboxLabel htmlFor="teacherCheckbox">I am a Teacher</Components.CheckboxLabel>
                            </Components.CheckboxContainer>
                            <Components.Button type="submit">Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSignInClick}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='text' id='username' placeholder='Username' />
                            <Components.Input type='password' id='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button type="submit">Sign In</Components.Button>
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
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
        </>
    );
}

export default LoginSignUp;
