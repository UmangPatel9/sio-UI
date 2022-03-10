import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { 
    IonContent, 
    IonPage, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonIcon,
  } from '@ionic/react';

  import Header from "../components/Header";
  
  // import Header from '../components/Header';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '../assets/css/Custom.css';
  import '../assets/css/Responsive.css';
  import { Routes } from '../App';
  
  
  const StockUsedReport: React.FC = () => {

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

    // const data = {
    //     labels: ['Concreting Slab', 'Concreting Coulomb'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [450, 350],
    //         backgroundColor: [
    //             '#7CB5EC',
    //             '#434348',
    //         ],
    //         borderColor: [
    //             '#ffffff',
    //             '#ffffff',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   };

    const myData = [
        { name: "Concreting Slab", value: 450, color: '#7CB5EC' },
        { name: "Concreting Coulomb", value: 350, color: '#434348' },
      ];
  
    return (
        <IonPage>
  
           <Header class="with-back-arrow"  onBack={doNothing}/>
  
           <IonContent fullscreen>
                <IonGrid className="full-height-div">
                <IonRow className="main-row">
                    <IonCol size="12" sizeMd="6" sizeLg="4">

                        <div className="select-project-header">
                            <IonButton fill="clear" routerLink={Routes.stockReport}>
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
                                    <h3><b>750</b></h3>
                                    <p>bags used</p>
                                </div>
                            </IonCol>
                        </IonRow>

                        <div className="chart">
                            {/* <Pie data={data} /> */}
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={true}
                                        data={myData}
                                        outerRadius={150}
                                        fill="#ccc"
                                        label
                                    />

                                    {/* Display the tooltips */}
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36}/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <IonGrid className="table">

                            <IonRow className="table-row table-header">
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="">
                                    <h6 className="ion-no-margin">PARTICULAR</h6>
                                </IonCol>
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="ion-text-end">
                                    <h6 className="ion-no-margin">USED</h6>
                                </IonCol>
                            </IonRow>

                            <IonRow className="table-row table-header">
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="">
                                    <p className="">Concreting Slab</p>
                                </IonCol>
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="ion-text-end">
                                    <p><b>400</b></p>
                                </IonCol>
                            </IonRow>

                            <IonRow className="table-row table-header">
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="">
                                    <p className="">Concreting Coulomb</p>
                                </IonCol>
                                <IonCol size="6" sizeMd="6"  sizeLg="6" className="ion-text-end">
                                    <p><b>350</b></p>
                                </IonCol>
                            </IonRow>

                        </IonGrid>

                        


                    </IonCol>
  
                </IonRow>
                </IonGrid>


          </IonContent>
  
      </IonPage>
    );
  };
  
  export default StockUsedReport;