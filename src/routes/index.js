import { createRouter, createWebHistory } from 'vue-router'
import workspace from './Workspace'
import NotFound from './NotFound'
export default createRouter({
 history: createWebHistory(),
 scrollBehavior: () => ({top: 0}),
 routes:[
  {
   path: '/',
   component: workspace,
   children: [
    {
     name: 'Workspace',
     path: 'workspaces/:id',
     component: workspace
    }
   ]
  },
  {
   path: '/:notFound(.*)',
   component: NotFound
  }
 ]
})