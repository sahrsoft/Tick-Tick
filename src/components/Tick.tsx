import { IonAvatar, IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react'
import React from 'react'
import SignInAlert from './SignInAlert'
import { archive, colorPalette, globe, pin, share, trash, document, chevronDownCircle, ellipsisVertical } from 'ionicons/icons'

const Tick: React.FC = () => {

    return (
        <IonContent className="ion-padding">
            <SignInAlert />

            <IonCard>
                <IonCardContent>
                    <IonFab slot="fixed" vertical="top" horizontal="end" edge={false}>
                        <IonFabButton>
                            <IonIcon icon={ellipsisVertical}></IonIcon>
                        </IonFabButton>
                        <IonFabList side="bottom">
                            <IonFabButton>
                                <IonIcon icon={document}></IonIcon>
                            </IonFabButton>
                            <IonFabButton>
                                <IonIcon icon={colorPalette}></IonIcon>
                            </IonFabButton>
                            <IonFabButton>
                                <IonIcon icon={globe}></IonIcon>
                            </IonFabButton>
                        </IonFabList>
                    </IonFab>
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="success">
                                <IonIcon slot="icon-only" icon={archive}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem button={true}>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Leeroy Jenkins</IonLabel>
                        </IonItem>
                        <IonItemOptions slot="end">
                            <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pin}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="tertiary">
                                <IonIcon slot="icon-only" icon={share}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger" expandable={true}>
                                <IonIcon slot="icon-only" icon={trash}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonCardContent>
            </IonCard>


        </IonContent>
    )
}

export default Tick