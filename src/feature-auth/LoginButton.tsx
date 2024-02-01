import { GoogleLogin } from "@react-oauth/google";

export const LoginButton = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse); //googleの認証情報
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
