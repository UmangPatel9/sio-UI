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

const ResetPassword: React.FC = () => {

   const methods = useForm();
   const { register, trigger, handleSubmit, getValues, formState: { errors } } = methods;

   const onSubmit = (data: any) => {
      console.log(data);
   };

   const doNothing = () => {

   }

   return (
      <IonPage>

         {/* <Header class="with-back-arrow"  onBack={doNothing}/> */}

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

                           <h2 className='ion-text-center'>Create new password</h2>
                           <p>Your new password must be different from previous used password.</p>

                           {/* <IonGrid> */}
                              <IonRow>
                                 <IonCol size="12" className="ion-margin-top">
                                    <IonLabel className="form-lable">Enter new password:</IonLabel>
                                    {/* <IonInput type="password" placeholder="Password" /> */}
                                    <IonInput
                                       mode="md" 
                                       type="password" 
                                       // {...register('password1', {
                                       //    required: 'Password is Required'
                                       // })}
                                    />
                                    <ErrorMessage
                                       errors={errors}
                                       name="password1"
                                       as={<div className="error-message" style={{ color: 'red' }} />}
                                    />
                                 </IonCol>

                                 <IonCol size="12" className="ion-margin-top">
                                    <IonLabel className="form-lable">Confirm new password:</IonLabel>
                                    {/* <IonInput type="password" placeholder="Password" /> */}
                                    <IonInput 
                                       mode="md"
                                       type="password" 
                                       // {...register('password2', {
                                       //    // required: true,
                                       //    validate: {
                                       //       noMatch: (value: string) => {
                                       //          return value !== getValues("password1")
                                       //             ? "Passwords do not match"
                                       //             : undefined;
                                       //       },
                                       //    },
                                       // })}
                                    />
                                    <ErrorMessage
                                       errors={errors}
                                       name="password2"
                                       as={<div className="error-message" style={{ color: 'red' }} />}
                                    />
                                 </IonCol>

                                 <IonCol size="12" className="ion-margin-top">
                                    <IonButton className="secondary-button" type="submit" expand="block" fill="solid" >
                                       Reset Password
                                    </IonButton>
                                 </IonCol>
                              </IonRow>
                           {/* </IonGrid> */}

                        </form>
                     </FormProvider>
                  </IonCol>

               </IonRow>
            </IonGrid>
        </IonContent>

    </IonPage>
  );
};

export default ResetPassword;