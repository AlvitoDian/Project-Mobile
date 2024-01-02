import React from 'react';
import { IonCard, IonCardContent, IonButton, IonInput} from '@ionic/react';

function Example() {
  return (
    <div id="container">
      <IonCard>
        <IonCardContent>
            Nickname<br/>
            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="New Nickname"></IonInput><br/>
            Email<br/>
            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="New Email"></IonInput><br/>
            <IonButton expand="block" color="warning" >DELETE USER ?</IonButton><br/>
            <IonButton expand="block" color="danger">CANCEL</IonButton><IonButton expand="block" color="success">UPDATE</IonButton>
          </IonCardContent>
      </IonCard>
    </div>
  );
}
export default Example;