import React, { useEffect } from 'react'
import { login, checkIsAuthenticated } from '../../utils/authentication';
import { History } from 'history';

const useLogin = (history: History) => {
 useEffect(() => {
    checkIsAuthenticated() && login(history)
   return () => {
     checkIsAuthenticated() && login(history)
   };
 }, [])
 
}

export default useLogin;
