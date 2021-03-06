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
    IonTextarea 
  } from '@ionic/react';
  
  import { addCircleSharp } from 'ionicons/icons';

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const OutwardEntry: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    const methods = useForm();
    const { register,  handleSubmit, setValue, getValues, control, formState: { errors } } = methods;
  
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const doNothing = () => {

    }

    const materialListArray = [
        { material1: "Frame 1", material2:"Frame 2" },
    ];

    const brandListArray = [
        { brand1: "ABC", brand2:"XYZ" },
    ];

    const purposeListArray = [
        { purpose1: "Bathroom", purpose2:"Kitchen" },
    ];

    const [materialList, setMaterialList] = useState(materialListArray);
    const [brandList, setBrandList] = useState(brandListArray);
    const [purposeList, setPurposeList] = useState(purposeListArray);

    // handle click event of the Add button
    const handleAddMaterial = () => {
        setMaterialList([...materialList, { material1: "Frame 2", material2:"Frame 3" }]);
    };

    const handleAddBrand = () => {
        setBrandList([...brandList, { brand1: "ABC", brand2:"XYZ" }]);
    };

    const handleAddPurpose = () => {
        setPurposeList([...purposeList, { purpose1: "Bathroom", purpose2:"Kitchen" }]);
    };

    const renderMaterialList = () => {
        return materialList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Select One"
                                value={field.value}
                                className={`form-control ${errors.material ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('material', e.detail.value)}
                            >
                                <IonSelectOption value="{x.material1}">{x.material1}</IonSelectOption>
                                <IonSelectOption value="{x.materail2}">{x.material2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="material"
                            rules={{ required: 'Please select material' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="material"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const renderBrandList = () => {
        return brandList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Select One"
                                value={field.value}
                                className={`form-control ${errors.material ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('material', e.detail.value)}
                            >
                                <IonSelectOption value="{x.brand1}">{x.brand1}</IonSelectOption>
                                <IonSelectOption value="{x.brand2}">{x.brand2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="material"
                            rules={{ required: 'Please select brand' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="material"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const renderPurposeList = () => {
        return purposeList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Select One"
                                value={field.value}
                                className={`form-control ${errors.purpose ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('purpose', e.detail.value)}
                            >
                                <IonSelectOption value="{x.purpose1}">{x.purpose1}</IonSelectOption>
                                <IonSelectOption value="{x.purpose2}">{x.purpose2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="purpose"
                            rules={{ required: 'Please select purpose' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="purpose"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
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
                            <IonButton fill="clear" routerLink={Routes.inward}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Outward</b></h3>
                                <h3><b>Happy Homes</b></h3>
                            </div>
                        </div>

                        <h2 className="category-name">Door Frames</h2>

                        <FormProvider {...methods}>
                          <form className="material-add-form" onSubmit={handleSubmit(onSubmit)}>
                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Material</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">
                                        {renderMaterialList()}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Brand</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">
                                        {renderBrandList()}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Purpose</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">
                                        {renderPurposeList()}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Quantity</IonLabel>
                                    </IonCol>
                                    <IonCol size="9">
                                        <IonRow>
                                        <IonCol size="4" className="ion-no-padding">
                                            <Controller
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                <IonInput 
                                                    type="number"
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.quatity ? 'is-invalid' : ''}`}
                                                    placeholder="" 
                                                    mode="md" 
                                                    />
                                                )}
                                                control={control}
                                                name="quatity"
                                                rules={{
                                                    required: "Please select quatity"    
                                                }}
                                            />
                                        </IonCol>
                                        <IonCol size="4" className="ion-no-padding ion-padding-start">
                                            <p>Pcs</p>
                                        </IonCol>
                                        <IonCol size="12" className="ion-no-padding">
                                            <ErrorMessage
                                                errors={errors}
                                                name="quatity"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </IonCol>
                                        
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Note</IonLabel>
                                    </IonCol>
                                    <IonCol size="9">
                                        <IonRow>
                                        <IonCol size="12" className="ion-no-padding">
                                            <Controller
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                <IonTextarea  
                                                    onIonChange={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    className={`form-control ${errors.Notes ? 'is-invalid' : ''}`}
                                                    placeholder="" 
                                                    />
                                                )}
                                                control={control}
                                                name="Notes"
                                                rules={{
                                                    required: "Please add note"    
                                                }}
                                            />
                                        </IonCol>
                                        <IonCol size="12" className="ion-no-padding">
                                            <ErrorMessage
                                                errors={errors}
                                                name="quatity"
                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                            />
                                        </IonCol>
                                        
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="12" className="ion-text-end">
                                        <IonButton className="" type="submit" fill="solid" >
                                            Issue
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
  
  export default OutwardEntry;