import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'

const Today: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Today</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Today
            </IonContent>
        </IonPage>
    )
}

export default Today