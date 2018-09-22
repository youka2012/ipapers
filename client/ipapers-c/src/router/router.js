import Login from '../components/login/Login'
import BlankEdit from '../components/blank/BlankEdit'
import Papers from '../components/papers/Papers'
import PaperCreate from '../components/papers/PaperCreate'
import PaperDetail from '../components/papers/PaperDetail'
import PaperList from '../components/papers/PaperList'

var routes = [
    {path: '/', redirect: '/login'},
    {
        name:'login',
        path: "/login",
        component: Login
    },
    {
        name:'paper',
        path: "/paper",
        component: Papers, children: [
            {path: '/', redirect: '/paper/list'},
            {name:'list',path: '/paper/list', component: PaperList},
            {name:'create',path: '/paper/create', component: PaperCreate},
            {name:'detail',path: '/paper/detail', component: PaperDetail}
        ]
    }, {
        name:'blank',
        path: "/blank",
        component: BlankEdit
    }
];
export default routes;