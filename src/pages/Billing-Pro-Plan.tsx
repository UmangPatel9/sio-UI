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
    IonIcon,
    IonAlert
  } from '@ionic/react';
  
  import { chevronBack, personAddSharp, removeCircleSharp } from 'ionicons/icons';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const BillingProPlan: React.FC = () => {

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
                                <h3><b>Billing</b></h3>
                            </div>
                        </div>

                        <IonRow className="main-title-with-icons-on-right">
                            <IonCol size="6" sizeMd="6"  sizeLg="6" className="title-wrap ion-no-padding">
                                <h1 className="ion-no-margin">Pro Plan</h1>
                                <h5 className="project-number ion-no-margin"><b>Project</b>: 5/2</h5>
                            </IonCol>
                            <IonCol size="6" sizeMd="6"  sizeLg="6" className="buttons-wrap ion-text-end ion-no-padding">
                                <IonButton className="yellow-button" fill="solid">
                                    Update
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <h5 className="table-title">Transaction</h5>

                        <IonGrid className="table">

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <h6 className="ion-no-margin">DATE</h6>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                                <h6 className="ion-no-margin">PLAN</h6>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                                <h6 className="ion-no-margin">AMOUNT</h6>
                            </IonCol>
                        </IonRow>

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <p className=""><b>March 01</b></p>
                                <p className="">2021</p>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                            <p className=""></p>
                                <p className="">Pro Plan</p>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                                <p>500</p>
                            </IonCol>
                        </IonRow>

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <p className=""><b>Jan 01</b></p>
                                <p className="">2021</p>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                            <p className=""></p>
                                <p className="">Free Plan</p>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                                <p>0</p>
                            </IonCol>
                        </IonRow>

                        </IonGrid>

                        <p className="table-footer-note ion-text-center">Logged in with <b>9898098980</b></p>

                    </IonCol>
  
                </IonRow>
                </IonGrid>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default BillingProPlan;