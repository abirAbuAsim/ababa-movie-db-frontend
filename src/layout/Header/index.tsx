import React, {FC} from 'react';
import {Stack} from '@mui/material';

import Logotype from 'layout/Header/Logotype';
import AuthenticationButton from 'layout/Header/AuthenticationButton';
import NavigationList from 'layout/Header/NavigationList';
import { useAppSelector } from 'hooks/useAppSelector';

const Header: FC = () => {
    const {user, loading} = useAppSelector(state => state.authentication);

    return (
        <Stack marginY={1} spacing={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Logotype/>
                {/* <AuthenticationButton/> */}
                {!user ? '': <AuthenticationButton/>}
            </Stack>
            <Stack direction="row" justifyContent="center">
                {/* <NavigationList/> */}
                {!user ? '' : <NavigationList/>}
            </Stack>
        </Stack>
    );
};

export default Header;