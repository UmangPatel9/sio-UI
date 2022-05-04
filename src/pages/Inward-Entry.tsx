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
    IonTextarea,
    IonAlert 
  } from '@ionic/react';
  
  import { addCircleSharp, removeCircleSharp, close } from 'ionicons/icons';

  import { FormProvider, useForm, Controller } from "react-hook-form";
  import { ErrorMessage } from '@hookform/error-message';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const InwardEntry: React.FC = () => {

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

    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(0);
    const [brandCounter, setBrandCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        // console.log(counter);
    };

    const handleBrandClick = () => {
        setBrandCounter(brandCounter + 1);
        // console.log(brandCounter);
    };

    const handleRemoveMaterial = (index:any) => {
        setCounter(counter - 1);
    };

    const handleRemoveBrand = (index:any) => {
        setBrandCounter(brandCounter - 1);
    };

    const materialListArray = [
        { type: "text", value:"" },
    ];

    const brandListArray = [
        { brand1: "ABC", brand2:"XYZ" },
    ];

    const lengthListArray = [
        { length1: "600", length2:"700" },
    ];

    const heightListArray = [
        { height1: "200", height2:"300" },
    ];

    const widthListArray = [
        { width1: "100", width2:"200" },
    ];

    const [lengthList, setLengthlList] = useState(lengthListArray);
    const [heightList, setHeightList] = useState(heightListArray);
    const [widthList, setwidthList] = useState(widthListArray);

    const [materialList, setMaterialList] = useState(materialListArray);
    const [brandList, setBrandList] = useState(brandListArray);

    // handle click event of the Add button
    const handleAddMaterial = () => {
        setMaterialList([...materialList, { type:"text", value:"" }]);
    };

    const handleAddBrand = () => {
        setBrandList([...brandList, { brand1: "ABC", brand2:"XYZ" }]);
    };

    const renderMaterialList = () => {
        return materialList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="10" className="ion-no-padding">
                        <Controller
                            render={({ field: { onChange, onBlur, value } }) => (
                                <IonInput 
                                    type={"text"}
                                    onIonChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    className={`form-control ${errors.newMaterial ? 'is-invalid' : ''}`}
                                    placeholder="Add text" 
                                    mode="md" 
                                />
                            )}
                            control={control}
                            name="newMaterial"
                            rules={{ required: 'Please enter material name' }}
                        />
                    </IonCol>
                    <IonCol size="2">
                        <IonButton fill="clear" onClick={handleRemoveMaterial}><IonIcon icon={removeCircleSharp} /></IonButton>
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <IonButton className="small-button" fill="solid" >
                            Add
                        </IonButton>
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
                    <IonCol size="10" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Select One"
                                value={field.value}
                                className={`form-control ${errors.brand ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('brand', e.detail.value)}
                            >
                                <IonSelectOption value="{x.brand1}">{x.brand1}</IonSelectOption>
                                <IonSelectOption value="{x.brand2}">{x.brand2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="brand"
                            rules={{ required: 'Please select brand' }}
                        />
                    </IonCol>
                    <IonCol size="2">
                        <IonButton fill="clear" onClick={handleAddBrand}><IonIcon icon={addCircleSharp} /></IonButton>
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="brand"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const rendeLengthList = () => {
        return lengthList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Length"
                                value={field.value}
                                className={`form-control ${errors.length ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('length', e.detail.value)}
                            >
                                <IonSelectOption value="{x.length1}">{x.length1}</IonSelectOption>
                                <IonSelectOption value="{x.materail2}">{x.length2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="length"
                            rules={{ required: 'Please select length' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="length"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const renderHeightList = () => {
        return heightList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Height"
                                value={field.value}
                                className={`form-control ${errors.height ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('height', e.detail.value)}
                            >
                                <IonSelectOption value={x.height1}>{x.height1}</IonSelectOption>
                                <IonSelectOption value={x.height2}>{x.height2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="height"
                            rules={{ required: 'Please select height' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="height"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const renderWidthList = () => {
        return widthList.map((x, i) => {
            return (
                
                <IonRow key={i} className="material-select-row ion-align-items-center">
                    <IonCol size="12" className="ion-no-padding">
                        <Controller
                            render={({ field }) => (
                            <IonSelect
                                placeholder="Width"
                                value={field.value}
                                className={`form-control ${errors.width ? 'is-invalid' : ''}`}
                                onIonChange={(e) => setValue('width', e.detail.value)}
                            >
                                <IonSelectOption value="{x.width1}">{x.width1}</IonSelectOption>
                                <IonSelectOption value="{x.width2}">{x.width2}</IonSelectOption>
                            </IonSelect>
                            )}
                            control={control}
                            name="width"
                            rules={{ required: 'Please select width' }}
                        />
                    </IonCol>
                    <IonCol size="12" className="ion-no-padding">
                        <ErrorMessage
                            errors={errors}
                            name="width"
                            as={<div className="error-message" style={{ color: 'red' }} />}
                        />
                    </IonCol>
                </IonRow>
                
            );
        })
    }

    const defaultList = [
        { id: "", fileName: "" }
    ];

    const fileInput = useRef(null);
    const [removeFile, setRemoveFile] = useState(false);
    const [fileList, setFileList] = useState(defaultList);

    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...fileList];
        list.splice(index, 1);
        setFileList(list);
    };

    const loadImageFromDevice = (event:any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // get the blob of the image:
            let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
            // create blobURL, such that we could use it in an image element:
            let blobURL: string = URL.createObjectURL(blob);
            let filename: string = file.name;
            console.log(filename);
            setFileList([...fileList, { id: "", fileName: filename}]);
        };

        reader.onerror = (error) => {
            //handle errors
        };
    };

    const renderList = () => {
        return fileList.map((x, i) => {
            return (
                <div key={i} className="uploaded-file">
                    <p className="uploaded-file-name read-only">{x.fileName}</p>
                    <IonButton fill="clear" onClick={() => setRemoveFile(true)}>
                        <IonIcon icon={close} />
                    </IonButton>
                    <IonAlert
                        isOpen={removeFile}
                        onDidDismiss={() => setRemoveFile(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove File'}
                        message={'<p>Are you sure you want to remove this file?</p>'}
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

    const fileInput1 = useRef(null);
    const [removeFile1, setRemoveFile1] = useState(false);
    const [fileList1, setFileList1] = useState(defaultList);

    // handle click event of the Remove button
    const handleRemoveClick1 = (index:any) => {
        const list = [...fileList1];
        list.splice(index, 1);
        setFileList1(list);
    };

    const loadImageFromDevice1 = (event:any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // get the blob of the image:
            let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
            // create blobURL, such that we could use it in an image element:
            let blobURL: string = URL.createObjectURL(blob);
            let filename: string = file.name;
            console.log(filename);
            setFileList1([...fileList1, { id: "", fileName: filename}]);
        };

        reader.onerror = (error) => {
            //handle errors
        };
    };

    const renderList1 = () => {
        return fileList1.map((x, i) => {
            return (
                <div key={i} className="uploaded-file">
                    <p className="uploaded-file-name read-only">{x.fileName}</p>
                    <IonButton fill="clear" onClick={() => setRemoveFile1(true)}>
                        <IonIcon icon={close} />
                    </IonButton>
                    <IonAlert
                        isOpen={removeFile1}
                        onDidDismiss={() => setRemoveFile1(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove File'}
                        message={'<p>Are you sure you want to remove this file?</p>'}
                        buttons={[
                            {
                                text: 'Yes',
                                cssClass: 'btn-secondary',
                                handler: () => {
                                    handleRemoveClick1(i);
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
                <IonRow className="main-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">

                        <div className="select-project-header">
                            <IonButton fill="clear" routerLink={Routes.inward}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Inward</b></h3>
                                <h3><b>Happy Homes</b></h3>
                            </div>
                        </div>

                        <h2 className="category-name">CPVC Pipes Fittings</h2>

                        <FormProvider {...methods}>
                            <form className="material-add-form" onSubmit={handleSubmit(onSubmit)}>

                                <IonRow className="size-select-row">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Size</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">
                                        <IonRow className="material-select-row  ion-align-items-center">
                                            <IonCol size="4" className="ion-no-padding">
                                                <IonLabel className="form-lable small-form-lable ion-text-center">Length</IonLabel>
                                                {rendeLengthList()}
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel className="form-lable small-form-lable ion-text-center">Height</IonLabel>
                                                {renderHeightList()}
                                            </IonCol>
                                            <IonCol size="4" className="ion-no-padding">
                                                <IonLabel className="form-lable small-form-lable ion-text-center">Width</IonLabel>
                                                {renderWidthList()}
                                            </IonCol>
                                        </IonRow>
                                        {/* {renderMaterialList()} */}
                                        {/* <button onClick={handleClick}>Hello</button> */}

                                        {Array.from(Array(counter)).map((c, index) => {
                                            return (
                
                                                <IonRow key={c} className="material-select-row ion-align-items-center">
                                                    <IonCol size="10" className="ion-no-padding">
                                                        <Controller
                                                            render={({ field: { onChange, onBlur, value } }) => (
                                                                <IonInput 
                                                                    type={"text"}
                                                                    onIonChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}
                                                                    className={`form-control ${errors.newMaterial ? 'is-invalid' : ''}`}
                                                                    placeholder="Add text" 
                                                                    mode="md" 
                                                                />
                                                            )}
                                                            control={control}
                                                            name="newMaterial"
                                                            rules={{ required: 'Please enter material name' }}
                                                        />
                                                    </IonCol>
                                                    <IonCol size="2">
                                                        <IonButton fill="clear" onClick={handleRemoveMaterial}><IonIcon icon={removeCircleSharp} /></IonButton>
                                                    </IonCol>
                                                    <IonCol size="12" className="ion-no-padding">
                                                        <IonButton className="small-button" fill="solid" >
                                                            Add
                                                        </IonButton>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="newMaterial"
                                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                                        />
                                                    </IonCol>
                                                </IonRow>
                                                
                                            );
                                            // <input key={c} type="text"></input>;
                                        })}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Material</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">
                                    <IonRow className="material-select-row ion-align-items-center">
                                            <IonCol size="10" className="ion-no-padding">
                                                <Controller
                                                    render={({ field }) => (
                                                    <IonSelect
                                                        placeholder="Select One"
                                                        value={field.value}
                                                        className={`form-control ${errors.material ? 'is-invalid' : ''}`}
                                                        onIonChange={(e) => setValue('material', e.detail.value)}
                                                    >
                                                        <IonSelectOption value="Elbow 45">Elbow 45</IonSelectOption>
                                                        <IonSelectOption value="Elbow 46">Elbow 46</IonSelectOption>
                                                    </IonSelect>
                                                    )}
                                                    control={control}
                                                    name="material"
                                                    rules={{ required: 'Please select material' }}
                                                />
                                            </IonCol>
                                            <IonCol size="2">
                                                <IonButton fill="clear" onClick={handleClick}><IonIcon icon={addCircleSharp} /></IonButton>
                                            </IonCol>
                                            <IonCol size="12" className="ion-no-padding">
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="material"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>
                                        </IonRow>
                                        {/* {renderMaterialList()} */}
                                        {/* <button onClick={handleClick}>Hello</button> */}

                                        {Array.from(Array(counter)).map((c, index) => {
                                            return (
                
                                                <IonRow key={c} className="material-select-row ion-align-items-center">
                                                    <IonCol size="10" className="ion-no-padding">
                                                        <Controller
                                                            render={({ field: { onChange, onBlur, value } }) => (
                                                                <IonInput 
                                                                    type={"text"}
                                                                    onIonChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}
                                                                    className={`form-control ${errors.newMaterial ? 'is-invalid' : ''}`}
                                                                    placeholder="Add text" 
                                                                    mode="md" 
                                                                />
                                                            )}
                                                            control={control}
                                                            name="newMaterial"
                                                            rules={{ required: 'Please enter material name' }}
                                                        />
                                                    </IonCol>
                                                    <IonCol size="2">
                                                        <IonButton fill="clear" onClick={handleRemoveMaterial}><IonIcon icon={removeCircleSharp} /></IonButton>
                                                    </IonCol>
                                                    <IonCol size="12" className="ion-no-padding">
                                                        <IonButton className="small-button" fill="solid" >
                                                            Add
                                                        </IonButton>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="newMaterial"
                                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                                        />
                                                    </IonCol>
                                                </IonRow>
                                                
                                            );
                                            // <input key={c} type="text"></input>;
                                        })}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="3">
                                        <IonLabel className="form-lable material-lable">Brand</IonLabel>
                                    </IonCol>
                                    <IonCol  size="9">

                                        <IonRow className="material-select-row ion-align-items-center">
                                            <IonCol size="10" className="ion-no-padding">
                                                <Controller
                                                    render={({ field }) => (
                                                    <IonSelect
                                                        placeholder="Select One"
                                                        value={field.value}
                                                        className={`form-control ${errors.brand ? 'is-invalid' : ''}`}
                                                        onIonChange={(e) => setValue('brand', e.detail.value)}
                                                    >
                                                        <IonSelectOption value="ABC">ABC</IonSelectOption>
                                                        <IonSelectOption value="XYZ">XYZ</IonSelectOption>
                                                    </IonSelect>
                                                    )}
                                                    control={control}
                                                    name="brand"
                                                    rules={{ required: 'Please select brand' }}
                                                />
                                            </IonCol>
                                            <IonCol size="2">
                                                <IonButton fill="clear" onClick={handleBrandClick}><IonIcon icon={addCircleSharp} /></IonButton>
                                            </IonCol>
                                            <IonCol size="12" className="ion-no-padding">
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="brand"
                                                    as={<div className="error-message" style={{ color: 'red' }} />}
                                                />
                                            </IonCol>
                                        </IonRow>
                                        
                                        {/* {renderBrandList()} */}
                                        {Array.from(Array(brandCounter)).map((c, index) => {
                                            return (
                
                                                <IonRow key={c} className="material-select-row ion-align-items-center">
                                                    <IonCol size="10" className="ion-no-padding">
                                                        <Controller
                                                            render={({ field: { onChange, onBlur, value } }) => (
                                                                <IonInput 
                                                                    type={"text"}
                                                                    onIonChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}
                                                                    className={`form-control ${errors.newMaterial ? 'is-invalid' : ''}`}
                                                                    placeholder="Add text" 
                                                                    mode="md" 
                                                                />
                                                            )}
                                                            control={control}
                                                            name="newBrand"
                                                            rules={{ required: 'Please enter material name' }}
                                                        />
                                                    </IonCol>
                                                    <IonCol size="2">
                                                        <IonButton fill="clear" onClick={handleRemoveBrand}><IonIcon icon={removeCircleSharp} /></IonButton>
                                                    </IonCol>
                                                    <IonCol size="12" className="ion-no-padding">
                                                        <IonButton className="small-button" fill="solid" >
                                                            Add
                                                        </IonButton>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="newBrand"
                                                            as={<div className="error-message" style={{ color: 'red' }} />}
                                                        />
                                                    </IonCol>
                                                </IonRow>
                                                
                                            );
                                            // <input key={c} type="text"></input>;
                                        })}
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
                                        <IonLabel className="form-lable two-line-label material-lable">Number of Blocks:</IonLabel>
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
                                                    className={`form-control ${errors.blocks ? 'is-invalid' : ''}`}
                                                    placeholder="" 
                                                    mode="md" 
                                                    />
                                                )}
                                                control={control}
                                                name="blocks"
                                                rules={{
                                                    required: "Please add number of blocks"    
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
                                    <IonCol size="6">
                                        <input
                                            ref={fileInput}
                                            hidden
                                            type="file"
                                            accept="image/png, image/jpg, image/jpeg"
                                            name="postFile"
                                            onChange={loadImageFromDevice}
                                            onClick={() => {
                                                console.log('onClick');
                                            }}
                                        />
                                        <IonButton 
                                            className="upload-photo-btn yellow-button" 
                                            fill="solid" 
                                            shape="round" 
                                            onClick={() => {
                                                // @ts-ignore
                                                fileInput?.current?.click();
                                            }}
                                        >
                                            Capture Image-1
                                        </IonButton>
                                        {renderList()}
                                    </IonCol>
                                    <IonCol size="6">
                                        <input
                                            ref={fileInput1}
                                            hidden
                                            type="file"
                                            accept="image/png, image/jpg, image/jpeg"
                                            name="postFile"
                                            onChange={loadImageFromDevice1}
                                            onClick={() => {
                                                console.log('onClick');
                                            }}
                                        />
                                        <IonButton 
                                            className="upload-photo-btn yellow-button" 
                                            fill="solid" 
                                            shape="round" 
                                            onClick={() => {
                                                // @ts-ignore
                                                fileInput1?.current?.click();
                                            }}
                                        >
                                            Capture Image-2
                                        </IonButton>
                                        {renderList1()}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="">
                                    <IonCol size="12" className="ion-text-end">
                                        <IonButton className="" type="submit" fill="solid" >
                                            Add
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
  
  export default InwardEntry;