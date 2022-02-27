import React from "react";
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
  
  import { chevronBack } from 'ionicons/icons';

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';
  
  // import Header from '../components/Header';
  
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  const CreateNewWorkspace: React.FC = () => {
  
    const methods = useForm();
    const { register,  handleSubmit, getValues, control, formState: { errors } } = methods;

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };
  
    const onSubmit = (data: any) => {
      console.log(data);
      history.push(Routes.createProject);
    };

    const doNothing = () => {

    }
  
     return (
        <IonPage>
  
           {/* <Header class="with-back-arrow"  onBack={doNothing}/> */}
  
           <IonContent fullscreen>
              <IonGrid className="full-height-div">
                 <IonRow className="login-form-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">
                       <FormProvider {...methods}>
                          <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="back-arrow">
                                <IonButton className="ion-text-right" fill="clear" onClick={pageBack}   >
                                    <IonIcon icon={chevronBack} ></IonIcon>
                                </IonButton>
                            </div>

                             <div className="main-logo">
                                <IonButton routerLink="/" fill="clear">
                                   <IonImg className="logo" src="assets/images/sio-logo.png" />
                                </IonButton>
                             </div>
  
                             <h4 className='ion-text-center'>Create your Workspace</h4>
  
                             {/* <IonGrid> */}
                                <IonRow>
                                    <IonCol size="12" className="ion-margin-top">
                                        <IonLabel className="form-lable">Oraganization Name:</IonLabel>
                                        <Controller
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <IonInput 
                                                    type="text"
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.organizatiionName ? 'is-invalid' : ''}`}
                                                    placeholder="Add text" 
                                                />
                                            )}
                                            control={control}
                                            name="organizatiionName"
                                            rules={{
                                                required: "Please enter Oraganization Name."  
                                            }}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="organizatiionName"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>
  
                                   <IonCol size="12" className="ion-margin-top">
                                      <IonButton className="secondary-button" type="submit" expand="block" fill="solid" >
                                        Create Workspace
                                      </IonButton>
                                   </IonCol>
                                </IonRow>
                             {/* </IonGrid> */}
  
                          </form>
                       </FormProvider>
                    </IonCol>
  
                 </IonRow>
              </IonGrid>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default CreateNewWorkspace;