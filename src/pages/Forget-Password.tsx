import { 
   IonContent, 
   IonPage, 
   IonLabel, 
   IonInput, 
   IonButton, 
   IonGrid, 
   IonRow, 
   IonCol,
   IonImg  
} from '@ionic/react';

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

// import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ForgetPassword: React.FC = () => {

   const methods = useForm();
   const { register, handleSubmit, formState: { errors } } = methods;

   const onSubmit = (data: any) => {
      console.log(data);
   };

   const doNothing = () => {

   }
   
   return (
      <IonPage>

         {/* <Header class="with-back-arrow"  onBack={doNothing} /> */}

         <IonContent fullscreen>
            <IonGrid className="full-height-div">
                <IonRow className="login-form-row">
                     <IonCol size="12" sizeMd="6" sizeLg="4">
                        <FormProvider {...methods}>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="main-logo">
                                 <IonButton routerLink="/" fill="clear">
                                    <IonImg className="logo" src="assets/images/sio-logo.png" />
                                 </IonButton>
                              </div>

                              <h2 className='ion-text-center'>Reset Password</h2>
                              <p>Enter the email assosicated with your account and we'll send you an email with instruction to reset your password.</p>

                              <IonLabel className="form-lable ion-margin-top" >Email Address:</IonLabel>
                              {/* <IonInput className="ion-margin-top" placeholder="Email"/> */}
                              <IonInput
                                 mode="md"
                                 type="email"
                                 // placeholder="Email"
                                 // {...register('email', {
                                 //    required: 'Email is a required',
                                 //    pattern: {
                                 //    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                 //    message: 'Invalid email address'
                                 //    }
                                 // })}
                              />
                              <ErrorMessage
                                 errors={errors}
                                 name="email"
                                 as={<div className="error-message" style={{ color: 'red' }} />}
                              />

                              <IonButton type="submit"  className="secondary-button ion-margin-top" expand="block" shape="round" fill="solid" >
                                 Send
                              </IonButton>

                              <div  className="back-to-login ion-text-right">
                                 {/* <a href="/">Back to Login page</a> */}
                                 <IonButton routerLink="/" fill="clear">
                                    Back to Login page
                                 </IonButton>
                              </div>

                           </form>
                        </FormProvider>
                    </IonCol>

                </IonRow>
            </IonGrid>
         </IonContent>

      </IonPage>
   );
};

export default ForgetPassword;