import React, { SFC } from 'react'
import Button from '../../Button/Button';
import { RouteComponentProps, withRouter } from 'react-router';
import { logout } from '../../../utils/authentication';
import useLogin from '../../CustomHooks/useLogin';

interface IHomeProps  extends RouteComponentProps{

}
const Home: SFC<IHomeProps> = ({history}) => {
  useLogin(history)
  return (
    <div>
      <h1>My beautiful Home</h1>
      <Button onClick={()=> logout()}>Logout</Button>
    </div>
  )
}

export default withRouter(Home);
