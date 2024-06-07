import React, { MouseEventHandler, useState } from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonModal, IonPage, IonRouterOutlet, IonSplitPane, IonText, IonToolbar, SelectChangeEventDetail } from '@ionic/react'
import { add, addCircleOutline, albums, calendarNumber, cog, create, filter, homeOutline, list, personCircleOutline, pricetag, search } from 'ionicons/icons'
import { Redirect, Route, useHistory } from 'react-router'
import { IonSelectCustomEvent } from '@ionic/core'
import Tabs from './Tabs'

const Menu: React.FC = () => {

    const [DropMenuToggle, setDropMenuToggle] = useState<MouseEventHandler<HTMLIonButtonElement> | Boolean>(false)

    const menuRef = React.useRef<HTMLIonMenuElement>(null)
    const modal = React.useRef<HTMLIonModalElement>(null)

    const paths = [
        { name: 'Home', url: '/app/tabs/home', icon: homeOutline },
        { name: 'Today', url: '/app/tabs/today', icon: calendarNumber },
        { name: 'Inbox', url: '/app/tabs/inbox', icon: albums }
    ]

    const router = useHistory()

    const select = (e: IonSelectCustomEvent<SelectChangeEventDetail<any>>) => {
        if (e.detail.value === 'list') {
            // router.push('/list')
            menuRef.current?.close()
            console.log(e);
            e.detail.value = ''

        } else if (e.detail.value === 'filter') {
            router.push('/filter')
            menuRef.current?.close()
        } else if (e.detail.value === 'tag') {
            router.push('/tag')
            menuRef.current?.close()
        }
    }

    return (
        <IonPage>
            <IonSplitPane contentId='main' when='sm'>
                <IonMenu contentId='main' ref={menuRef}>
                    <IonHeader>
                        <IonToolbar color='secondary' style={{ padding: '6px 0' }}>
                            <IonButtons slot='start'>
                                <IonButton routerLink='/login'>
                                    <IonIcon slot='start' icon={personCircleOutline} />
                                    <IonText slot='start'>Register / Login</IonText>
                                </IonButton>
                            </IonButtons>
                            <IonButtons slot='end'>
                                <IonButton routerLink='/search'>
                                    <IonIcon slot='start' icon={search} />
                                </IonButton>
                                <IonMenuToggle>
                                    <IonButton routerLink='/app/tabs/settings'>
                                        <IonIcon slot='start' icon={cog} />
                                    </IonButton>
                                </IonMenuToggle>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent color={'tickMain'}>
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem color={'tickMain'} detail={false} routerLink={item.url} routerDirection='none'>
                                    <IonIcon slot='start' icon={item.icon} />
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>

                    <IonItem color={'tickMain'}>
                        <IonButtons slot='start' color={'tickMain'}>
                            <IonButton id="open-modal" size='default'>
                                <IonIcon slot='start' icon={addCircleOutline} />
                                <IonText>Add</IonText>
                            </IonButton>
                        </IonButtons>
                        <IonModal trigger="open-modal" initialBreakpoint={0.20} handleBehavior="cycle" ref={modal}>
                            <IonContent className="ion-padding">
                                <IonItem button detail={false} className="ion-padding-end" routerLink='/list' onClick={() => modal.current?.dismiss()}>
                                    <IonIcon slot='start' icon={list} />
                                    <IonText>List</IonText>
                                </IonItem>
                                <IonItem button detail={false} className="ion-padding-end" routerLink='/filter' onClick={() => modal.current?.dismiss()}>
                                    <IonIcon slot='start' icon={filter} />
                                    <IonText>Filter</IonText>
                                </IonItem>
                                <IonItem button detail={false} className="ion-padding-end" routerLink='/tag' onClick={() => modal.current?.dismiss()}>
                                    <IonIcon slot='start' icon={pricetag} />
                                    <IonText>Tag</IonText>
                                </IonItem>
                            </IonContent>
                        </IonModal>

                        <IonButtons slot='end' color={'tickMain'}>
                            <IonButton size='default' routerLink='/menu-settings'>
                                <IonIcon slot='end' icon={create} />
                            </IonButton>
                        </IonButtons>
                    </IonItem>
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