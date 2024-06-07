import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'
import Menu from './pages/Menu'
import Today from './pages/Today'
import Login from './pages/Login'
import Search from './pages/Search'
import MenuSettings from './pages/MenuSettings'
import List from './pages/List'
import Filter from './pages/Filter'
import Tag from './pages/Tag'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* <Route exact path="/app/tabs/home" >
          <Tabs />
        </Route> */}

        <Route path="/app" component={Menu} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/menu-settings" component={MenuSettings} />
        <Route path="/list" component={List} />
        <Route path="/filter" component={Filter} />
        <Route path="/tag" component={Tag} />

        <Route exact path="/">
          <Redirect to="/app" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App
