import App from './App.svelte'

import config from './config'

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

console.log(config)

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register(
    '/service-worker.js'
  )
  return swRegistration
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification')
  }
}

const showLocalNotification = (title, body, swRegistration) => {
  const options = {
    body
    // here you can add more properties like icon, image, vibrate, etc.
  }
  swRegistration.showNotification(title, options)
}

const main = async () => {
  check()
  const swRegistration = await registerServiceWorker()
  const permission = requestNotificationPermission()
  showLocalNotification('This is title', 'this is the message', swRegistration)
}

main()

export default app
