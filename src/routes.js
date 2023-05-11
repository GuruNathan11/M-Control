import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AdminConfiguration = React.lazy(() =>
  import('./views/profile/configuartion/adminconfiguration/AdminConfiguration'),
)
const StockConfiguration = React.lazy(() =>
  import('./views/profile/configuartion/stockconfiguration/StockConfiguration'),
)
const MutualFunds = React.lazy(() =>
  import('./views/profile/configuartion/mutualfundsconfiguration/MutualFunds'),
)
const CorporateActions = React.lazy(() =>
  import('./views/profile/configuartion/Corporate Actions/CorporateAction'),
)
const Portfolio = React.lazy(() => import('./views/profile/portfolio/Portfolio'))
const Typography = React.lazy(() => import('./views/profile/typography/Typography'))
const Form = React.lazy(() => import('./views/profile/form/Form'))
const SmallFdRates = React.lazy(() => import('./views/profile/fdrates/smallbank/SmallFdRates'))
const GovtPoFdRates = React.lazy(() => import('./views/profile/fdrates/govtpobank/GovtPoFdRates'))
const UrbanCoopFdRates = React.lazy(() =>
  import('./views/profile/fdrates/urbancoopbank/UrbanCoopFdRates'),
)
const PrivateFdRates = React.lazy(() =>
  import('./views/profile/fdrates/privatebank/PrivateFdRates'),
)
const ForeignFdRates = React.lazy(() =>
  import('./views/profile/fdrates/foreignbank/ForeignFdRates'),
)
const NbfcFdRates = React.lazy(() => import('./views/profile/fdrates/nonbank/NbfcFdRates'))

const contactus = React.lazy(() => import('./views/contactus/ContactUs'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profile', name: 'Profile', element: AdminConfiguration, exact: true },
  {
    path: '/admin-configuration',
    name: 'Configuration / Admin Configuartion',
    element: AdminConfiguration,
  },
  {
    path: '/stock-configuration',
    name: 'Configuration / Stock Configuartion',
    element: StockConfiguration,
  },
  {
    path: '/mutualfunds-configuration',
    name: 'Configuration / Mutual Funds Configuartion',
    element: MutualFunds,
  },
  {
    path: '/Corporate-Actions',
    name: 'Configuration / Corporate Actions',
    element: CorporateActions,
  },
  {
    path: '/profile/portfolio',
    name: 'Portfolio Manage',
    element: Portfolio,
  },
  { path: '/profile/analysis', name: 'Typography', element: Typography },
  { path: '/profile/form', name: 'Form', element: Form },
  { path: '/fdrates', name: 'FD Rates', element: ForeignFdRates, exact: true },
  { path: '/smfbank', name: 'Small Fin Bank FD Rates', element: SmallFdRates },
  { path: '/govtpobank', name: 'Govt Bank & Post Office FD Rates', element: GovtPoFdRates },
  {
    path: '/coopbank',
    name: 'Urban Co-Operative Bank FD Rates',
    element: UrbanCoopFdRates,
  },
  { path: '/pvtbank', name: 'Private Bank FD Rates', element: PrivateFdRates },
  { path: '/foreignbank', name: 'Foreign Bank FD Rates', element: ForeignFdRates },
  { path: '/nbfc', name: 'Non_Banking Financial Company FD Rates', element: NbfcFdRates },

  { path: '/contactus', name: 'Contact Us', element: contactus },
]

export default routes
