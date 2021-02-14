import routesComponent from '@/router/routesComponent'

const routes = [
  {
    path: '/home',
    name: 'home',
    component:routesComponent.home(),
    children:[

    ]
  },
  {
    path: '/about',
    name: 'about',
    component:routesComponent.about()
  },

  {
    path:"/:pathMatch(.*)*",
    redirect:{name:'home'}
  }
]

export default routes
