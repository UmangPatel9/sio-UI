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
  
  
  const BuyPlan: React.FC = () => {

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
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Buy Plan</b></h3>
                            </div>
                        </div>

                        <IonGrid className="table">

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <p className=""><b>Pro Plan</b></p>
                                <p className="">Rs. 500 / monthly</p>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                            <p className=""></p>
                                <p className="">Projects: 5</p>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                                <IonButton fill="clear">
                                    <IonIcon icon="/assets/images/arrow-right-icon.svg" ></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <p className=""><b>Ultimate</b></p>
                                <p className="">Rs. 1000 / monthly</p>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                            <p className=""></p>
                                <p className="">Projects: 10</p>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                                <IonButton fill="clear">
                                    <IonIcon icon="/assets/images/arrow-right-icon.svg" ></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        </IonGrid>

                        <p className="table-footer-note ion-text-center">Logged in with <b>9898098980</b></p>

                        <div className="subsciption-note">
                            <p>Subscription will auto-renew every month/year based on the plan you have purchased unless you cancel it 24 hours prior to the end of the current period.</p>
                        </div>

                        <div className="buy-plan-footer">
                            <div className="main-logo">
                                <IonButton routerLink="/" fill="clear">
                                    <IonImg className="logo" src="assets/images/sio-logo.png" />
                                </IonButton>
                                
                            </div>
                            <IonButton className="clear-button-with-border" fill="clear">
                                Privacy & Terms
                            </IonButton>  
                            
                            <p>In case of any query, email us at <a href="mailto:contact@sio.com">contact@sio.com</a></p>
                        </div>

                    </IonCol>
  
                </IonRow>
                </IonGrid>


          </IonContent>
  
      </IonPage>
    );
  };
  
  export default BuyPlan;