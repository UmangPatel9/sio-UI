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
  
           <Header class="with-back-arrow"  onBack={doNothing}/>
  
           <IonContent fullscreen>
                <IonGrid className="full-height-div">
                <IonRow className="main-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">

                        <div className="select-project-header">
                            <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Dashboard</b></h3>
                            </div>
                        </div>

                        <IonRow className="main-title-with-icons-on-right ion-align-items-end">
                            <IonCol size="9" sizeMd="9"  sizeLg="9" className="title-wrap ion-no-padding">
                                <h4 className="ion-no-margin">Project</h4>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="buttons-wrap ion-text-end ion-no-padding">
                                <IonButton fill="clear" routerLink={Routes.selectWorkspace}>
                                    <IonIcon icon="assets/images/arrow-down-icon.svg" ></IonIcon>
                                </IonButton>
                                <IonButton fill="clear" routerLink={Routes.selectWorkspace}>
                                    <IonIcon icon="/assets/images/edit-icon.svg" ></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <div className="project-name">
                            <h3 className="ion-no-margin"><b>Happy Homes</b></h3>
                            <h6 className="project-date">Jan 01, 2021</h6>
                        </div>

                        <IonRow className="dashboar-buttons">
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.myAccount}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/my-account-icon.svg" />
                                        <h6 className="">My Account</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.stockReport}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/stock-icon.svg" />
                                        <h6 className="">Stock</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.inward}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/inward-icon.svg" />
                                        <h6 className="">Inward</h6>
                                    </div>
                                </IonButton>
                            </IonCol>
                            <IonCol size="6" sizeMd="6" sizeLg="6">
                                <IonButton expand="block" fill="outline" routerLink={Routes.outward}>
                                    <div className="button-inner">
                                        <IonIcon slot="icon-only" src="/assets/images/outward-icon.svg" />
                                        <h6 className="">Outward</h6>
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
  
  export default Dashboard;