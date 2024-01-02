import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSearchbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons"; // Import icon untuk tombol hamburger
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ display: "flex", alignItems: "center" }}>
          {/* Tombol hamburger di pojok kiri */}
          <IonButton slot="start" fill="clear">
            <IonIcon icon={menuOutline} />
          </IonButton>

          {/* Judul di tengah (opsional) */}
          {/* <IonTitle>Blank</IonTitle> */}

          {/* IonSearchbar di pojok kanan */}
          <IonSearchbar slot="end" style={{ marginTop: "13px" }}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          {/*  <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        {/* <ExploreContainer /> */}

        {/* Tambahkan elemen ion-card di bawah ini */}
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
