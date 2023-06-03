export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'JavaScript',
    items: [
      {
        name: 'Array and loops',
        slug: 'array',
        description: 'Array and loops in javascript, how to work',
      },
      {
        name: 'Class and attributes',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
    ],
  },
  {
    name: 'Node',
    items: [
      {
        name: 'Promise',
        slug: 'git-basic',
        description: 'Array and loops in javascript, how to work',
      },
      {
        name: 'Three',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
    ],
  },
  {
    name: 'Git',
    items: [
      {
        name: 'Basic',
        slug: 'git-basic',
        description: 'Array and loops in javascript, how to work',
      },
      {
        name: 'Advanced',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
    ],
  },
  {
    name: 'Algoritmo',
    items: [
      {
        name: 'Calc number primo',
        slug: 'git-basic',
        description: 'Array and loops in javascript, how to work',
      },
      {
        name: 'Cal list',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
    ],
  },
];
