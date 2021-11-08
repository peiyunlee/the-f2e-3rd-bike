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
        ],
      },
      {
        path: "/roadmap",
        pathname: "roadmap",
        breadcrumbName: "自行車路線",
        routes: [
          {
            path: "/roadmap/district",
            pathname: "district",
            breadcrumbName: "區域路線",
          },
          {
            path: "/roadmap/store",
            pathname: "store",
            breadcrumbName: "常用路線",
          },
        ],
      },
    ],
  },
];

export default routes;
