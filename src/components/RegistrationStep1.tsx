import React from "react";

import { 
    IonButton, 
    IonInput,
    IonGrid, 
    IonRow,
    IonCol, 
    IonLabel,
    IonIcon
} from "@ionic/react";

import { chevronBack, personCircleSharp, keySharp, phonePortraitSharp, mailSharp } from 'ionicons/icons';

import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const RegistrationStep1: React.FC<any> = ({ next }) => {
  const { register, control, formState: { errors } } = useFormContext(); // retrieve all hook methods

  return (
    <div className="slide-main ion-padding">
        <div className="form-content">
            <IonGrid>
                <div className="back-arrow">
                    <IonButton className="ion-text-right" fill="clear" routerLink="/">
                            <IonIcon icon={chevronBack} ></IonIcon>
                    </IonButton>
                    <h4>Back to Sign In</h4>
                </div>
                <h1>Registration with SIO</h1>
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
                                  required: "This is a required field",
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

                    <IonCol size="12" className="password-field">
                        <IonLabel className="form-lable">Password*</IonLabel>
                        <div className="input-with-icon">                              
                            <IonIcon icon={keySharp} />
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="password"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="password"
                                rules={{
                                    required: 'This is a required field.',
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
                                        message: 'The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long.'
                                    }
                                }}
                            />
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                    <IonCol size="8" className="sign-up-btn ion-align-self-center ion-margin-auto">
                        <IonButton expand="block" shape="round" fill="solid" onClick={() => next(['firstName','lastName', 'telephone', 'email', 'password'])}>
                            Continue
                        </IonButton>
                    </IonCol>

                    <IonCol size="12" className="form-footer-note">
                        <p>by continuing, <br/>
                        you are agreeing to our <IonButton className="ion-text-right" fill="clear" routerLink="/">Privacy & Terms</IonButton></p>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </div>
    </div>
  );
};

export default RegistrationStep1;