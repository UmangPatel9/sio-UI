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
  
  
  const OutwardSubCategory: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };
  
    const onSubmit = (data: any) => {
    console.log(data);
    };

    const doNothing = () => {

    }

    const categoryListArray = [
        { categoryName: "Door Frames", categoryURL:"/outward-entry" },
        { categoryName: "Door", categoryURL:"/outward-entry" },
        { categoryName: "Door Locks", categoryURL:"/outward-entry" },
        { categoryName: "Door Handles", categoryURL:"/outward-entry" },
        { categoryName: "Bolts", categoryURL:"/outward-entry" },
    ];

    const [categoryList, setCategoryList] = useState(categoryListArray);

    const renderCategoryList = () => {
        return categoryList.map((x, i) => {
            return (
                <IonItem key={i} className="category-button" routerLink={x.categoryURL}>
                    <IonLabel>
                        {x.categoryName}
                    </IonLabel>
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
                            <IonButton fill="clear" routerLink={Routes.outward}>
                                <IonIcon icon="/assets/images/arrow-left-icon.svg" ></IonIcon>
                            </IonButton>
                            <div className="project-title-wrap">
                                <h3><b>Outward</b></h3>
                                <h3><b>Happy Homes</b></h3>
                            </div>
                        </div>

                        <h2 className="category-name">Doors and Accessories</h2>

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
  
  export default OutwardSubCategory;