import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    IonButton 
} from '@ionic/react';
import { useHistory } from "react-router-dom";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const PageNotFound: React.FC = () => {
  
    let history = useHistory();
  
    return (
      <IonPage>
  
        {/* <Header class="without-back-arrow" onBack={doNothing} /> */}
  
        <IonContent className="splash-screen-content page-not-found-section" fullscreen>
          <IonGrid className="full-height-div">
            <IonRow>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <div className="login-header splash-screen-header">
                  <IonImg src="/assets/images/csm-logo.png" alt="Logo" />
                  {/* <h3>Sort It OUT</h3> */}
                </div>
                <h1 className="ion-text-center">404</h1>
                <h6 className="">Look like you're lost</h6>
                <p>the page you are looking for not avaible!</p>
                <IonButton routerLink={Routes.indexURL} fill="solid" >
                  Go to Home
                </IonButton>
              </IonCol>
  
            </IonRow>
          </IonGrid>
  
        </IonContent>
  
        
  
      </IonPage>
    );
  };
  
export default PageNotFound;
