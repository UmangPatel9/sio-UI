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

    const defaultList = [
        { userName: "Ramesh Mehta", activeUser:"yes", userNumber: "9898098980", userDesignation: "Builder", userType: "Owner" },
        { userName: "Keshav Gandhi", activeUSer:"no", userNumber: "9898098980", userDesignation: "Site Incharge", userType: "" },
    ];

    const [inputList, setInputList] = useState(defaultList);
    const [removeUser, setRemoveUser] = useState(false);

    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const renderList = () => {
        return inputList.map((x, i) => {
            return (
                <IonRow key={i} className="table-row table-header">
                    <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                        <p className={`user-name ${x.activeUser == 'yes' ? 'active-user' : ''}`}>{x.userName}</p>
                        <p className={`user-number ${x.activeUser == 'yes' ? 'active-user-number' : ''}`}>{x.userNumber}</p>
                    </IonCol>
                    <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                        <p className="user-designation">{x.userDesignation}</p>
                        <p className="user-type">{x.userType}</p>
                    </IonCol>
                    <IonCol size="3" sizeMd="3"  sizeLg="3" className={`buttons-wrap ion-text-end ${x.userType == 'Owner' ? 'ion-hide' : ''}`}>
                        <IonButton fill="clear" onClick={() => setRemoveUser(true)}>
                            <IonIcon icon={removeCircleSharp} ></IonIcon>
                        </IonButton>
                        <IonButton fill="clear" routerLink={Routes.editUser}>
                            <IonIcon icon="/assets/images/user-edit-icon.svg" ></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonAlert
                        isOpen={removeUser}
                        onDidDismiss={() => setRemoveUser(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove Tenant'}
                        message={'<p>Are you sure you want to remove this User?</p>'}
                        buttons={[
                            {
                                text: 'Yes',
                                cssClass: 'btn-secondary',
                                handler: () => {
                                    handleRemoveClick(i);
                                    console.log('Exit File Okay');
                                }
                            },
                            {
                                text: 'No',
                                role: 'cancel',
                                cssClass: 'btn-outline',
                                handler: () => {
                                    console.log('Exit File Cancel');
                                }
                            }
                            
                        ]}
                    />
                </IonRow>  
                
            );
        })
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
                            <IonButton className="invite-user-button" fill="clear" routerLink={Routes.inviteUser}>
                                <IonIcon icon={personAddSharp} ></IonIcon>
                                <h5 className="ion-no-margin">Invite User</h5>
                            </IonButton>
                        </div>

                        <IonGrid className="table">

                        <IonRow className="table-row table-header">
                            <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                                <h6 className="ion-no-margin">USER</h6>
                            </IonCol>
                            <IonCol size="4" sizeMd="4"  sizeLg="4" className="">
                                <h6 className="ion-no-margin">ROLE</h6>
                            </IonCol>
                            <IonCol size="3" sizeMd="3"  sizeLg="3" className="ion-text-end">
                            </IonCol>
                        </IonRow>

                        {renderList()}

                        </IonGrid>

                    </IonCol>
  
                </IonRow>
                </IonGrid>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default Users;