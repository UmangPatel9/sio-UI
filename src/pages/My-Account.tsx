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
  
  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const MyAccount: React.FC = () => {

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

                        <div className="select-project-header my-account-header">
                            <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>My Account</b></h3>
                            </div>
                        </div>

                        <IonRow className="dashboar-buttons">
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.myProfile}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/my-profile-icon.svg" />
                                        <h6 className="">My Profile</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.users}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/users-icon.svg" />
                                        <h6 className="">Users</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.billingProPlan}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/billing-icon.svg" />
                                        <h6 className="">Billing</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.myAccount}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/logout-icon.svg" />
                                        <h6 className="">Logout</h6>
                                    </div>
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
  
  export default MyAccount;