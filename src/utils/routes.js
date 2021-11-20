const routes = [
  {
    path: "/",
    pathname: "home",
    breadcrumbName: "首頁",
    routes: [
      {
        path: "/news",
        pathname: "news",
        breadcrumbName: "最新消息",
        routes: [
          {
            path: "/news/announcement",
            pathname: "announcement",
            breadcrumbName: "最新公告",
            footer: true,
            breadcrumb: true,
          },
          {
            path: "/news/activity",
            pathname: "activity",
            breadcrumbName: "活動資訊",
            footer: true,
            breadcrumb: true,
          },
          {
            path: "/news/detail/:type/:id",
            pathname: "detail",
            breadcrumbName: "消息資訊",
            footer: true,
            breadcrumb: true,
          },
        ],
      },
      {
        path: "/route",
        pathname: "route",
        breadcrumbName: "自行車路線",
        routes: [
          {
            path: "/route/district",
            pathname: "district",
            breadcrumbName: "區域路線",
          },
          {
            path: "/route/store",
            pathname: "store",
            breadcrumbName: "常用路線",
          },
        ],
      },
      {
        path: "/station",
        pathname: "station",
        breadcrumbName: "單車租借",
        routes: [
          {
            path: "/station/rent",
            pathname: "rent",
            breadcrumbName: "借車",
          },
          {
            path: "/station/return",
            pathname: "return",
            breadcrumbName: "還車",
          },
          {
            path: "/station/store",
            pathname: "store",
            breadcrumbName: "常用站牌",
          },
        ],
      },{
        path: "/safety",
        pathname: "safety",
        breadcrumbName: "騎乘小叮嚀",
      },
    ],
  },
];

export default routes;
