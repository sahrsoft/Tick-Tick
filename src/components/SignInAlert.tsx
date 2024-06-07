import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { logInOutline } from 'ionicons/icons'
import React from 'react'

const SignInAlert: React.FC = () => {

    return (
        <IonCard color="secondary">
            <IonCardContent>
                <IonItem style={{ display: 'flex' }} lines='none' color="secondary">
                    <IonIcon slot='start' icon={logInOutline} size='large' />
                    <IonText>
                        Sign in to sync the goals across all your devices, sounds good?
                    </IonText>
                </IonItem>
                <IonItem color="secondary" dir='rtl'>
                    <IonButton color={'success'}>REGISTER</IonButton>
                    <IonButton color={'medium'}>CANCEL</IonButton>
                </IonItem>
            </IonCardContent>
        </IonCard>
    )
}

export default SignInAlert