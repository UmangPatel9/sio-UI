import React from "react";
import { useHistory } from "react-router-dom";

import { 
    IonButton, 
    IonInput,
    IonGrid, 
    IonRow,
    IonCol, 
    IonLabel,
    IonImg,
    IonIcon
} from "@ionic/react";

import { chevronBack, reloadSharp } from 'ionicons/icons';

import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const RegistrationStep2: React.FC<any> = ({ next, prev }) => {
  const { register, getValues, control, formState: { errors } } = useFormContext(); // retrieve all hook methods
  let history = useHistory();

  const pageBack = () => {
      history.goBack();
  };

  return (
    <div className="slide-main ion-padding">
        <div className="form-content form-step-2">
            <IonGrid>
                <div className="back-arrow">
                    <IonButton className="ion-text-right" fill="clear" onClick={() => prev()}   >
                            <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                    </IonButton>
                </div>
                <div className="main-logo ion-hide-md-up">
                    <IonButton routerLink="/" fill="clear">
                        <IonImg className="logo" src="assets/images/sio-logo.png" />
                    </IonButton>
                </div>
                <p className="ion-text-center">Check your Mobile for a magic code. The code expires shortly, so please enter it soon.</p>
                <IonRow>

                    <IonCol size="12" className="email-field">
                        {/* <IonLabel className="form-lable">First Name*</IonLabel> */}
                        <Controller
                            render={({ field: { onChange, onBlur, value } }) => (
                                <IonInput 
                                    type="text"
                                    onIonChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    className={`form-control ${errors.verifyText ? 'is-invalid' : ''}`}
                                    placeholder="Add text"  
                                    mode="md"
                                />
                            )}
                            control={control}
                            name="verifyText"
                            rules={{
                                required: "Please enter a valid code."  
                            }}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="verifyText"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>

                
                    {/* <IonCol size="12" className="sign-up-btn">
                        <IonButton expand="block" shape="round" fill="outline" onClick={() => prev()}>
                            previous
                        </IonButton>
                    </IonCol> */}

                    <IonCol size="12" className="sign-up-btn">
                        <IonButton expand="block" shape="round" fill="solid" onClick={() => next(['verifyText'])}>
                            Verify
                        </IonButton>
                    </IonCol>

                    <IonCol size="12" className="form-footer-note">
                        <p>
                            Not received? 
                            <IonButton className="ion-text-right" fill="clear" routerLink="/">resend Code</IonButton>
                            <IonIcon icon={reloadSharp} ></IonIcon>
                        </p>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </div>
    </div>
  );
};

export default RegistrationStep2;