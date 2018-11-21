import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.initGoogleApiClient();
    this.user$ = afAuth.authState;
  }

  public initGoogleApiClient() {
    gapi.load('client', () => {
      console.log('Google API Client Loaded.');

      gapi.client.init({
        apiKey: 'AIzaSyAaJa-Vd1wN2TJ6hP92vdKRq_leVbD7Qn0',
        clientId: '440296727946-4kbrecred5o50khm9t3c53t5qg94abbk.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
      });

      gapi.client.load('calendar', 'v3', () => console.log('Google Calendar Loaded.'));
    });
  }

  public async logIn() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;
    console.log('Successfully authenticated via google. \nGoogleUser:', googleUser);

    const credential = auth.GoogleAuthProvider.credential(token);
    await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
  }

  public logOut() {
    this.afAuth.auth.signOut();
  }
}
