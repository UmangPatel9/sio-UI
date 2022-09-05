import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Home from './pages/Index';
import ForgetPassword from './pages/Forget-Password';
import ResetPassword from './pages/Reset-Password';
import SelectWorkspace from './pages/Select-Workspace';
import SelectProject from './pages/Select-Project';
import Registration from './pages/registration';
import CreateNewWorkspace from './pages/Create-New-Workspace';
import CreateProject from './pages/Create-Project';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/My-Account';
import MyProfile from './pages/My-Profile';
import Users from './pages/Users';
import InviteUser from './pages/Invite-User';
import EditUser from './pages/Edit-User';
import BillingFreePlan from './pages/Billing-Free-Plan';
import BillingProPlan from './pages/Billing-Pro-Plan';
import BuyPlan from './pages/Buy-Plan';
import Inward from './pages/Inward';
import InwardSubCategory from './pages/Inward-Sub-Category';
import InwardEntry from './pages/Inward-Entry';
import Outward from './pages/Outward';
import OutwardSubCategory from './pages/Outward-Sub-Category';
import OutwardEntry from './pages/Outward-Entry';
import MaterialStock from './pages/Material-Stock';
import StockReport from './pages/Stock-Report';
import StockUsedReport from './pages/Stock-Used-Report';
import SpalshScreen from './pages/Splash-screen';
import PageNotFound from './pages/404';
import PrivacyPolicy from './pages/Privacy-Policy';

import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export const Routes = {
  indexURL: '/index',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password',
  selectWorkspace: '/select-workspace',
  selectProject: '/select-project',
  registration: '/registration',
  createNewWorkspace: '/create-new-workspace',
  createProject: '/create-project',
  dashboard: '/dashboard',
  myAccount: '/my-account',
  myProfile: '/my-profile',
  users: '/users',
  inviteUser: '/invite-user',
  editUser: '/edit-user',
  billingFreePlan: '/billing-free-plan',
  billingProPlan: '/billing-pro-plan',
  buyPlan: '/buy-plan',
  inward: '/inward',
  inwardSubCategory: '/inward-sub-category',
  inwardEntry: '/inward-entry',
  outward: '/outward',
  outwardSubCategory: '/outward-sub-category',
  outwardEntry: '/outward-entry',
  materialStock: '/material-stock',
  stockReport: '/stock-report',
  stockUsedReport: '/stock-used-report',
  spalshScreen: '/splash-screen',
  pageNotFound: '/page-not-found',
  privacyPolicy: '/privacy-policy'
}

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main"> */}
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              {/* <Redirect to="/page/Inbox" /> */}
              <Home />
            </Route>
            <Route exact path={Routes.forgetPassword}>
              <ForgetPassword />
            </Route>
            <Route exact path={Routes.resetPassword}>
              <ResetPassword />
            </Route>
            <Route exact path={Routes.selectWorkspace}>
              <SelectWorkspace />
            </Route>
            <Route exact path={Routes.selectProject}>
              <SelectProject />
            </Route>
            <Route exact path={Routes.registration}>
              <Registration />
            </Route>
            <Route exact path={Routes.createNewWorkspace}>
              <CreateNewWorkspace />
            </Route>
            <Route exact path={Routes.createProject}>
              <CreateProject />
            </Route>
            <Route exact path={Routes.dashboard}>
              <Dashboard />
            </Route>
            <Route exact path={Routes.myAccount}>
              <MyAccount />
            </Route>
            <Route exact path={Routes.myProfile}>
              <MyProfile />
            </Route>
            <Route exact path={Routes.users}>
              <Users />
            </Route>
            <Route exact path={Routes.inviteUser}>
              <InviteUser />
            </Route>
            <Route exact path={Routes.editUser}>
              <EditUser />
            </Route>
            <Route exact path={Routes.billingFreePlan}>
              <BillingFreePlan />
            </Route>
            <Route exact path={Routes.billingProPlan}>
              <BillingProPlan />
            </Route>
            <Route exact path={Routes.buyPlan}>
              <BuyPlan />
            </Route>
            <Route exact path={Routes.inward}>
              <Inward />
            </Route>
            <Route exact path={Routes.inwardSubCategory}>
              <InwardSubCategory />
            </Route>
            <Route exact path={Routes.inwardEntry}>
              <InwardEntry />
            </Route>
            <Route exact path={Routes.outward}>
              <Outward />
            </Route>
            <Route exact path={Routes.outwardSubCategory}>
              <OutwardSubCategory />
            </Route>
            <Route exact path={Routes.outwardEntry}>
              <OutwardEntry />
            </Route>
            <Route exact path={Routes.materialStock}>
              <MaterialStock />
            </Route>
            <Route exact path={Routes.stockReport}>
              <StockReport />
            </Route>
            <Route exact path={Routes.stockUsedReport}>
              <StockUsedReport />
            </Route>
            <Route exact path={Routes.spalshScreen}>
              <SpalshScreen />
            </Route>
            <Route exact path={Routes.pageNotFound}>
              <PageNotFound />
            </Route>
            <Route exact path={Routes.privacyPolicy}>
              <PrivacyPolicy />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
          
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
