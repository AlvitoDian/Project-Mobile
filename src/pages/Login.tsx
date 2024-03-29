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

import "./Login.css";
const Login: React.FC = () => {
  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = () => {
    // Handle logic untuk pendaftaran disini
    console.log("Nama:", nama);
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
            backgroundColor: "#1E1E1E",
          }}
        >
          <IonCardHeader
            style={{
              color: "#A0B0BC",
              fontSize: "17px",
              marginTop: "10px",
            }}
          >
            Welcome to hyakunime
          </IonCardHeader>
          <IonCardContent>
            {/* Tambahkan formulir pendaftaran di sini */}
            {/* Contoh formulir sederhana */}
            <IonList
              style={{
                backgroundColor: "#1E1E1E",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#A0B0BC",
                  }}
                >
                  Email
                </p>
                <div
                  style={{
                    border: "1px solid white",
                  }}
                >
                  <IonInput
                    placeholder="Email"
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    color: "#A0B0BC",
                  }}
                >
                  Password
                </p>
                <div
                  style={{
                    border: "1px solid white",
                  }}
                >
                  <IonInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
              <IonRouterLink routerLink="/register">
                <p
                  style={{
                    color: "#A0B0BC",
                  }}
                >
                  Forgot Password ?
                </p>
              </IonRouterLink>
            </IonList>
            <IonButton
              color="white"
              expand="block"
              style={{
                border: "1px solid white",
                borderRadius: "5px",
                backgroundColor: "#191E24",
              }}
              onClick={() => signup()}
            >
              LOGIN
            </IonButton>
            <IonRouterLink routerLink="/register">
              <p
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  color: "#A0B0BC",
                }}
              >
                Don't have account ?
              </p>
            </IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
