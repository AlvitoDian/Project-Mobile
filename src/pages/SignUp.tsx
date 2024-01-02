import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonRouterLink,
} from "@ionic/react";

import "./SignUp.css";
const Signup: React.FC = () => {
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = () => {
    // Handle logic untuk pendaftaran disini
    console.log("Nama:", nickname);
    console.log("Email:", email);
    console.log("Password:", password);

    // Setelah pendaftaran berhasil, Anda dapat melakukan navigasi atau logika lainnya
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard
          style={{
            marginTop: "200px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          {/* <IonCardHeader
            style={{
              color: "white",
              fontSize: "17px",
            }}
          >
            Welcome to hyakunime
          </IonCardHeader> */}
          <IonCardContent>
            {/* Tambahkan formulir pendaftaran di sini */}
            {/* Contoh formulir sederhana */}
            <IonList>
              <IonItem>
                <IonLabel position="floating">Nickname</IonLabel>
                <IonInput
                  type="text"
                  value={nickname}
                  onIonChange={(e) => setNickname(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Kata Sandi</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonList>
            <IonButton
              color="white"
              expand="block"
              style={{ border: "1px solid white", borderRadius: "5px" }}
              onClick={() => signup()}
            >
              SIGNUP
            </IonButton>
            <IonRouterLink routerLink="/login">
              <p
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  color: "white",
                }}
              >
                Have an account ? Login here
              </p>
            </IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
