// import './scss/app.scss'
// import './scss/bootstrap.custom.scss';


import App from './App.svelte'


if (import.meta.hot) {
  // HMR code
  console.log('HMR Code', new Date())
}

const app = new App({
  target: document.getElementById('app')
})

export default app
