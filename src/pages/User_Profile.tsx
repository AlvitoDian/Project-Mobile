import React from 'react';
import { IonCard, IonCardContent, IonButton, IonInput} from '@ionic/react';

import "./User_Profile.css"

function Example() {
  return (
    <div id="container">
      <IonCard style={{
            marginTop: "150px",
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "5px",
            padding: "8px",
          }}>
        <IonCardContent>
            Nickname<br/>
            <IonInput labelPlacement="floating" fill="solid" placeholder="New Nickname"></IonInput><br/>
            Email<br/>
            <IonInput labelPlacement="floating" fill="solid" placeholder="New Email"></IonInput><br/>
            <IonButton expand="block" color="warning" fill="outline" style={{ fontWeight: "bold", }}>DELETE USER ?</IonButton>
            <br />
            <div id="buttonContainer">
              <IonButton color="danger" fill="outline" style={{ fontWeight: "bold",  }}>CANCEL</IonButton>
              <IonButton color="success" fill="outline" style={{ fontWeight: "bold", float: "right", }}>UPDATE</IonButton>
            </div>
          </IonCardContent>
      </IonCard>
    </div>
  );
}
export default Example;