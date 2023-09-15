// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const User=lazy(()=> import('../pages/User'))
const Resturant=lazy(()=> import('../pages/Resturant'))
const Product=lazy(()=> import('../pages/Product'))
const Payment=lazy(()=> import('../pages/Payment'))
const ExpertsOpinion=lazy(()=> import('../pages/ExpertsOpinion'))
const DelivaryStatus=lazy(()=> import('../pages/DelivaryStatus'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/user',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/user', // the url
    component: User, // view rendered
  },
  {
    path: '/product', // the url
    component: Product, // view rendered
  },
  {
    path: '/resturent', // the url
    component: Resturant, // view rendered
  },
  {
    path: '/user', // the url
    component: User, // view rendered
  },
  {
    path: '/payment', // the url
    component:Payment, // view rendered
  },
  {
    path: '/expertsopinion', // the url
    component: ExpertsOpinion, // view rendered
  },
  {
    path: '/deliverystatus', // the url
    component: DelivaryStatus, // view rendered
  },
]

export default routes
