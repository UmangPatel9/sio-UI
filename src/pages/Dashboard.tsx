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
  
  import { chevronBack, createOutline } from 'ionicons/icons';
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
    import '@ionic/react/css/flex-utils.css';
    import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  
  
  const Dashboard: React.FC = () => {

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
  
           {/* <Header class="with-back-arrow"  onBack={doNothing}/> */}
  
           <IonContent fullscreen>
                <IonGrid className="full-height-div">
                <IonRow className="login-form-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">
                        <div className="select-project-header">
                            <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                                <IonIcon icon={chevronBack} ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Dashboard</b></h3>
                            </div>
                        </div>
                        <IonRow className="login-form-row">
                            <IonCol size="12" sizeMd="6" sizeLg="4">
                                <IonButton className="secondary-button" fill="solid">
                                    <IonIcon icon="" />
                                    <span className="">Add More</span>
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
  
  export default Dashboard;