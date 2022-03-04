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
    IonIcon,
    IonRadioGroup, 
    IonRadio,
    IonItem
} from "@ionic/react";

import { chevronBack, reloadSharp } from 'ionicons/icons';

import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const RegistrationStep3: React.FC<any> = ({ prev }) => {
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
                            <IonIcon icon={chevronBack} ></IonIcon>
                    </IonButton>
                    <h4>Select your role</h4>
                </div>
                <IonRow>

                    <IonCol size="12" className="email-field">
                        {/* <IonLabel className="form-lable">First Name*</IonLabel> */}
                        <ErrorMessage
                            errors={errors}
                            name="radioGrp"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                        <Controller
                            control={control}   
                            name="radioGrp"
                            rules={{ required: 'Please make a selection' }}
                            // onChangeName="onIonChange"
                            // onChange={inputChangeHandler}
                            render={({ field: { onChange, value } }) => (
                            <IonRadioGroup 
                                // defaultValue={TENANT} 
                                // onIonChange={inputChangeHandler}
                                value={value}
                                onIonChange={(e:any) => { 
                                    onChange(e); 
                                }}
                                {...register('radioGrp', { required: 'Please make a selection' })}
                            >

                                <IonItem className="user-select-item">
                                    <IonLabel>Builder / Developer</IonLabel>
                                    <IonRadio slot="start" mode="md" value="builder" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>Project Manager</IonLabel>
                                    <IonRadio slot="start" mode="md" value="projectManager" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>Site Incharge</IonLabel>
                                    <IonRadio slot="start" mode="md" value="siteIncharge" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>Supervisor / Engineer</IonLabel>
                                    <IonRadio slot="start" mode="md" value="supervisorEngineer" />
                                </IonItem>

                                <IonItem className="user-select-item">
                                    <IonLabel>Stock Manager</IonLabel>
                                    <IonRadio slot="start" mode="md" value="stockManager" />
                                </IonItem>

                            </IonRadioGroup>
                            )}
                        />
                    </IonCol>

                    <IonCol size="12" className="sign-up-btn">
                        <IonButton className="secondary-button" type="submit" expand="block" shape="round" fill="solid">
                            Register
                        </IonButton>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </div>
    </div>
  );
};

export default RegistrationStep3;