Scrivito.configureContentBrowser({
  filters: {
    _objClass: {
      options: {
        All: {
          title: 'All',
          icon: 'folder',
          query: Scrivito.Obj.all(),
          selected: true,
        },
        Images: {
          title: 'Images',
          icon: 'image',
          field: '_objClass',
          value: 'Image',
          preset: { _objClass: 'Image' },
        },
        Pages: {
          title: 'Pages',
          icon: 'sheet',
          field: '_objClass',
          value: ['Page', 'LandingPage', 'BlogPost', 'Event', 'Job'],
          options: {
            Page: {
              title: 'Regular pages',
              icon: 'sheet',
              enableCreate: true,
              preset: { _objClass: 'Page' },
            },
            LandingPage: {
              title: 'Landing pages',
              icon: 'inbox',
              enableCreate: true,
              preset: { _objClass: 'LandingPage' },
            },
            BlogPost: {
              title: 'Blog posts',
              icon: 'pen',
              enableCreate: true,
              preset: { _objClass: 'BlogPost' },
            },
            Event: {
              title: 'Events',
              icon: 'cal',
              enableCreate: true,
              preset: { _objClass: 'Event' },
            },
            Job: {
              title: 'Jobs',
              icon: 'suitcase',
              enableCreate: true,
              preset: { _objClass: 'Job' },
            },
          },
        },
        Resources: {
          title: 'Resources',
          icon: 'thumbnails',
          field: '_objClass',
          value: ['Author', 'Download', 'Video'],
          options: {
            Author: {
              title: 'Authors',
              icon: 'user',
              enableCreate: true,
              preset: { _objClass: 'Author' },
            },
            Download: {
              title: 'Downloads',
              icon: 'pdf',
              preset: { _objClass: 'Download' },
            },
            Video: {
              title: 'Videos',
              icon: 'video',
              preset: { _objClass: 'Video' },
            },
          },
        },
        SpecialPurpose: {
          title: 'Special purpose',
          icon: 'gears',
          field: '_objClass',
          value: ['Blog', 'Homepage', 'SearchResults'],
          options: {
            Homepage: {
              title: 'Homepage',
              icon: 'inbox',
              enableCreate: true,
              preset: { _objClass: 'Homepage' },
            },
            Blog: {
              title: 'Blog',
              icon: 'pen',
              enableCreate: true,
              preset: { _objClass: 'Blog' },
            },
            SearchResults: {
              title: 'Search Results',
              icon: 'lens',
              enableCreate: true,
              preset: { _objClass: 'SearchResults' },
            },
          },
        },
      },
    },
  },
});
