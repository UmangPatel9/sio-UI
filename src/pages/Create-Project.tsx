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
    IonSelectOption,
    IonAlert  
  } from '@ionic/react';
  
  import { chevronBack, createOutline, locationSharp, calendar, removeCircleSharp, addCircleSharp } from 'ionicons/icons';

  import Header from "../components/Header";

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';
  import { format, parseISO } from 'date-fns';
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  
  
  const CreateProject: React.FC = () => {
  
    const methods = useForm();
    const { register,  handleSubmit, setValue, getValues, control, formState: { errors } } = methods;

    const [selectedStartDate, setSelectedStartDate] = useState<string>('2022-01-01T13:47:20.789');
    const [popoverDate2, setPopoverDate2] = useState('');
    const customDatetime = useRef<HTMLIonContentElement | null>(null);

    // const confirm = async (e: any) => {
    //     if (customDatetime === undefined) return;
    //         customDatetime.current.confirm(e);
    // };
    
    // const reset = async (e: any) => {
    //     if (customDatetime === undefined) return;
    //         customDatetime?.current?.reset(e);
    // };

    const formatDate = (value: string) => {
        return format(parseISO(value), 'dd-MM-yyyy');
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

    const defaultList = [
        { building: "", wing: "", flatNumber: "" }
    ];

    const [inputList, setInputList] = useState(defaultList);
    const [removeBuildingInfo, setRemoveBuildingInfo] = useState(false);

    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { building: "", wing: "", flatNumber: "" }]);
    };

    const renderList = () => {
        return inputList.map((x, i) => {
            return (
                <div key={i} className="building-info">
                    <IonRow>
                        <IonCol size="4">
                            <IonLabel className="form-lable">Building</IonLabel>
                            {/* <IonInput mode="md" type="text" value={x.building} name="building"></IonInput> */}
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <IonInput 
                                        type="text"
                                        onIonChange={onChange}
                                        onBlur={onBlur}
                                        className={`form-control ${errors.buiding ? 'is-invalid' : ''}`}
                                        placeholder=""  
                                        mode="md"
                                    />
                                )}
                                control={control}
                                name="buiding"
                                rules={{
                                    required: "Please enter buiding number."  
                                }}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="buiding{i+1}" 
                                as={<div className="error-message" style={{ color: 'red' }} />}
                            />
                        </IonCol>
                        <IonCol size="4">
                            <IonLabel className="form-lable">Wing</IonLabel>
                            {/* <IonInput mode="md" type="text" value={x.wing} name="wing"></IonInput> */}
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <IonInput 
                                        type="text"
                                        onIonChange={onChange}
                                        onBlur={onBlur}
                                        className={`form-control ${errors.wing ? 'is-invalid' : ''}`}
                                        placeholder="" 
                                        mode="md" 
                                    />
                                )}
                                control={control}
                                name="wing"
                                rules={{
                                    required: "Please enter wing number."  
                                }}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="wing"
                                as={<div className="error-message" style={{ color: 'red' }} />}
                            />
                        </IonCol>
                        <IonCol size="3">
                            <IonLabel className="form-lable">Flat No</IonLabel>
                            {/* <IonInput mode="md" type="text" value={x.flatNumber} name="flatNumber"></IonInput> */}
                            <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <IonInput 
                                        type="text"
                                        onIonChange={onChange}
                                        onBlur={onBlur}
                                        className={`form-control ${errors.flat ? 'is-invalid' : ''}`}
                                        placeholder="" 
                                        mode="md" 
                                    />
                                )}
                                control={control}
                                name="flat"
                                rules={{
                                    required: "Please enter flat number."  
                                }}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="flat"
                                as={<div className="error-message" style={{ color: 'red' }} />}
                            />
                        </IonCol>
                        <IonCol size="1">
                            <IonButton fill="clear" onClick={() => setRemoveBuildingInfo(true)}><IonIcon icon={removeCircleSharp} /></IonButton>
                        </IonCol>
                    </IonRow>
                    <IonAlert
                        isOpen={removeBuildingInfo}
                        onDidDismiss={() => setRemoveBuildingInfo(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove Tenant'}
                        message={'<p>Are you sure you want to remove this building info?</p>'}
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
                </div>
                
            );
        })
    }
  
    return (
        <IonPage>
  
           <Header class="with-back-arrow"  onBack={doNothing}/>
  
           <IonContent fullscreen>
              <IonGrid className="full-height-div">
                 <IonRow className="login-form-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">
                        <div className="select-project-header">
                            <IonButton className="ion-text-right" fill="clear" onClick={pageBack}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h6>Select Project of</h6>
                                <h3><b>ABC Builder Group</b></h3>
                            </div>
                            <IonButton className="edit-project-button ion-text-right" fill="clear">
                                <IonIcon  icon="/assets/images/edit-icon.svg" ></IonIcon>
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
                                                    mode="md" 
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
                                                    mode="md" 
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
                                                    mode="md" 
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
                                            <Controller
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <IonInput 
                                                    id="date-input-2"
                                                        onIonChange={onChange}
                                                        onBlur={onBlur}
                                                        value={popoverDate2}
                                                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                                        placeholder="" 
                                                        mode="md" 
                                                    />
                                                )}
                                                control={control}
                                                name="date"
                                                rules={{
                                                    required: "Please select date."  
                                                }}
                                            />
                                            <IonButton fill="clear" id="open-modal">
                                                <IonIcon icon={calendar} />
                                            </IonButton>
                                            {/* <IonIcon icon="assets/images/calendar-icon.svg" /> */}
                                            <IonModal className="date-picker-popup" trigger="open-modal">
                                                <IonContent>
                                                    <IonDatetime
                                                        // ref={customDatetime}
                                                        presentation="date"
                                                        showDefaultButtons={true}
                                                        onIonChange={ev => setPopoverDate2(formatDate(ev.detail.value!))}
                                                    />
                                                    {/* <IonButtons slot="buttons">
                                                        <IonButton onClick={() => confirm()}>Good to go!</IonButton>
                                                        <IonButton onClick={() => reset()}>Reset</IonButton>
                                                    </IonButtons> */}
                                                </IonContent>
                                            </IonModal>
                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="date"
                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                        />
                                    </IonCol>

                                    <IonCol size="12" className="ion-margin-top">
                                        <h3 className="form-sub-title">
                                            Building info
                                            <IonIcon slot="icon-only" src="/assets/images/city.svg" ></IonIcon>
                                        </h3>
                                        {renderList()}
                                        <div className="add-more-building-info ion-text-center">
                                            <IonButton className="secondary-button" fill="solid" onClick={handleAddClick}>
                                                <IonIcon icon={addCircleSharp} />
                                                <span className="">Add More</span>
                                            </IonButton>
                                        </div>
                                    </IonCol>
  
                                   <IonCol size="12" className="ion-margin-top">
                                      <IonButton className="secondary-button" type="submit" expand="block" fill="solid" >
                                        Create Project
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