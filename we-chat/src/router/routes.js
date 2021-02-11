import routesComponent from '@/router/routesComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:routesComponent.home()
  },
  {
    path: '/about',
    name: 'About',
    component:routesComponent.about()
  }
]

export  default  routes
