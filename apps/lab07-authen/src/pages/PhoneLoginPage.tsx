import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react';
import { useState } from 'react';
import { authService } from '../auth/auth-service';
import { useHistory } from 'react-router';

const PhoneLoginPage: React.FC = () => {

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const history = useHistory();

  const sendOTP = async () => {
    await authService.loginPhone(phone);
  };

  const verifyOTP = async () => {
    await authService.verifyOTP(otp);
    history.push('/tabs/tab1');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Phone Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">Phone Number</IonLabel>
          <IonInput
            value={phone}
            onIonChange={e => setPhone(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={sendOTP}>
          SEND OTP
        </IonButton>

        <div id="recaptcha-container"></div>

        <IonItem>
          <IonLabel position="stacked">OTP</IonLabel>
          <IonInput
            value={otp}
            onIonChange={e => setOtp(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={verifyOTP}>
          VERIFY OTP
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default PhoneLoginPage;
