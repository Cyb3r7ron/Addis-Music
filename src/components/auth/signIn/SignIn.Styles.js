import styled from '@emotion/styled';

export const SignInContainer = styled.section`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  top: 0;
  background-color: rgba(8, 8, 8, 0.25);
  backdrop-filter: blur(5px);
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const SignInWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  background-color: #ffffffd3;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 1.25rem;
`;

export const SignInTabs = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const SignLine = styled.span`
  display: block;
  width: 1px;
  height: 80%;
  background-color: hsl(0, 0%, 46%);
`;

export const SignButton = styled.h2`
  color: hsl(0, 0%, 20%);
  cursor: pointer;
  text-align: center;
`;

export const SignActive = styled(SignButton)`
  color: #0eaf52;
`;

export const ButtonFlex = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const SignInput = styled.input`
  width: 184px;
  height: 42px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const SignInBtn = styled.button`
  background-color: #0eaf52;
  width: 184px;
  height: 42px;
  border-radius: 12px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
`;

export const SignInForm = styled.form`
  display: flex;
  row-gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SignInGoogleBtn = styled.div`
  width: 184px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 12px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const SignInGoogleIconWrapper = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: #fff;
`;

export const SignInGoogleIcon = styled.img`
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
`;

export const SignInBtnText = styled.p`
  float: right;
  margin: 11px 11px 0 0;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
`;
