import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { menuOutline, bookmarkOutline, bookmark } from "ionicons/icons";

import "./Bookmark.css";

const Bookmark: React.FC = () => {
  const [bookmarks, setBookmarks] = useState([
    {
      imageUrl: "https://images3.alphacoders.com/131/1319293.jpeg",
      title: "Chainsaw Man",
      genre: "Thriller, Horror, Action",
      episodes: "12",
      type: "Summer 2023",
      isBookmarked: false,
    },
    // Tambahkan bookmark lain jika diperlukan
  ]);

  const handleBookmarkToggle = (index: number) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index].isBookmarked = !updatedBookmarks[index].isBookmarked;
    setBookmarks(updatedBookmarks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ display: "flex", alignItems: "center" }}>
          <IonButton slot="start" fill="clear">
            <IonIcon icon={menuOutline} />
          </IonButton>
          <IonSearchbar slot="end" style={{ marginTop: "13px" }}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {bookmarks.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70%" }}>
            <p style={{ marginBottom: 0, color: "whitesmoke" }}>Maaf, Anda belum membookmark apapun.</p>
          </div>
        ) : (
          bookmarks.map((bookmark, index) => (
            <IonCard key={index}>
              <img alt="Silhouette of mountains" src={bookmark.imageUrl} />
              <IonCardHeader>
                <IonCardTitle>{bookmark.title}</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonCardContent style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
                    <span style={{ flex: 0.23 }}>Genre</span>
                    <span style={{ marginLeft: "1px" }}>: {bookmark.genre}</span>
                  </p>
                  <p style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
                    <span style={{ flex: 0.23 }}>Episodes</span>
                    <span style={{ marginLeft: "1px" }}>: {bookmark.episodes}</span>
                  </p>
                  <p style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
                    <span style={{ flex: 0.23 }}>Type</span>
                    <span style={{ marginLeft: "1px" }}>: {bookmark.type}</span>
                  </p>
                  
                </IonCardContent>
                <IonButton fill="clear" onClick={() => handleBookmarkToggle(index)}>
                    <IonIcon icon={bookmarkOutline} color={bookmark.isBookmarked ? "danger" : "medium"} />
                  </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Bookmark;
