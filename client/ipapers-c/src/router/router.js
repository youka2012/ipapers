import Login from '../components/login/Login'
import BlankEdit from '../components/blank/BlankEdit'
import Papers from '../components/papers/Papers'
import PaperCreate from '../components/papers/PaperCreate'
import PaperDetail from '../components/papers/PaperDetail'
import PaperAnalysis from '../components/papers/PaperAnalysis'
import PaperList from '../components/papers/PaperList'

var routes = [
    {name:'enter',path: '/',component: Login},
    {
        name:'login',
        path: "/login",
        component: Login
    },
    {
        name:'paper',
        path: "/paper",
        redirect: '/paper/list',
        component: Papers,
        children: [
            {name:'list',path: '/paper/list', component: PaperList},
            {name:'create',path: '/paper/create', component: PaperCreate},
            {name:'detail',path: '/paper/detail/:paperId', component: PaperDetail},
            {name:'analysis',path: '/paper/analysis/:paperId', component: PaperAnalysis},
        ]
    }, {
        name:'blank',
        path: "/blank/:paperCode",
        component: BlankEdit
    }
];
export default routes;