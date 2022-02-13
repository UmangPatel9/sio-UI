import { 
    IonContent, 
    IonPage, 
    IonIcon, 
    IonInput, 
    IonButton,
    IonLabel, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg 
} from '@ionic/react';
import { useHistory } from "react-router-dom";

import { personCircleSharp, keySharp } from "ionicons/icons";
import { FormProvider, useForm, FieldErrors } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const Home: React.FC = () => {
  
    let history = useHistory();
    const methods = useForm({ mode: "onSubmit"});
    const { register, handleSubmit, formState: { errors } } = methods;
  
    const onSubmit = (data: any) => { 
      console.log(data.email);
      console.log(data.password1);
      if (data.email == "tenant@gmail.com" && data.password1 == "12345") {
        history.push(Routes.selectWorkspace);
      }
      else {
        history.push(Routes.selectWorkspace);
      }
    };
  
    const doNothing = () => {
  
    }
  
    type ErrorSummaryProps<T> = {
      errors: FieldErrors<T>;
    };
    function ErrorSummary<T>({ errors }: ErrorSummaryProps<T>) {
      if (Object.keys(errors).length === 0) {
        return null;
      }
      return (
        <div className="error-summary">
          {Object.keys(errors).map((fieldName) => (
            <ErrorMessage errors={errors} name={fieldName as any} as="div" key={fieldName} />
          ))}
        </div>
      );
    }
    
    type ErrorMessageContainerProps = {
      children?: React.ReactNode;
    };
    const ErrorMessageContainer = ({ children }: ErrorMessageContainerProps) => (
      <span className="error">{children}</span>
    );
  
    return (
      <IonPage>
  
        {/* <Header class="without-back-arrow" onBack={doNothing} /> */}
  
        <IonContent fullscreen>
          <IonGrid className="full-height-div">
            <IonRow className="login-form-row">
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <div className="login-header">
                  <IonImg src="/assets/images/login-icon.png" alt="Login Icon" />
                  <h1>Sign in to SIO</h1>
                </div>
                <FormProvider {...methods}>
                  <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <IonGrid>
                      <IonRow>
  
                          {/* <IonCol size="12">
                            <ErrorSummary errors={errors} />
                          </IonCol> */}
  
                          <IonCol size="12" className="email-field">
                            {/* <IonInput placeholder="Email"/> */}
                            <IonLabel className="form-lable" >Mobile No. or Email address:</IonLabel>
                            <div className="input-with-icon">                              
                              <IonIcon icon={personCircleSharp} />
                              <IonInput
                                mode="md"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder=""
                                // {...register('email', {
                                //   required: 'Email is a required',
                                //   pattern: {
                                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                //   message: 'Invalid email address'
                                //   }
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
                            {/* <IonInput type="password" placeholder="Password" /> */}
                            <IonLabel className="form-lable" >Password:</IonLabel>
                            <div className="input-with-icon">                              
                              <IonIcon icon={keySharp} />
                              <IonInput 
                                mode="md"
                                type="password"
                                className={`form-control ${errors.password1 ? 'is-invalid' : ''}`} 
                                placeholder=""
                                // {...register('password1', {
                                //   required: 'Password is required'
                                // })}
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              name="password1"
                              as={<div className="error-message" style={{ color: 'red' }} />}
                            />
                          </IonCol>
  
                          <IonCol size="6" className="login-btn">
                            <IonButton type="submit" fill="solid" >
                              Login
                            </IonButton>
                          </IonCol>
  
                          <IonCol size="6" className="forget-password ion-text-right">
                              <IonButton routerLink={Routes.forgetPassword} fill="clear">
                                Forget password?
                              </IonButton>   
                          </IonCol>
                                                   
                          <IonCol size="12" className="create-account-btn">
                            <IonLabel className="form-lable" >New to SIO?</IonLabel>
                            <IonButton href="#" expand="block" fill="solid" >
                              Create an Account
                            </IonButton>
                          </IonCol>
  
                      </IonRow>
                    </IonGrid>
                  </form>
                </FormProvider>
              </IonCol>
  
            </IonRow>
          </IonGrid>
  
        </IonContent>
  
        
  
      </IonPage>
    );
  };
  
  export default Home;
  