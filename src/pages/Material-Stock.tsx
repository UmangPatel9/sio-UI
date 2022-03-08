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
    IonList,
    IonItem
  } from '@ionic/react';
  
  import { chevronBack, personAddSharp, removeCircleSharp } from 'ionicons/icons';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const MaterialStock: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };
  
    const onSubmit = (data: any) => {
    console.log(data);
    };

    const doNothing = () => {

    }

    const materialStockListArray = [
        { categoryName: "OPC", currentStock:"250", categoryURL:"/stock-report" },
        { categoryName: "PPC", currentStock:"550", categoryURL:"/stock-report" },
        { categoryName: "Slag", currentStock:"1000", categoryURL:"/stock-report" },
    ];

    const [stockList, setStockList] = useState(materialStockListArray);

    const renderCategoryList = () => {
        return stockList.map((x, i) => {
            return (
                <IonItem key={i} className="category-button" routerLink={x.categoryURL}>
                    <IonLabel>
                        {x.categoryName}
                    </IonLabel>
                    <div className="current-stock">
                        <h5><b>{x.currentStock}</b></h5>
                        <p>bags</p>
                    </div>
                    <IonIcon icon="/assets/images/arrow-right-icon.svg" slot="end" />
                </IonItem>
                
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
                            <IonButton fill="clear" routerLink={Routes.dashboard}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Stock</b></h3>
                                <h3><b>Happy Homes</b></h3>
                            </div>
                        </div>

                        <h2 className="category-name">Cement</h2>

                        <div className="stock-buttons buttons-wrap">
                            <IonButton fill="clear" routerLink={Routes.inwardEntry}>
                                <IonIcon icon="/assets/images/inward-icon.svg" ></IonIcon>
                            </IonButton>
                            <IonButton fill="clear" routerLink={Routes.outwardEntry}>
                                <IonIcon icon="/assets/images/outward-icon.svg" ></IonIcon>
                            </IonButton>
                            <IonButton fill="clear" className="export-button">
                                <IonIcon icon="/assets/images/export-icon.svg" ></IonIcon>
                            </IonButton>
                        </div>

                        <IonList className="category-list">
                            {renderCategoryList()}
                        </IonList>


                    </IonCol>
  
                </IonRow>
                </IonGrid>


          </IonContent>
  
      </IonPage>
    );
  };
  
  export default MaterialStock;