console.log('Hello from service-worker.js')

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('service.js') //notice the file name
  return swRegistration
}

const main = () => {
  registerServiceWorker()
}
main()
