import {
  IonPage, IonHeader, IonToolbar,
  IonTitle, IonContent
} from "@ionic/react";
import { useEffect, useState } from "react";
import { authService } from "../auth/auth-service";

const Tab1: React.FC = () => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    authService.getCurrentUser().then(setUser);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Info</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {user && (
          <>
            <p><b>UID:</b> {user.uid}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phoneNumber}</p>
            <p><b>Name:</b> {user.displayName}</p>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
