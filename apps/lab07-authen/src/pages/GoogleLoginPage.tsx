import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router';
import { authService } from '../auth/auth-service';

const GoogleLoginPage: React.FC = () => {

  const history = useHistory();

  const login = async () => {
    await authService.loginGoogle();
    history.push('/tabs/tab1');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Google Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonButton expand="block" onClick={login}>
          LOGIN WITH GOOGLE
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default GoogleLoginPage;
