import {
  IonPage, IonHeader, IonToolbar,
  IonTitle, IonContent, IonButton
} from "@ionic/react";
import { useHistory } from "react-router";

const LoginPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select Login Method</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => history.push("/login-email")}>
          LOGIN EMAIL/PASSWORD
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/login-google")}>
          LOGIN GOOGLE
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/login-phone")}>
          LOGIN PHONE
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
