import linkListWidgetIcon from 'assets/images/link_list_widget.svg';
import LinkWidget from 'Widgets/LinkWidget/LinkWidgetClass';

Scrivito.provideEditingConfig('LinkContainerWidget', {
  title: 'Link List',
  description: 'A widget which lists links.',
  thumbnail: `/${linkListWidgetIcon}`,
  attributes: {
    headline: {
      title: 'Headline',
      description: 'Leave empty to not show a headline.',
    },
  },
  properties: [
    'headline',
  ],
  initialContent: {
    headline: 'Links headline',
    links: () => [
      new LinkWidget({ link: new Scrivito.Link({ title: 'Link 1', obj: Scrivito.Obj.root() }) }),
      new LinkWidget({ link: new Scrivito.Link({ title: 'Link 2', obj: Scrivito.Obj.root() }) }),
      new LinkWidget({ link: new Scrivito.Link({ title: 'Link 3', obj: Scrivito.Obj.root() }) }),
    ],
  },
});
