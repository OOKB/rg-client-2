import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  home: '/',
  sample: '/sample',
  detail: '/detail/*',
  itemEdit: '/edit/*',
  pricelist: '/collection(/*)',
  projects: '/project',
  project: '/project/:projectId',
})
addRoutes(['about', 'contact', 'favs', 'login', 'showroom'])

export default locationInfo
