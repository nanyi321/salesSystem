export const constantRouteConfig = [
  // user
  {
    path: '/user',
    component: ['/layout/UserLayout', 'fadeRA'],
    routes: [
      {
        name: 'Login',
        path: '/user/login',
        component: ['/views/User/Login']
      }
    ]
  },
  // app
  {
    path: '/',
    component: ['/layout/MainLayout', 'fadeRA'],
    authority: ['admin', 'guest'],
    routes: []
  }
];

/**
 * 路由配置
 * @param path {string} 路由路径
 * @param name {string} 菜单名称、可以作为key来映射国际化菜单名
 * @param icon {string} 菜单图标
 * @param componet {string[]} 加载组件的项目路径位置，必须为数组，第一项路径，第二项配置组件进入动画class
 * @param hiddeMenu {boolean} 菜单中是否显示
 * @param routes {object[]} 子路由信息
 * @param rest 可接收 react-router-dom 参数
 */

export const asyncRouteConfig = [
  {
    path: '/',
    exact: true,
    redirect: '/sales',
    hideMenu: true
  },
  {
    name: '统计看板',
    icon: 'pie-chart',
    path: '/dashboard',
    component: ['/views/Dashboard'],
    authority: ['admin']
  },
  {
    name: '售货',
    icon: 'shop',
    path: '/sales',
    component: ['/views/Sales/goodsList']
  },

  {
    name: 'form',
    icon: 'form',
    path: '/form',
    authority: ['admin'],
    routes: [
      {
        name: '添加商品',
        path: '/form/stepForm',
        component: ['/views/Goods/StepForm']
      },
      {
        name: '商品列表',
        path: '/form/goodsList',
        component: ['/views/Goods/GoodsList']
      },
      {
        name: '创建补货单',
        path: '/form/replenishment',
        component: ['/views/Replenishment/create']
      },
      {
        name: '补货记录',
        path: '/form/list',
        component: ['/views/Replenishment/list']
      }
    ]
  },

  {
    name: '订单',
    icon: 'ordered-list',
    path: '/order',
    component: ['/views/Order/list'],
    authority: ['admin']
    // routes: [
    //   {
    //     name: '订单列表',
    //     path: '/Order/list',
    //     component: ['/views/Order/list']
    //   }
    // ]
  }
  // {
  //   name: 'program',
  //   icon: 'appstore',
  //   path: '/program',
  //   routes: [
  //     {
  //       name: 'analysis',
  //       path: '/program/analysis',
  //       component: ['/views/Program/Analysis'],
  //       authority: ['admin']
  //     },
  //     {
  //       name: 'monitor',
  //       path: '/program/monitor',
  //       component: ['/views/Program/Monitor']
  //     },
  //     {
  //       name: 'platform',
  //       path: '/program/platform',
  //       component: ['/views/Program/Platform']
  //     }
  //   ]
  // },

  // {
  //   name: 'list',
  //   icon: 'ordered-list',
  //   path: '/list',
  //   routes: [
  //     {
  //       name: 'basicList',
  //       path: '/list/basicList',
  //       component: ['/views/List/BasicList']
  //     },
  //     {
  //       name: 'cardList',
  //       path: '/list/cardList',
  //       component: ['/views/List/CardList']
  //     },
  //     {
  //       name: 'basicTable',
  //       path: '/list/basicTable',
  //       component: ['/views/List/BasicTable']
  //     }
  //   ]
  // }
  // {
  //   name: 'map',
  //   icon: 'heat-map',
  //   path: '/map',
  //   component: ['/views/Map'],
  //   // authority: ['admin']
  // },
  // {
  //   name: 'gallery',
  //   icon: 'picture',
  //   path: '/gallery',
  //   component: ['/views/Gallery'],
  //   // authority: ['admin']
  // },
  // {
  //   name: 'result',
  //   icon: 'check-circle',
  //   path: '/result',
  //   routes: [
  //     {
  //       name: 'successResult',
  //       path: '/result/successResult',
  //       component: ['/views/Result/SuccessResult']
  //     },
  //     {
  //       name: 'failedResult',
  //       path: '/result/failedResult',
  //       component: ['/views/Result/FailedResult']
  //     }
  //   ]
  // },
  // {
  //   name: 'exception',
  //   icon: 'warning',
  //   path: '/exception',
  //   routes: [
  //     {
  //       name: '403',
  //       path: '/exception/403',
  //       component: ['/views/Exception/403', 'bounceIn-animated']
  //     },
  //     {
  //       name: '404',
  //       path: '/exception/404',
  //       component: ['/views/Exception/404']
  //     },
  //     {
  //       name: '500',
  //       path: '/exception/500',
  //       component: ['/views/Exception/500']
  //     },
  //     {
  //       name: 'index',
  //       path: '/exception/home',
  //       component: ['/views/Exception'],
  //       hideMenu: true
  //     }
  //   ]
  // }
];
