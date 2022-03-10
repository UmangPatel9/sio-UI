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
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonCheckbox,
    IonAlert
  } from '@ionic/react';
  
  import { chevronBack, personCircleSharp, keySharp, phonePortraitSharp, mailSharp } from 'ionicons/icons';

  import Header from "../components/Header";

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';
  import { format, parseISO } from 'date-fns';
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const EditUser: React.FC = () => {

    const [editUser, setEditUser] = useState(false);
  
    const methods = useForm();
    const { register,  handleSubmit, setValue, getValues, control, formState: { errors } } = methods;


    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };
  
    const onSubmit = (data: any) => {
        console.log(data);
        // setRemoveUser(true);
    };

    const doNothing = () => {

    }
  
    return (
        <IonPage>
  
            <Header class="with-back-arrow"  onBack={doNothing}/>
  
            <IonContent fullscreen>
            <IonGrid>
            <IonRow className="login-form-row">
            <IonCol size="12" sizeMd="6" sizeLg="4">

                <div className="back-arrow">
                    <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                            <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                    </IonButton>
                    <h3>Edit User</h3>
                </div>

                <div className="user-name-display">
                    <h3 className="first-name">First Name</h3>
                    <h3 className="last-name">Last Name</h3>

                </div>

                <FormProvider {...methods}>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <IonRow>

                    <IonCol size="12" className="forget-password">
                        <IonLabel className="form-lable">Mobile No.*</IonLabel>
                        <div className="input-with-icon read-only-input">                              
                            <IonIcon icon={phonePortraitSharp} />
                            <IonInput
                                value="9825198251"
                                className="form-control"
                                placeholder=""
                                readonly
                            />
                        </div>
                    </IonCol>

                    <IonCol size="12" className="email-field">
                        <IonLabel className="form-lable">Emial*</IonLabel>
                        <div className="input-with-icon read-only-input">                              
                            <IonIcon icon={mailSharp} />
                            <IonInput 
                                value="abc@xyz.com"
                                className="form-control"
                                placeholder="" 
                                readonly
                            />
                        </div>
                    </IonCol>

                    <IonCol size="12" className="">
                        <IonLabel className="form-lable">Role:</IonLabel>
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Select One"
                                value={field.value}
                                className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('role', e.detail.value)}
                            >
                                <IonSelectOption value="Project Manager">Project Manager</IonSelectOption>
                                <IonSelectOption value="Owner">Owner</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="role"
                            rules={{ required: 'Please select role' }}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="role"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                    <IonCol size="12" className="">
                        <IonItem className="checkbox-wrap">
                            <IonLabel className="form-lable">Workspace Owner</IonLabel>
                            <IonCheckbox mode="md" slot="start"></IonCheckbox>
                        </IonItem>
                    </IonCol>
                                            
                    <IonCol size="8" className="ion-align-self-center ion-margin-auto ion-text-center ion-margin-top">
                        <IonButton  type="submit" fill="solid" expand="block" >
                            Update
                        </IonButton>
                    </IonCol>

                    <IonAlert
                        isOpen={editUser}
                        onDidDismiss={() => setEditUser(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove Tenant'}
                        message={'<p>Are you sure you want to remove this User?</p>'}
                        buttons={[
                            {
                                text: 'Close',
                                cssClass: 'btn-secondary',
                                handler: () => {
                                    history.push(Routes.users);
                                    console.log('Exit File Okay');
                                }
                            }
                            
                        ]}
                    />

                </IonRow>
                </form>
                </FormProvider>

            </IonCol>
            </IonRow>
            </IonGrid>
             </IonContent>
  
        </IonPage>
    );
  };
  
  export default EditUser;