import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg 
} from '@ionic/react';
import { useHistory } from "react-router-dom";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const SpalshScreen: React.FC = () => {
  
    let history = useHistory();
  
    return (
      <IonPage>
  
        {/* <Header class="without-back-arrow" onBack={doNothing} /> */}
  
        <IonContent className="splash-screen-content" fullscreen>
          <IonGrid className="full-height-div">
            <IonRow>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <div className="splash-screen-image">
                  <IonImg src="/assets/images/splash-screen.png" alt="Splash Screen" />
                </div>
                <div className="login-header splash-screen-header">
                  <IonImg src="/assets/images/sio-logo.png" alt="Logo" />
                  <h3>Sort It OUT</h3>
                </div>
                <h3 className="app-name ion-text-center">Building Construction <br/>Inventory Management</h3>
                <h6 className="app-version">Version 1.0</h6>
              </IonCol>
  
            </IonRow>
          </IonGrid>
  
        </IonContent>
  
        
  
      </IonPage>
    );
  };
  
export default SpalshScreen;
