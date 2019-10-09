import LoadableComponent from "../utils/loadableComponent";

const config = [
    {
        name: '/',
        path: '/',
        exact: true,
        component: LoadableComponent(() => import("../pages/Home/home"))
    },
    // {
    //     name: 'archive',
    //     path: '/archive',
    //     exact: true,
    // },
    // {
    //     name: 'timeLine',
    //     path: '/timeLine',
    //     exact: true,
    // },
    // {
    //     name: 'message',
    //     path: '/message',
    //     exact: true
    // },
    // {
    //     name: 'about',
    //     path: '/about',
    //     exact: true
    // },
    // {
    //     name: 'detail',
    //     path: '/detail/:id',
    // },
    // {
    //     name: 'project',
    //     path: '/project',
    //     exact: true,
    // },
];

export default config;
