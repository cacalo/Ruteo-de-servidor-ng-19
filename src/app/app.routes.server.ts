import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: "params/:params",
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        {params: "hola"},
        {params: "prueba"},
      ]
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
