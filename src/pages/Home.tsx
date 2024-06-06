import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Tick from '../components/Tick'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tick Tick</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Tick />
      </IonContent>
    </IonPage>


  )
}

export default Home
