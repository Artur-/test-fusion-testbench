export const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v18/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'main-view',
    action: async () => {
      await import('./views/main/main-view');
    },
    children: [
      {
        path: '',
        component: 'hello-world-view',
        action: async () => {
          await import('./views/helloworld/hello-world-view');
        },
      },
      {
        path: 'hello',
        component: 'hello-world-view',
        action: async () => {
          await import('./views/helloworld/hello-world-view');
        },
      },
      {
        path: 'about',
        component: 'about-view',
        action: async () => {
          await import('./views/about/about-view');
        },
      },
    ],
  },
];
