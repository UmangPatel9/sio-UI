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
    IonSelect,
    IonSelectOption  
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
  
  
  const InviteUser: React.FC = () => {
  
    const methods = useForm();
    const { register,  handleSubmit, setValue, getValues, control, formState: { errors } } = methods;


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
            <IonGrid>
            <IonRow className="login-form-row">
            <IonCol size="12" sizeMd="6" sizeLg="4">

                <div className="back-arrow">
                    <IonButton className="ion-text-right" fill="clear" routerLink="/">
                            <IonIcon icon={chevronBack} ></IonIcon>
                    </IonButton>
                    <h3>Invite User</h3>
                </div>

                <FormProvider {...methods}>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <IonRow>
                    <IonCol size="12" className="email-field">
                        <IonLabel className="form-lable">First Name*</IonLabel>
                        <div className="input-with-icon">                              
                            <IonIcon icon={personCircleSharp} />
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="text"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="firstName"
                                rules={{
                                  required: "First Name is required"  
                                }}
                            />
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="firstName"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                    <IonCol size="12" className="password-field">
                        <IonLabel className="form-lable">Last Name*</IonLabel>
                        <div className="input-with-icon">                              
                            <IonIcon icon={personCircleSharp} />
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="text"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="lastName"
                                rules={{
                                  required: "Last Name is required"  
                                }}
                            />
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="lastName"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                    <IonCol size="12" className="forget-password">
                        <IonLabel className="form-lable">Mobile No.*</IonLabel>
                        <div className="input-with-icon">                              
                            <IonIcon icon={phonePortraitSharp} />
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="number"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="telephone"
                                rules={{
                                    required: "Telephone is required",
                                    minLength: {
                                        value: 10,
                                        message: "Please enter a valid phone number"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Please enter a valid phone number"
                                    }
                                    
                                }}
                            />
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="telephone"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                    <IonCol size="12" className="email-field">
                        <IonLabel className="form-lable">Emial*</IonLabel>
                        <div className="input-with-icon">                              
                            <IonIcon icon={mailSharp} />
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="email"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="email"
                                rules={{
                                  required: "Email required field",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                  }
                                }}
                              />
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
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
                                            
                    <IonCol size="8" className="ion-align-self-center ion-margin-auto ion-text-center ion-margin-top">
                        <IonButton  type="submit" fill="solid" expand="block" >
                            Invite
                        </IonButton>
                    </IonCol>

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
  
  export default InviteUser;