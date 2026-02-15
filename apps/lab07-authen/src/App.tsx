import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import EmailLoginPage from "./pages/EmailLoginPage";
import GoogleLoginPage from "./pages/GoogleLoginPage";
import PhoneLoginPage from "./pages/PhoneLoginPage";
import Tab1 from "./pages/Tab1";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/login" component={LoginPage} exact />
          <Route path="/login-email" component={EmailLoginPage} exact />
          <Route path="/login-google" component={GoogleLoginPage} exact />
          <Route path="/login-phone" component={PhoneLoginPage} exact />

          <Route path="/tabs/tab1" component={Tab1} exact />

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
