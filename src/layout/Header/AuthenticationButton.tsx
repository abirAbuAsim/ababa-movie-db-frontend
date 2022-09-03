import React, {FC} from 'react';
import {LoadingButton} from '@mui/lab';
import {LoginOutlined, LogoutOutlined} from '@mui/icons-material';

import authenticationActions from 'redux/authentication/authentication.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';
import { useLocation, useNavigate } from 'react-router';
import { RoutePath } from 'configs/route';

const AuthenticationButton: FC = () => {
    const {user, loading} = useAppSelector(state => state.authentication);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    function goTo(path: string) {
        if (pathname !== path) {
            navigate(path);
        }
    }

    function goToLogin() {

    }

    function login() {
        // dispatch(authenticationActions.login());
        dispatch(authenticationActions.loginOwn());
    }

    function logout() {
        dispatch(authenticationActions.logout());
    }

    return (
        <LoadingButton
            loading={loading}
            // onClick={user ? logout : login}
            onClick={() => goTo(RoutePath.SignIn)}
            variant="outlined"
            color="inherit"
        >
            {user ? <LogoutOutlined/> : <LoginOutlined/>}
        </LoadingButton>
    );
};

export default AuthenticationButton;