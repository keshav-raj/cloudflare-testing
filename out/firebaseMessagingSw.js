/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js');
importScripts('https://libs.learnyst.com/aws-sdk/vendor.js');

const config = {
  apiKey: 'AIzaSyDoaBroo0Hxbi98XHgJHF_iCGSOGNORXlI',
  authDomain: 'learnyst.firebaseapp.com',
  databaseURL: 'https://learnyst.firebaseio.com',
  projectId: 'firebase-learnyst',
  storageBucket: 'firebase-learnyst.appspot.com',
  messagingSenderId: '667287752609',
  appId: '1:667287752609:web:d186438f714900add405e0',
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const messaging = firebase.messaging();

const registerPushAnalytics = msg_id => {
  self.AWS.config.region = 'us-east-1';
  self.AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:14795cce-a934-43fe-a4f1-9b4898f99787',
  });

  const options = {
    appId: 'fa7de58ad6db498abaf63413f2bd0898',
    // appId : '33a99508c89e4188bf627bc899b819b9',
  };
  const mobileAnalyticsClient = new AMA.Manager(options);
  let idbStore = null;

  const onIndexedDBReady = (resolve, reject) => {
    const onsuccess = data => {
      try {
        const payload = {};
        payload.msg_id = msg_id;
        payload.school_id = data.school_id;
        payload.email = data.email;
        payload.user_id = data.user_id;
        payload.deviceType = data.deviceType;
        payload.reg_id = data.reg_id;

        mobileAnalyticsClient.recordEvent('lr_push_tap', payload);
        mobileAnalyticsClient.stopSession();
        mobileAnalyticsClient.submitEvents();
      } catch (e) {
      }

      resolve('success');
    };

    const onerror = error => {
      reject(error);
    };

    idbStore.get('user_data', onsuccess, onerror);
  };

  return new Promise((resolve, reject) => {
    idbStore = new IDBStore({
      dbVersion: 1,
      storeName: 'learner',
      keyPath: 'id',
      autoIncrement: true,
      onStoreReady: onIndexedDBReady.bind(this, resolve, reject),
    });
  });
};

const showNotification = data => {
  const notificationTitle = data.title || '';
  const notificationOptions = {
    body: data.message || '',
    icon: data.icon || '',
    tag: data.msg_id || '',
    image: data.image || null,
    data: data.param || {},
    dir: data.dir || 'auto',
    sound: data.sound || '',
    requireInteraction: data.requireInteraction === true || false,
    vibrate: data.isVibrate === 'true' ? [200, 100, 200] : '',
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
};

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {});

self.addEventListener(
  'notificationclick',
  event => {
    event.notification.close();
    const msg_id = event.notification.tag;
    let clickResponsePromise = Promise.resolve();
    try {
      const data = JSON.parse(event.notification.data);
      if (data.click_action) {
        clickResponsePromise = self.clients.openWindow(data.click_action);
      }
    } catch (e) {}

    event.waitUntil(Promise.all([clickResponsePromise, registerPushAnalytics(msg_id)]));
  },
  false
);

messaging.setBackgroundMessageHandler(payload => {
  return showNotification(payload.data);
});

self.addEventListener('push', event => {
  if (event.data) {
    const dataText = event.data.text();
    const dataObject = JSON.parse(dataText);
    event.waitUntil(Promise.all([showNotification(dataObject.data)]));
  }
});
