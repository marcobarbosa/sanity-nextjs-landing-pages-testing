export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '634606af363b546b69691747',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-testing-studio-po7981u1',
                  apiId: 'e6f77e80-31be-48b8-864c-c504d151aa45'
                },
                {
                  buildHookId: '634606af1420e564c5104e88',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-testing-web',
                  apiId: '5df97d5e-e493-4fb9-80ff-ed3a8efe2c23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcobarbosa/sanity-nextjs-landing-pages-testing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-testing-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
