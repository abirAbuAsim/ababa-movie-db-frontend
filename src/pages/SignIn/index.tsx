import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Card, CardContent, FormControl, Input, InputLabel, Stack, TextField, Typography} from '@mui/material';
import {AppRegistrationOutlined, HomeOutlined} from '@mui/icons-material';

import {RoutePath} from 'configs/route';

import CenterMain from 'layout/CenterMain';

const SignIn: FC = () => {
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    const navigate = useNavigate();

    function goToSignUp() {
        navigate(RoutePath.SignUp);
    }

    function signIn() {

    }

    return (
        <CenterMain>
                <Card sx={{ alignItems: "center", flexDirection:"column", width:"450px", height:"400px", }}>
                    <CardContent >
                    <Stack maxWidth="sm" alignItems="center" spacing={1}>
                        <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" padding="1.6rem">
                            Sign In
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                        />
                        <Button onClick={goToSignUp} variant="contained">
                            Sign In
                        </Button>
                        </Stack>
                    </CardContent>
                    
                </Card>
        </CenterMain>
    );
};

export default SignIn;