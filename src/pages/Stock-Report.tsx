import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { 
    IonContent, 
    IonPage, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonSlides,
    IonSlide
  } from '@ionic/react';

  import Header from "../components/Header";
  import StockInwardReport from "../components/StockInwardReport";
  import StockOutwardReport from "../components/StockOutwardReport";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const StockReport: React.FC = () => {

    let history = useHistory();

    const pageBack = () => {
        history.goBack();
    };

    const doNothing = () => {

    }

    const slider = useRef<any>(null);
    // a state value to bind segment value
    const [value, setValue] = useState("0");
    // useEffect(() => {
    //     slider.current.lockSwipes(true);
    // });

    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      loop: false,
      pagination: {
        el: null
      },
    
    };

    // a function to handle the segment changes
    const handleSegmentChange = async (e: any) => {
        await slider.current.lockSwipes(false);
        setValue(e.detail.value);
        slider.current!.slideTo(e.detail.value);
        await slider.current.lockSwipes(true);
    };

    // a function to handle the slider changes
    const handleSlideChange = async (event: any) => {
      let index: number = 0;
      await event.target.getActiveIndex().then((value: any) => (index=value));
      setValue(''+index)
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

                        <h2 className="ion-no-margin">OPC /</h2>
                        <h4 className="ion-no-margin">Cement</h4>

                        <IonRow className="ion-align-items-center stock-report-title">
                            <IonCol size="12" sizeMd="6" sizeLg="6">
                                <div className="current-stock">
                                    <h3><b>250</b></h3>
                                    <p>bags</p>
                                </div>
                            </IonCol>

                            <IonCol size="12" sizeMd="6" sizeLg="6">
                                <div className="stock-buttons buttons-wrap">
                                    <IonButton fill="clear" routerLink={Routes.stockUsedReport}>
                                        <IonIcon icon="/assets/images/pie-chart-icon.svg" ></IonIcon>
                                    </IonButton>
                                    <IonButton fill="clear" className="export-button">
                                        <IonIcon icon="/assets/images/export-icon.svg" ></IonIcon>
                                    </IonButton>
                                </div>
                            </IonCol>
  
                        </IonRow>

                        <div className="stock-report-tabs">
                                <IonSegment scrollable  mode="md" value={value} onIonChange={(e) => handleSegmentChange(e)} >
                                    <IonSegmentButton value="0">
                                        Inward 1000
                                    </IonSegmentButton>
                                    <IonSegmentButton value="1">
                                        Outward 750
                                    </IonSegmentButton>
                                </IonSegment>

                                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                                    <IonSlide>
                                        <StockInwardReport />
                                    </IonSlide>
                                    {/*-- Package Segment --*/}
                                    <IonSlide>
                                        <StockOutwardReport />
                                    </IonSlide>
                                </IonSlides>
                            </div>

                        


                    </IonCol>
  
                </IonRow>
                </IonGrid>


          </IonContent>
  
      </IonPage>
    );
  };
  
  export default StockReport;