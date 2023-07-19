import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const HeaderContainer = styled(Box)`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 12px 0;
    z-index: 100;
    background: linear-gradient(-45deg, #ee7752, #a9dc3d, #23a6d5, #23d5ab);
    animation: gradient 5s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
`;

const GoogleButton = styled.button`
    height: 42px;
    background-color: #4285f4;
    border-radius: 12px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 6px #4285f4;
    }
`;

const ButtonText = styled.div`
    margin: auto 8px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
`;

const NavContainer = styled.nav`
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
`;

const LogoLink = styled.a`
    color: hsl(0, 0%, 20%);
    font-weight: 500;
`;

const WelcomeLarge = styled.p`
    text-align: center;
`;

const WelcomeSmall = styled.p`
    display: none;
`;

const Header = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successfully");
            })
            .catch((error) => console.log(error));
    };

    return (
        <HeaderContainer>
            <NavContainer>
                <LogoLink href="index.html">Addis Music</LogoLink>
                {authUser ? (
                    <>
                        <WelcomeLarge>Welcome {authUser.email}</WelcomeLarge>
                        <WelcomeSmall>WELCOME</WelcomeSmall>
                        <GoogleButton onClick={userSignOut}>
                            <ButtonText>Log Out</ButtonText>
                        </GoogleButton>
                    </>
                ) : (
                    <></>
                )}
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
