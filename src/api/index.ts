import axios from 'axios';
import qs from 'qs';

import {Filter} from 'types/filter';
import { User } from 'types/user';

const api = {
    authentication: {
        initialization: () => new Promise<User | null>((res, rej) => {
            // onAuthStateChanged(firebase.auth, response => res(response), error => rej(error))();
        }),
        login: () => new Promise<User>((res, rej) => {
            // signInWithPopup(firebase.auth, new GoogleAuthProvider())
            //     .then(response => res(response.user))
            //     .catch(error => rej(error));
        }),
        loginWithAmdbApi: () => new Promise<User>((res, rej) => {
            const data = qs.stringify({
              username: "abir",
              password: "abCD1234",
            });
            const config = {
              method: "post",
              url: "http://localhost:3001/auth/signin",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: data,
            };

            axios(config)
              .then(function (response: { data: any }) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error: any) {
                console.log(error);
              });
        }),
        logout: () => new Promise<void>((res, rej) => {
            // signOut(firebase.auth)
            //     .then(() => res())
            //     .catch(error => rej(error));
        })
    },
};

export default api;