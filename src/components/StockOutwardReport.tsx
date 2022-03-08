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

const StockOutwardReport: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    const outwardReportItems = [
        { date: "Feb 2", year:"2021", time:"09:10 am", author: "by Kishan", item: "Ultra Tech", address: "Wing A - 101", subCategory: "Concreting Slab", quantity: "400", categoryURL:"/outward-entry" },
        { date: "Feb 15", year:"2021", time:"12:12 pm", author: "by Kishan", item: "ACC", address: "Wing A - 101", subCategory: "Concreting Coulomb", quantity: "200", categoryURL:"/outward-entry" },
        { date: "Feb 20", year:"2021", time:"12:12 pm", author: "by Ajit", item: "ACC", address: "Wing A - 102", subCategory: "Concreting Coulomb", quantity: "200", categoryURL:"/outward-entry" },
    ];

    const [outwardReportList, setoutwardReportList] = useState(outwardReportItems);
    const [removeItem, setRemoveItem] = useState(false);

    // handle click event of the Remove button
    const handleRemoveClick = (index:any) => {
        const list = [...outwardReportList];
        list.splice(index, 1);
        setoutwardReportList(list);
    };

    const renderCategoryList = () => {
        return outwardReportList.map((x, i) => {
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
                        <p className="">{x.address}</p>
                        <p className="">{x.subCategory}</p>
                        
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

export default StockOutwardReport;