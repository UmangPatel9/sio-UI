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
    IonDatetime,
    IonModal,
    IonPopover,
    IonButtons,
    IonSelect,
    IonSelectOption  
  } from '@ionic/react';
  
  import { chevronBack, createOutline, locationSharp, calendar } from 'ionicons/icons';

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';
  import { format, parseISO } from 'date-fns';
  
  // import Header from '../components/Header';
  
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  
  const CreateProject: React.FC = () => {
  
    const methods = useForm();
    const { register,  handleSubmit, setValue, getValues, control, formState: { errors } } = methods;

    const [selectedStartDate, setSelectedStartDate] = useState<string>('2022-01-01T13:47:20.789');
    const [popoverDate2, setPopoverDate2] = useState('');
    const customDatetime = useRef();
    // const confirm = () => {
    //     if (customDatetime === undefined) return;
        
    //     customDatetime.confirm();
    // };
    
    // const reset = () => {
    //     if (customDatetime === undefined) return;
        
    //     customDatetime.reset();
    // };

    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };


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
  
           {/* <Header class="with-back-arrow"  onBack={doNothing}/> */}
  
           <IonContent fullscreen>
              <IonGrid className="full-height-div">
                 <IonRow className="login-form-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">
                        <div className="select-project-header">
                            <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                                <IonIcon icon={chevronBack} ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h6>Select Project of</h6>
                                <h3><b>ABC Builder Group</b></h3>
                            </div>
                            <IonButton className="edit-project-button ion-text-right" fill="clear">
                                <IonIcon icon={createOutline} ></IonIcon>
                            </IonButton>
                        </div>
                       <FormProvider {...methods}>
                          <form onSubmit={handleSubmit(onSubmit)}>
  
                             {/* <IonGrid> */}
                                <IonRow>
                                    <IonCol size="12" className="ion-margin-top">
                                        <IonLabel className="form-lable">Project Name:</IonLabel>
                                        <Controller
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <IonInput 
                                                    type="text"
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                                    placeholder="Add text" 
                                                />
                                            )}
                                            control={control}
                                            name="projectName"
                                            rules={{
                                                required: "Please enter Oraganization Name."  
                                            }}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="projectName"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>

                                    <IonCol size="12" className="ion-margin-top">
                                        <h3 className="form-sub-title">
                                            Location
                                            <IonIcon icon={locationSharp} ></IonIcon>
                                        </h3>
                                        <IonLabel className="form-lable">State:</IonLabel>
                                        <Controller
                                            render={({ field }) => (
                                            <IonSelect
                                                placeholder="Select One"
                                                value={field.value}
                                                className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                                onIonChange={(e) => setValue('state', e.detail.value)}
                                            >
                                                <IonSelectOption value="Gujarat">Gujarat</IonSelectOption>
                                                <IonSelectOption value="Maharastra">Maharastra</IonSelectOption>
                                                <IonSelectOption value="Rajasthan">Rajasthan</IonSelectOption>
                                            </IonSelect>
                                            )}
                                            control={control}
                                            name="state"
                                            rules={{ required: 'This is a required field' }}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="statestate"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>

                                    <IonCol size="12" className="ion-margin-top">
                                        <IonLabel className="form-lable">District:</IonLabel>
                                        <Controller
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <IonInput 
                                                    type="text"
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.district ? 'is-invalid' : ''}`}
                                                    placeholder="Add text" 
                                                />
                                            )}
                                            control={control}
                                            name="district"
                                            rules={{
                                                required: "Please enter district Name."  
                                            }}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="district"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>

                                    <IonCol size="12" className="ion-margin-top">
                                        <IonLabel className="form-lable">City:</IonLabel>
                                        <Controller
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <IonInput 
                                                    type="text"
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                                    placeholder="Add text" 
                                                />
                                            )}
                                            control={control}
                                            name="city"
                                            rules={{
                                                required: "Please enter city Name."  
                                            }}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="city"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>

                                    <IonCol size="12" className="ion-margin-top">
                                        <IonLabel className="form-lable"><h4><b>Start Date:</b></h4></IonLabel>
                                        <div className="date-picker">
                                            <IonInput id="date-input-2" value={popoverDate2} />
                                            <IonButton fill="clear" id="open-modal">
                                                <IonIcon icon={calendar} />
                                            </IonButton>
                                            {/* <IonIcon icon="assets/images/calendar-icon.svg" /> */}
                                            <IonModal trigger="open-modal">
                                                <IonContent>
                                                    <IonDatetime
                                                        // ref={customDatetime}
                                                        presentation="date"
                                                        onIonChange={ev => setPopoverDate2(formatDate(ev.detail.value!))}
                                                    />
                                                    {/* <IonButtons slot="buttons">
                                                        <IonButton onClick={() => confirm()}>Good to go!</IonButton>
                                                        <IonButton onClick={() => reset()}>Reset</IonButton>
                                                    </IonButtons> */}
                                                </IonContent>
                                            </IonModal>
                                        </div>
                                        {/* <ErrorMessage
                                            errors={errors}
                                            name="city"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        /> */}
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
  
  export default CreateProject;