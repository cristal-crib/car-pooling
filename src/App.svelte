<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'

  ui.start('#firebaseui-auth-container', {
    signInOptions: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: false
  })

  const firebaseConfig = {
    apiKey: 'AIzaSyDjhkZv9fOE7Ex9SfI9IKj0jwPNCAv_6oI',
    authDomain: 'cristal-car-pooling.firebaseapp.com',
    databaseURL: 'https://cristal-car-pooling.firebaseio.com/',
    projectId: 'cristal-car-pooling',
    storageBucket: 'cristal-car-pooling.appspot.com',
    messagingSenderId: '668050793434',
    appId: '1:668050793434:web:ee7c39b5de5af465'
  }

  const messaging = firebase.messaging()
  messaging.usePublicVapidKey(
    'BN3PkJfzLAxNOXmIj3hADyULPt_SSmTgxUdptDklmNcnew74vYJDPURx_RaX2100yCLPaL6wPZDcZyhwD9rVcsE'
  )

  // [START refresh_token]
  // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(function() {
    messaging
      .getToken()
      .then(function(refreshedToken) {
        console.log('Token refreshed.')
        setTokenSentToServer(false)
        sendTokenToServer(refreshedToken)
      })
      .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err)
      })
  })

  function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...')
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true)
    } else {
      console.log(
        "Token already sent to server so won't send it again " +
          'unless it changes'
      )
    }
  }

  function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1'
  }
  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0')
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello World!</h1>
<div id="firebaseui-auth-container" />
