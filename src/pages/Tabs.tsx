import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { calendarNumber, checkbox, cog } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Calendar from './Calendar';
import Settings from './Settings';
import Home from './Home';
import Today from './Today';
import Inbox from './Inbox';

const Tabs: React.FC = () => {

    return (
        <IonTabs>
            <IonTabBar slot='bottom'>
                <IonTabButton tab='home' href='/app/tabs/home'>
                    <IonIcon icon={checkbox} />
                </IonTabButton>
                <IonTabButton tab='calendar' href='/app/tabs/calendar'>
                    <IonIcon icon={calendarNumber} />
                </IonTabButton>
                <IonTabButton tab='settings' href='/app/tabs/settings'>
                    <IonIcon icon={cog} />
                </IonTabButton>
            </IonTabBar>

            <IonRouterOutlet>
                <Route path='/app/tabs/home' component={Home} />
                <Route path='/app/tabs/calendar' component={Calendar} />
                <Route path='/app/tabs/settings' component={Settings} />
                <Route path='/app/tabs/today' component={Today} />
                <Route path='/app/tabs/inbox' component={Inbox} />

                <Route exact path='/app/tabs'>
                    <Redirect to='/app/tabs/home' />
                </Route>
            </IonRouterOutlet>
        </IonTabs>
    );
};

export default Tabs;