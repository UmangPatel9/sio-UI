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

import { createOutline, arrowForwardCircleSharp, chevronBack } from 'ionicons/icons';

import { useHistory } from "react-router-dom";

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import Header from '../components/Header';
import { Routes } from '../App';

const SelectProject: React.FC = () => {
  
    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    const doNothing = () => {

    }
 
    return (
      <IonPage>
  
        <Header class=""   onBack={doNothing} />
  
        <IonContent fullscreen>
          <IonGrid className="full-height-div">
            <IonRow className="main-row">
              <IonCol size="12" sizeMd="6" sizeLg="4">
                
                <div className="select-project-header">
                    <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                        <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                    </IonButton>
                    <div className="project-title-wrap">
                        <h6>Select Project of</h6>
                        <h3><b>ABC Builder Group</b></h3>
                    </div>
                    <IonButton className="edit-project-button ion-text-right" fill="clear">
                        <IonIcon  icon="/assets/images/edit-icon.svg" ></IonIcon>
                    </IonButton>
                </div>
                <IonCard>
                    {/* <IonCardHeader>
                        <h6>Workspace for 9898098980</h6>
                        <IonButton className="edit-workspace-button ion-text-right" fill="clear">
                            <IonIcon  icon="/assets/images/edit-icon.svg" ></IonIcon>
                        </IonButton>
                    </IonCardHeader> */}

                    <IonCardContent>
                        <IonList mode="md" className="">
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>Happy Homes</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink="#">
                                </IonButton>
                            </IonItem>
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>Project - 2</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink="#">
                                </IonButton>
                            </IonItem>
                            <IonItem className="position-relative">
                                <IonLabel mode='md'>Project - 3</IonLabel>
                                <IonIcon icon={arrowForwardCircleSharp} slot="end" />
                                <IonButton className="abosolute-button-with-link" expand="full" fill="clear" slot="end" routerLink="#">
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard className="light-pink-card">
                    <h5>Want to create another Project?</h5>
                    <IonButton className="secondary-button" fill="solid" routerLink={Routes.createProject}>
                        Create Project
                    </IonButton>
                </IonCard>

              </IonCol>
  
            </IonRow>
          </IonGrid>
  
        </IonContent>
  
        
  
      </IonPage>
    );
  };
  
export default SelectProject;