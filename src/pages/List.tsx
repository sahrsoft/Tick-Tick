import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const List: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                List
            </IonContent>
        </IonPage>
    );
};

export default List