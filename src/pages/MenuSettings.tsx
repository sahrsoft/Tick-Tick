import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const MenuSettings: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MenuSettings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                MenuSettings
            </IonContent>
        </IonPage>
    );
};

export default MenuSettings