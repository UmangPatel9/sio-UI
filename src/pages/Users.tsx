import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    IonIcon
  } from '@ionic/react';
  
  import { chevronBack, personAddSharp } from 'ionicons/icons';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const Users: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };
  
    const onSubmit = (data: any) => {
    console.log(data);
    };

    const doNothing = () => {

    }
  
    return (
        <IonPage>
  
           <Header class="with-back-arrow"  onBack={doNothing}/>
  
           <IonContent fullscreen>
                <IonGrid className="full-height-div">
                <IonRow className="main-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">

                        <div className="select-project-header">
                            <IonButton fill="clear" onClick={pageBack}>
                                <IonIcon icon={chevronBack} ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Users</b></h3>
                            </div>
                        </div>

                        <div className="ion-text-right">
                            <IonButton className="invite-user-button" fill="clear">
                                <IonIcon icon={personAddSharp} ></IonIcon>
                                <h5 className="ion-no-margin">Invite User</h5>
                            </IonButton>
                        </div>

                        <IonRow className="">
                            <IonCol size="9" sizeMd="9"  sizeLg="9" className="title-wrap ion-no-padding">
                                <h4 className="ion-no-margin">Project</h4>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="buttons-wrap ion-text-end ion-no-padding">
                                <IonButton fill="clear">
                                    <IonIcon icon="assets/images/arrow-down-icon.svg" ></IonIcon>
                                </IonButton>
                                <IonButton fill="clear">
                                    <IonIcon icon="/assets/images/edit-icon.svg" ></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonCol>
  
                </IonRow>
                </IonGrid>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default Users;