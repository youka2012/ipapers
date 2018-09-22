import Login from '../components/login/Login'
import BlankEdit from '../components/blank/BlankEdit'
import Papers from '../components/papers/Papers'
import PaperCreate from '../components/papers/PaperCreate'
import PaperDetail from '../components/papers/PaperDetail'
import PaperList from '../components/papers/PaperList'

var routes = [
    {path: '/', redirect: '/login'},
    {
        path: "/login",
        component: Login
    },
    {
        path: "/paper",
        component: Papers, children: [
            {path: '/', redirect: '/paper/list'},
            {path: '/paper/list', component: PaperList},
            {path: '/paper/create', component: PaperCreate},
            {path: '/paper/detail/:id', component: PaperDetail}
        ]
    }, {
        path: "/blank/:code",
        component: BlankEdit
    }
];
export default routes;