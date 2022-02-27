import React, { useEffect, useRef, useState } from 'react';

import { 
   IonContent, 
   IonPage, 
   IonGrid, 
   IonRow,
   IonCol, 
   IonLabel, 
   IonInput, 
   IonButton, 
   IonSlides, 
   IonSlide,
   IonIcon 
} from '@ionic/react';

import { chevronBack, personCircleSharp, keySharp, phonePortraitSharp, mailSharp } from 'ionicons/icons';

import { useHistory } from "react-router-dom";

import { FormProvider, useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import Header from '../components/Header';
import RegistrationStep1 from '../components/RegistrationStep1';
import RegistrationStep2 from '../components/RegistrationStep2';
import RegistrationStep3 from '../components/RegistrationStep3';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/flex-utils.css';

import '@ionic/react/css/ionic-swiper.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const slideOpts = {
   initialSlide: 0,
   speed: 400
};

function recaptchaLoaded() {
   console.log('Recaptcha loaded successfully');
}

const Registration: React.FC = () => {

   let history = useHistory();

   const pageBack = () => {
      history.goBack();
   };

   const mySlides = useRef<any>(null);
   const contentRef = useRef<HTMLIonContentElement | null>(null);

   const methods = useForm();
   const { register, trigger, handleSubmit, getValues, setValue, control, formState: { errors } } = methods;
   // console.log(errors);

   useEffect(() => {
      mySlides.current.lockSwipes(true);

   });

   const next = async (fields: any) => {
      const result = await trigger(fields);
      if (!result) return;
      await mySlides.current.lockSwipes(false);
      await mySlides.current.slideNext();
      await mySlides.current.lockSwipes(true);
      contentRef.current && contentRef.current.scrollToTop(500);
   };
   const prev = async () => {
      await mySlides.current.lockSwipes(false);
      await mySlides.current.slidePrev();
      await mySlides.current.lockSwipes(true);
      contentRef.current && contentRef.current.scrollToTop(500);
   };
    
   const onSubmit = (data: any) => {
      console.log(data);
      history.push(Routes.createNewWorkspace);
   };

   

   return (
      <IonPage>

         <Header class="with-back-arrow with-step-arrow" onBack={prev} />

         <IonContent ref={contentRef} scrollEvents={true} fullscreen>
            <IonGrid>
               <IonRow className="signup-form login-form-row">
                  <IonCol size="12" sizeMd="6" sizeLg="4">
                  <FormProvider {...methods}>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <IonSlides pager={true} options={slideOpts} ref={mySlides}>
                           <IonSlide>
                                 <RegistrationStep1 next={next} />
                           </IonSlide>

                           <IonSlide>
                                 <RegistrationStep2 next={next} prev={prev} />
                           </IonSlide>

                           <IonSlide>
                                 <RegistrationStep3 prev={prev} />
                           </IonSlide>

                        </IonSlides>
                     </form>
                  </FormProvider>
                  </IonCol>

               </IonRow>
            </IonGrid>
         </IonContent>

      </IonPage>
   );
};

export default Registration;