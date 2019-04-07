import React, { SFC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../../Button/Button";
import { login } from "../../../utils/authentication";
import useLogin from "../../CustomHooks/useLogin";

interface ILoginProps extends RouteComponentProps {

}
const Login : SFC<ILoginProps>= ({history}) => {
  useLogin(history)
  return (
    <div>
      <h1>My Login Page</h1>
      <Button onClick={()=> login(history)}>Login</Button>
    </div>
  );
};

export default withRouter(Login);
