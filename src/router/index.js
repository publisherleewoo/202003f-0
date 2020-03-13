import Home from '../pages/Home'
import Sub1 from '../pages/Sub1'
import Sub2 from '../pages/Sub2'
import Join from '../pages/Join'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const router=[
    {path:"/",exact:true,component:Home},
    {path:"/sub1",component:Sub1},
    {path:"/sub2",component:Sub2},
    {path:"/join",component:Join},
    {path:"/login",component:Login},
    {component:NotFound},
]

export default router