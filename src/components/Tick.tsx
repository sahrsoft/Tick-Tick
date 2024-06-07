import { IonContent } from '@ionic/react'
import React from 'react'
import SignInAlert from './SignInAlert'

const Tick: React.FC = () => {

    return (
        <IonContent className="ion-padding">
            <SignInAlert />
        </IonContent>
    )
}

export default Tick