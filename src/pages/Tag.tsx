import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Tag: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tag</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Tag
            </IonContent>
        </IonPage>
    );
};

export default Tag