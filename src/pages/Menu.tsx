import { IonAlert, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Tabs from './Tabs';
import { albums, calendar, calendarNumber, cog, homeOutline, person, personCircle, personCircleOutline } from 'ionicons/icons';

const Menu: React.FC = () => {

    const paths = [
        { name: 'Home', url: '/app/tabs/home', icon: homeOutline },
        { name: 'Today', url: '/app/tabs/today', icon: calendarNumber },
        { name: 'Inbox', url: '/app/tabs/inbox', icon: albums }
    ]

    return (
        <IonPage>
            <IonSplitPane contentId='main' when='sm'>
                <IonMenu contentId='main'>
                    <IonHeader>
                        <IonToolbar color={'tertiary'}>
                            <IonButton expand='block'>
                                <IonIcon slot='start' icon={personCircleOutline} />
                                <IonText>Sign in / Sign up</IonText>
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent color={'tertiary'}>
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem color={'tertiary'} detail={false} routerLink={item.url} routerDirection='none'>
                                    <IonIcon slot='start' icon={item.icon} />
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id='main'>
                    <Route path='/app/tabs' component={Tabs} />
                    <Route exact path='/app'>
                        <Redirect to='/app/tabs' />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu