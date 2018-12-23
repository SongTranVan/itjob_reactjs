import React from 'react';
import Index from './components/Index/Index'
import Companies from './components/Companies/Companies';
import CadidateProfile from './components/Cadidate/CadidateProfile';
import SigninCadidate from './components/Cadidate/SigninCadidate';
import SigninCompany from './components/Companies/SigninCompany';
import SignupCompany from './components/Companies/SignupCompany';
import SearchCompanies from './components/Companies/SearchCompanies/SearchCompanies';
import EditJob from './components/Jobs/ManageJobs/EditJob';
import JobDetails from './components/Jobs/DetailJob/JobDetails';
import JobsList from './components/Jobs/JobsList/JobsList';
import DetailJob from './components/Jobs/DetailJob/DetailJob';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <Index match = {match} />
    },
    {
        path: '/jobss',
        exact: true,
        main: ({match}) => <Companies match = {match} />
    },
    {
        path: '/cadidate-profile',
        exact: true,
        main: ({match}) => <CadidateProfile match = {match} />
    },
    {
        path: '/cadidate-signin',
        exact: true,
        main: ({match}) => <SigninCadidate match = {match} />
    },
    {
        path: '/company-signin',
        exact: true,
        main: ({match}) => <SigninCompany match = {match} />
    },
    {
        path: '/company-signup',
        exact: true,
        main: ({match}) => <SignupCompany match = {match} />
    },
    {
        path: '/companies',
        exact: true,
        main: ({match}) => <SearchCompanies match = {match} />
    },
    {
        path: '/jobs/:id',
        exact: true,
        main: ({match}) => <JobDetails match = {match} />
    },
    {
        path: '/jobs/:id/edit',
        exact: false,
        main: ({match, history}) => <EditJob match = {match} history= {history} />
    },
    {
        path: '/jobs',
        exact: true,
        main: ({match}) => <JobsList match = {match} />
    },
    {
        path: '/detailjob',
        exact: true,
        main: ({match}) => <DetailJob match = {match} />
    },
];

export default routes;
