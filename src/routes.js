const routes = [
  {
    path: "/",
    pathname: "home",
    breadcrumbName: "首頁",
    exact: true,
    footer: true,
    breadcrumb: false,
    routes: [
      {
        path: "/news/announcement",
        pathname: "news",
        breadcrumbName: "最新消息",
        footer: true,
        breadcrumb: true,
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
    ],
  },
];

export default routes;
