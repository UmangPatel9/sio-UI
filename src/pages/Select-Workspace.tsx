import { 
    IonContent, 
    IonPage, 
    IonIcon, 
    IonInput, 
    IonButton,
    IonLabel, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem
} from '@ionic/react';

import { createOutline, arrowForwardCircleSharp } from 'ionicons/icons';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import Header from '../components/Header';
import { Routes } from '../App';

const SelectWorkspace: React.FC = () => {
  
    const doNothing = () => {
  
    }
 
    return (
      <IonPage>
  
        <Header class="" onBack={doNothing}/>
  
        <IonContent fullscreen>
          <IonGrid className="full-height-div">
            <IonRow className="main-row">
              <IonCol size="12" sizeMd="6" sizeLg="4">
                
                <IonCard>
                    <IonCardHeader>
                        <h6>Workspace for 9898098980</h6>
                        <IonButton className="edit-workspace-button ion-text-right" fill="clear">
                            <IonIcon  icon="/assets/images/edit-icon.svg" ></IonIcon>
                        </IonButton>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList mode="md" className="">
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>ABC Builder Group</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink={Routes.selectProject}>
                                </IonButton>
                            </IonItem>
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>XYZ Builder Group</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink={Routes.selectProject}>
                                </IonButton>
                            </IonItem>
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>AAA Builder Group</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink={Routes.selectProject}>
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard className="light-pink-card">
                    <h5>Want to create another Workspace?</h5>
                    <IonButton className="secondary-button" href="#" fill="solid" routerLink="#">
                        Create Workspace
                    </IonButton>
                </IonCard>

                <h5>Pending Invitations</h5>
                <IonCard>
                    <IonCardHeader className="card-header-without-icon">
                        <h6>Invitation for 9898098980</h6>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList mode="md" className="list-with-seperate-button">
                            <IonItem>
                                <IonLabel>OK Builder Group</IonLabel>
                                <IonButton href="#" fill="solid" routerLink="#">
                                    Join
                                </IonButton>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Sanghvi Builder Group</IonLabel>
                                <IonButton href="#" fill="solid" routerLink="#">
                                    Join
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

              </IonCol>
  
            </IonRow>
          </IonGrid>
  
        </IonContent>
  
        
  
      </IonPage>
    );
  };
  
  export default SelectWorkspace;
  