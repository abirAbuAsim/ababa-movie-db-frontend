import React, {FC} from 'react';
import {Stack, Typography} from '@mui/material';

import CenterMain from 'layout/CenterMain';
import { useAppSelector } from 'hooks/useAppSelector';
import { useNavigate } from 'react-router';
import { RoutePath } from 'configs/route';

const Home: FC = () => {
    const {user, loading} = useAppSelector(state => state.authentication);
    const navigate = useNavigate();

    if(!user){
        navigate(RoutePath.SignIn)
    }

    return (
        <CenterMain>
            <Stack maxWidth="sm" alignItems="center" spacing={1}>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center">
                    Home
                </Typography>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                    The database does not work well in Belarus and Russia, if you are in this region, connect VPN.
                </Typography>
            </Stack>
        </CenterMain>
    );
};

export default Home;