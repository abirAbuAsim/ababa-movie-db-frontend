import {lazy} from 'react';

import {Route, RouteVariant} from 'types/route';

const Home = lazy(() => import('pages/Home'));
const Authentication = lazy(() => import('pages/Authentication'));
const MovieList = lazy(() => import('pages/MovieList'));
const NotFound = lazy(() => import('pages/NotFound'));
const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/NotFound'));

export enum RoutePath {
    Home = '/',
    Authentication = '/authentication',
    MovieList = '/movie-list',
    NotFound = '/not-found',
    SignIn = '/signin',
    SignUp = '/signup'
}

export const routeList: Route[] = [
    {variant: RouteVariant.Public, path: RoutePath.Home, component: Home},
    {variant: RouteVariant.Guest, path: RoutePath.Authentication, component: Authentication},
    {variant: RouteVariant.Public, path: RoutePath.MovieList, component: MovieList},
    {variant: RouteVariant.Public, path: RoutePath.NotFound, component: NotFound},
    {variant: RouteVariant.Public, path: RoutePath.SignIn, component: SignIn},
    {variant: RouteVariant.Public, path: RoutePath.SignUp, component: NotFound},
    {variant: RouteVariant.Public, path: '*', component: NotFound}
];