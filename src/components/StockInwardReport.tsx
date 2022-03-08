import React, {useState} from "react";

import { useHistory } from "react-router-dom";

import { 
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonAlert,
    createAnimation,
    IonModal,
    IonIcon,
    IonImg
} from '@ionic/react';

import {  close } from "ionicons/icons";

import { Routes } from '../App';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const StockInwardReport: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const enterAnimation = (baseEl: any) => {
        const backdropAnimation = createAnimation()
          .addElement(baseEl.querySelector('ion-backdrop')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    
        const wrapperAnimation = createAnimation()
          .addElement(baseEl.querySelector('.modal-wrapper')!)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
          ]);
    
        return createAnimation()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
    }
    
    const leaveAnimation = (baseEl: any) => {
        return enterAnimation(baseEl).direction('reverse');
    }

    const inwardReportItems = [
        { date: "Jan 8", year:"2021", time:"11:53 am", author: "by Ram", item: "Ultra Tech", photo1: "/assets/images/export-icon.svg", photo2: "/assets/images/export-icon.svg", quantity: "500", categoryURL:"/inward-entry" },
        { date: "Jan 15", year:"2021", time:"06:10 pm", author: "by Ram", item: "ACC", photo1: "", photo2: "", quantity: "500", categoryURL:"/inward-entry" },
    ];

    const [inwardReportList, setInwardReportList] = useState(inwardReportItems);
    const [removeItem, setRemoveItem] = useState(false);

    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...inwardReportList];
        list.splice(index, 1);
        setInwardReportList(list);
    };

    const renderCategoryList = () => {
        return inwardReportList.map((x, i) => {
            return (
                <IonRow key={i} className="table-row table-header">
                    <IonCol size="3" sizeMd="3"  sizeLg="3" className="">
                        <p className=""><b>{x.date}</b></p>
                        <p className="">{x.year}</p>
                        <p className="">{x.time}</p>
                        <p className="person-name">{x.author}</p>
                    </IonCol>
                    <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                    <p className=""></p>
                        <p className="">{x.item}</p>
                        <div className="buttons-wrap photo-buttons">
                            <IonButton fill="clear" className={`clear-button-with-border ${x.photo1 == "" ? 'ion-hide' : ''}`} onClick={() => setShowModal1(true)}>
                                Photo-1
                            </IonButton> 
                            <IonButton fill="clear" className={`clear-button-with-border ${x.photo2 == "" ? 'ion-hide' : ''}`} onClick={() => setShowModal2(true)}>
                                Photo-2
                            </IonButton> 
                        </div>
                    </IonCol>
                    <IonCol size="4" sizeMd="4"  sizeLg="4" className="ion-text-end quantity-col">
                        <p><b>500</b></p>
                        <div className="buttons-wrap">
                            <IonButton fill="clear" className="secondary-button clear-button-with-border" routerLink={Routes.editUser}>
                                Edit
                            </IonButton> 
                            <IonButton fill="clear" className="secondary-button clear-button-with-border" onClick={() => setRemoveItem(true)}>
                                Delete
                            </IonButton> 
                        </div>
                    </IonCol>
                    <IonAlert
                        isOpen={removeItem}
                        onDidDismiss={() => setRemoveItem(false)}
                        cssClass='red-alert'
                        mode='md'
                        header={'Remove Tenant'}
                        message={'<p>Are you sure you want to remove this Item?</p>'}
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

                    <IonModal isOpen={showModal1} className="photo-popup">
                            <IonButton className="close-popup-button" fill="clear" onClick={() => setShowModal1(false)}> 
                                <IonIcon icon={close} />
                            </IonButton>
                            <IonIcon icon={x.photo1}></IonIcon>
                    </IonModal>

                    <IonModal isOpen={showModal2} className="photo-popup">
                            <IonButton className="close-popup-button" fill="clear" onClick={() => setShowModal2(false)}> 
                                <IonIcon icon={close} />
                            </IonButton>
                            <IonImg src={x.photo2} />
                    </IonModal>

                </IonRow>
                
            );
        })
    }

    return (
        <IonGrid className="table report-table">

            <IonRow className="table-row table-header">
                <IonCol size="3" sizeMd="3"  sizeLg="3" className="">
                    <h6 className="ion-no-margin">DATE</h6>
                </IonCol>
                <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                    <h6 className="ion-no-margin">PARTICULAR</h6>
                </IonCol>
                <IonCol size="4" sizeMd="4"  sizeLg="4" className="ion-text-end">
                    <h6 className="ion-no-margin">QUANTITY</h6>
                </IonCol>
            </IonRow>

            {/* <IonRow className="table-row table-header">
                <IonCol size="3" sizeMd="3"  sizeLg="3" className="">
                    <p className=""><b>Jan 8</b></p>
                    <p className="">2021</p>
                    <p className="">11:53 am</p>
                    <p className="person-name">by Ram</p>
                </IonCol>
                <IonCol size="5" sizeMd="5"  sizeLg="5" className="">
                <p className=""></p>
                    <p className="">Ultra Tech</p>
                    <div className="buttons-wrap photo-buttons">
                        <IonButton fill="clear" className="clear-button-with-border">
                            Photo-1
                        </IonButton> 
                        <IonButton fill="clear" className="clear-button-with-border">
                            Photo-2
                        </IonButton> 
                    </div>
                </IonCol>
                <IonCol size="4" sizeMd="4"  sizeLg="4" className="ion-text-end quantity-col">
                    <p><b>500</b></p>
                    <div className="buttons-wrap">
                        <IonButton fill="clear" className="secondary-button clear-button-with-border">
                            Edit
                        </IonButton> 
                        <IonButton fill="clear" className="secondary-button clear-button-with-border">
                            Delete
                        </IonButton> 
                    </div>
                </IonCol>
            </IonRow> */}

            {renderCategoryList()}

            {/* <IonList className="category-list">
                {renderCategoryList()}
            </IonList> */}

        </IonGrid>

                        

                        
        
    );
};

export default StockInwardReport;