import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Home from './pages/Index';
import ForgetPassword from './pages/Forget-Password';
import ResetPassword from './pages/Reset-Password';
import SelectWorkspace from './pages/Select-Workspace';
import SelectProject from './pages/Select-Project';

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
  selectProject: '/select-project'
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
