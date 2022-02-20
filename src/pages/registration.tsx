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

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import Header from '../components/Header';

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

   const methods = useForm();
   const { register, trigger, handleSubmit, getValues, setValue, formState: { errors } } = methods;
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
   };
   const prev = async () => {
      await mySlides.current.lockSwipes(false);
      await mySlides.current.slidePrev();
      await mySlides.current.lockSwipes(true);
   };
    
   const onSubmit = (data: any) => {
      console.log(data);
   };

   

   return (
      <IonPage>

         <Header class="with-back-arrow with-step-arrow" onBack={prev} />

         <IonContent fullscreen>
            <IonGrid>
               <IonRow className="signup-form login-form-row">
                  <IonCol size="12" sizeMd="6" sizeLg="4">
                  <FormProvider {...methods}>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <IonSlides pager={true} options={slideOpts} ref={mySlides}>
                           <IonSlide>
                                 <IonGrid>
                                    <div className="back-arrow">
                                       <IonButton className="ion-text-right" fill="clear" routerLink="/">
                                             <IonIcon icon={chevronBack} ></IonIcon>
                                       </IonButton>
                                       <h4>Back to Sign In</h4>
                                    </div>
                                    <h1>Registration with SIO</h1>
                                    <IonRow>
                                       <IonCol size="12" className="email-field">
                                          <IonLabel className="form-lable">First Name*</IonLabel>
                                          <div className="input-with-icon">                              
                                             <IonIcon icon={personCircleSharp} />
                                             <IonInput
                                                mode="md"
                                                type="email"
                                                placeholder="Add text"
                                                // {...register('email', {
                                                //    required: 'Please enter a valid email.',
                                                //    pattern: {
                                                //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                //       message: 'Please enter a valid email.'
                                                //    }
                                                // })}
                                             />
                                          </div>
                                          <ErrorMessage
                                             errors={errors}
                                             name="email"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="password-field">
                                          <IonLabel className="form-lable">Last Name*</IonLabel>
                                          <div className="input-with-icon">                              
                                             <IonIcon icon={personCircleSharp} />
                                             <IonInput 
                                                mode="md"
                                                type="password"
                                                placeholder="Add text" 
                                                // {...register('password1', {
                                                //    required: 'The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long.',
                                                //    pattern: {
                                                //      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
                                                //      message: 'The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long.'
                                                //    }
                                                // })}
                                             />
                                          </div>
                                          <ErrorMessage
                                             errors={errors}
                                             name="password1"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="forget-password">
                                          <IonLabel className="form-lable">Mobile No.*</IonLabel>
                                          <div className="input-with-icon">                              
                                             <IonIcon icon={phonePortraitSharp} />
                                             <IonInput 
                                                mode="md"
                                                type="password"
                                                placeholder="Add text" 
                                                // {...register('password2', {
                                                //    // required: true,
                                                //    validate: {
                                                //       noMatch: (value: string) => {
                                                //          return value !== getValues("password1")
                                                //             ? "The passwords do not match."
                                                //             : undefined;
                                                //       },
                                                //    },
                                                // })}
                                             />
                                          </div>
                                          <ErrorMessage
                                             errors={errors}
                                             name="password2"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="email-field">
                                          <IonLabel className="form-lable">Emial*</IonLabel>
                                          <div className="input-with-icon">                              
                                             <IonIcon icon={mailSharp} />
                                             <IonInput
                                                mode="md"
                                                type="email"
                                                placeholder="Add text"
                                                // {...register('email', {
                                                //    required: 'Please enter a valid email.',
                                                //    pattern: {
                                                //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                //       message: 'Please enter a valid email.'
                                                //    }
                                                // })}
                                             />
                                          </div>
                                          <ErrorMessage
                                             errors={errors}
                                             name="email"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="password-field">
                                          <IonLabel className="form-lable">Password*</IonLabel>
                                          <div className="input-with-icon">                              
                                             <IonIcon icon={keySharp} />
                                             <IonInput 
                                                mode="md"
                                                type="password"
                                                placeholder="Add text" 
                                                // {...register('password1', {
                                                //    required: 'The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long.',
                                                //    pattern: {
                                                //      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
                                                //      message: 'The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long.'
                                                //    }
                                                // })}
                                             />
                                          </div>
                                          <ErrorMessage
                                             errors={errors}
                                             name="password1"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="8" className="sign-up-btn ion-align-self-center ion-margin-auto">
                                          <IonButton expand="block" shape="round" fill="outline" onClick={() => next(['email','password1', 'password2'])}>
                                             Continue
                                          </IonButton>
                                       </IonCol>

                                       <IonCol size="12" className="form-footer-note">
                                          <p>by continuing, <br/>
                                          you are agreeing to our <IonButton className="ion-text-right" fill="clear" routerLink="/">Privacy & Terms</IonButton></p>
                                       </IonCol>

                                    </IonRow>
                                 </IonGrid>
                           </IonSlide>

                           <IonSlide>
                                 <IonGrid>
                                    <IonRow>

                                       <IonCol size="12" className="email-field">
                                          <IonLabel className="form-lable">First Name*</IonLabel>
                                          <IonInput
                                             mode="md"
                                             type="text"   
                                             // {...register('firstName', {
                                             //    required: 'This info is mandatory. Please fill it.'
                                             // })}
                                          />
                                          <ErrorMessage
                                             errors={errors}
                                             name="firstName"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="email-field">
                                          <IonLabel className="form-lable">Last Name*</IonLabel>
                                          <IonInput
                                             mode="md"
                                             type="text" 
                                             // {...register('lastName', {
                                             //    required: 'This info is mandatory. Please fill it.'
                                             // })}
                                          />
                                          <ErrorMessage
                                             errors={errors}
                                             name="lastName"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                       <IonCol size="12" className="email-field">
                                          <div className="label-with-tooltip">
                                             <IonLabel className="form-lable">Telephone:</IonLabel>
                                             <div className="tooltip" title="Add Telephone">!</div>
                                          </div>
                                          <IonInput
                                             mode="md"
                                             type="number" 
                                             // {...register('telephone', {
                                             //    minLength: 6, maxLength: 12,
                                             // })}
                                          />
                                          <ErrorMessage
                                             errors={errors}
                                             name="telephone"
                                             as={<div className="error-message" style={{ color: 'red' }} />}
                                          />
                                       </IonCol>

                                    
                                       {/* <IonCol size="12" className="sign-up-btn">
                                          <IonButton expand="block" shape="round" fill="outline" onClick={() => prev()}>
                                             previous
                                          </IonButton>
                                       </IonCol> */}

                                       <IonCol size="12" className="sign-up-btn">
                                          <IonButton className="secondary-button" type="submit" expand="block" shape="round" fill="outline">
                                             Finalize
                                          </IonButton>
                                       </IonCol>

                                    </IonRow>
                                 </IonGrid>
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