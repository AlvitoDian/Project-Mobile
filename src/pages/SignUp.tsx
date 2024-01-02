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
            marginTop: "150px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          <IonCardHeader
            style={{
              color: "#A0B0BC",
              fontSize: "17px",
            }}
          >
            Create an account
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <div>
                <p
                  style={{
                    color: "#A0B0BC",
                  }}
                >
                  Nickname
                </p>
                <div
                  style={{
                    border: "1px solid white",
                  }}
                >
                  <IonInput
                    placeholder="Nickname"
                    type="text"
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
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
                    placeholder="example@mail.com"
                    type="email"
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <p
                  style={{
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
                    placeholder="min 6 characters"
                    type="email"
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <p
                  style={{
                    color: "#A0B0BC",
                  }}
                >
                  Verify Password
                </p>
                <div
                  style={{
                    border: "1px solid white",
                  }}
                >
                  <IonInput
                    placeholder="your password"
                    type="email"
                    style={{
                      backgroundColor: "#3B3B3B",
                      color: "white",
                      height: "10px",
                    }}
                  />
                </div>
              </div>
            </IonList>
            <IonButton
              color="white"
              expand="block"
              style={{
                border: "1px solid white",
                borderRadius: "5px",
                marginTop: "10px",
                backgroundColor: "#191E24",
              }}
              onClick={() => signup()}
            >
              SIGN UP
            </IonButton>
            <IonRouterLink routerLink="/login">
              <p
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  color: "#A0B0BC",
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
