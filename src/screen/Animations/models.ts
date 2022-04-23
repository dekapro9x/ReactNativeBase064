export interface InterfaceDefault {}

interface itemMenu {
  id: string;
  name: string;
  data: [
    {
      id: number;
      name: string;
      component: object;
    },
  ];
}

export const arrMenu = new Array<itemMenu>();
