import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { provideStore } from '@ngxs/store';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom([
      ClarityModule
    ]),
    provideStore([], withNgxsReduxDevtoolsPlugin({ disabled: !isDevMode() }), withNgxsReduxDevtoolsPlugin({ disabled: !isDevMode() })),
    provideFirebaseApp(() => initializeApp({ "projectId": "pinlist-29c93", "appId": "1:425543974550:web:0b95b130d91082459a4cb7", "storageBucket": "pinlist-29c93.appspot.com", "apiKey": "AIzaSyBzonbxQ12X-1yOAJA87IOqwDpeN67Sqgc", "authDomain": "pinlist-29c93.firebaseapp.com", "messagingSenderId": "425543974550" })),
    provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"pinlist-29c93","appId":"1:425543974550:web:0b95b130d91082459a4cb7","storageBucket":"pinlist-29c93.appspot.com","apiKey":"AIzaSyBzonbxQ12X-1yOAJA87IOqwDpeN67Sqgc","authDomain":"pinlist-29c93.firebaseapp.com","messagingSenderId":"425543974550"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
