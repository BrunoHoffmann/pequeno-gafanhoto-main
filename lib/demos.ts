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
        name: 'Promises',
        slug: 'promises',
        description: 'Class and attributes in javascript',
      },
    ],
  },
  {
    name: 'Node',
    items: [
      {
        name: 'Streams and Performance Optimization',
        slug: 'streams-performance',
        description: 'Streams and Performance Optimization',
      },
      {
        name: 'Microservices Architecture',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Serverless Computing',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Advanced Debugging and Profiling Techniques',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Building Real-time Applications with WebSockets',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Integration Testing and Continuous Integration',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Performance Monitoring and Optimization',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Authentication and Authorization Best Practices',
        slug: 'class-attributes',
        description: 'Class and attributes in javascript',
      },
      {
        name: 'Advanced Networking and Protocols',
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
