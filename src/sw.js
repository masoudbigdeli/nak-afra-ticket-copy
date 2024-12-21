// import {clientsClaim} from 'workbox-core'
import {precacheAndRoute} from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)
// self.skipWaiting()
// clientsClaim()

// function registerServiceWorker() {
//     if('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/sw.js', {type: 'module'}).then(
//             (registeration) => {
//                 console.log('service worker is registered', registeration)
//             },
//             (error) => {
//                 console.log(`service worker registeration failed: ${error}`)
//             } 
//         )
//     } else {
//         console.log('service workers are not supported!')
//     }
// }

// export default registerServiceWorker