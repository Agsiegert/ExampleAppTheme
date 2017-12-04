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
          value: [
            'Author',
            'Blog',
            'BlogPost',
            'Event',
            'Homepage',
            'Job',
            'LandingPage',
            'Page',
            'SearchResults',
          ],
          options: {
            Page: {
              title: 'Standard pages',
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
            Author: {
              title: 'Authors',
              icon: 'user',
              enableCreate: true,
              preset: { _objClass: 'Author' },
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
              title: 'Search results',
              icon: 'lens',
              enableCreate: true,
              preset: { _objClass: 'SearchResults' },
            },
          },
        },
        Download: {
          title: 'Downloads',
          icon: 'pdf',
          field: '_objClass',
          value: 'Download',
          preset: { _objClass: 'Download' },
        },
        Video: {
          title: 'Videos',
          icon: 'video',
          field: '_objClass',
          value: 'Video',
          preset: { _objClass: 'Video' },
        },
      },
    },
    _modification: {
      title: 'Changed',
      type: 'checkbox',
      expanded: true,
      field: '_modification',
      options: {
        New: {
          value: 'new',
        },
        Edited: {
          value: 'edited',
        },
      },
    },
  },
});
