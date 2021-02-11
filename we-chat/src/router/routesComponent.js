class RoutesComponent{
  home(){
    return () => import('../views/Home.vue')
  }

  about(){
    return () => import('../views/About.vue')
  }
}


export  default  new RoutesComponent()
