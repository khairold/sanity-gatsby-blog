export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dac6e8b5aa1fe19a55a6675',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9wvd4vd5',
                  apiId: '78e170a3-2556-4e05-a584-e512537ba412'
                },
                {
                  buildHookId: '5dac6e8cba843deefe1d5338',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1ur1fai3',
                  apiId: '52c6e541-6bee-4db4-8508-60401f7b5808'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khairold/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1ur1fai3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
