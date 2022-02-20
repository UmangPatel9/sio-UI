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
import { FormProvider, useForm, FieldErrors, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';
import { Routes } from '../App';

const Home: React.FC = () => {
  
    let history = useHistory();

    const methods = useForm({ mode: "onSubmit"});
    const { register, handleSubmit, control, formState: { errors } } = methods;
    // const { handleSubmit, control, errors } = useForm();
    
  
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
                            <IonLabel className="form-lable" >Mobile No. or Email address:</IonLabel>
                            <div className="input-with-icon">                              
                              <IonIcon icon={personCircleSharp} />
                              <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="email"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="username"
                                rules={{
                                  required: "This is a required field",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                  }
                                }}
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              name="username"
                              as={<div className="error-message" style={{ color: 'red' }} />}
                            />
                          </IonCol>
  
                          <IonCol size="12" className="password-field">
                            <IonLabel className="form-lable" >Password:</IonLabel>
                            <div className="input-with-icon">                              
                              <IonIcon icon={keySharp} />
                              <Controller
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <IonInput 
                                      type="password"
                                      onIonChange={onChange}
                                      onBlur={onBlur}
                                      value={value}
                                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                      placeholder="" 
                                    />
                                )}
                                control={control}
                                name="password"
                                rules={{
                                  required: "Password is required"  
                                }}
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              name="password"
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
                            <IonButton routerLink={Routes.registration} expand="block" fill="solid" >
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
  