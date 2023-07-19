import React from 'react';
import { useState, useEffect } from 'react';
import { auth, provider } from '../../../firebase';
import {
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';
import Cookies from 'universal-cookie';
import {
    SignInContainer,
    SignInWrapper,
    SignInTabs,
    SignLine,
    SignButton,
    SignActive,
    ButtonFlex,
    SignInput,
    SignInBtn,
    SignInForm,
    SignInGoogleBtn,
    SignInGoogleIconWrapper,
    SignInGoogleIcon,
    SignInBtnText,
} from './SignIn.Styles';

const cookies = new Cookies();

const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [toggleState, setToggleState] = useState(1);
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

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                signInEmail,
                signInPassword
            );
            cookies.set('authToken', userCredential.user.refreshToken);
        } catch (error) {
            console.error(error);
        }
        setSignInEmail('');
        setSignInPassword('');
    };

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                signUpEmail,
                signUpPassword
            );
            cookies.set('authToken', userCredential.user.refreshToken);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
        setSignUpEmail('');
        setSignUpPassword('');
    };

    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            cookies.set('authToken', userCredential.user.refreshToken);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    };

    return authUser ? (
        <></>
    ) : (
        <SignInContainer>
            <SignInWrapper>
                <SignInForm onSubmit={toggleState === 0 ? signIn : signUp}>
                    <SignInTabs>
                        <SignButton
                            as={toggleState === 1 ? SignActive : ButtonFlex}
                            onClick={() => toggleTab(1)}
                        >
                            SignUp
                        </SignButton>
                        <SignLine />
                        <SignButton
                            as={toggleState === 0 ? SignActive : ButtonFlex}
                            onClick={() => toggleTab(0)}
                        >
                            SignIn
                        </SignButton>
                    </SignInTabs>
                    <SignInput
                        type="email"
                        placeholder=" Enter your email"
                        value={toggleState === 0 ? signInEmail : signUpEmail}
                        onChange={(e) => {
                            toggleState === 0
                                ? setSignInEmail(e.target.value)
                                : setSignUpEmail(e.target.value);
                        }}
                    />
                    <SignInput
                        type="password"
                        placeholder=" Enter your password"
                        value={toggleState === 0 ? signInPassword : signUpPassword}
                        onChange={(e) => {
                            toggleState === 0
                                ? setSignInPassword(e.target.value)
                                : setSignUpPassword(e.target.value);
                        }}
                    />
                    <SignInBtn type="submit">
                        {toggleState === 0 ? 'Sign In' : 'Sign Up'}
                    </SignInBtn>
                    <SignInGoogleBtn onClick={signInWithGoogle}>
                        <SignInGoogleIconWrapper>
                            <SignInGoogleIcon
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google icon"
                            />
                        </SignInGoogleIconWrapper>
                        <SignInBtnText>
                            <b>Sign In with Google</b>
                        </SignInBtnText>
                    </SignInGoogleBtn>
                </SignInForm>
            </SignInWrapper>
        </SignInContainer>
    );
};

export default SignIn;
