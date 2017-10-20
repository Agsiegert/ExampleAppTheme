import contactFormWidgetIcon from 'assets/images/contact_form_widget.svg';

const ContactFormWidget = Scrivito.createWidgetClass({
  name: 'ContactFormWidget',
  attributes: {
    agreementText: 'string',
    buttonText: 'string',
  },
});

Scrivito.provideEditingConfig(ContactFormWidget, {
  title: 'Contact Form',
  description: 'A widget with contact form.',
  thumbnail: `/${contactFormWidgetIcon}`,
  attributesConfig: {
    agreementText: {
      title: 'Agreement Text',
      description: 'What should the agreement say?',
    },
    buttonText: {
      title: 'Button Text',
      description: 'What should the submit button say? Default: send message',
    },
  },
  generalProperties: [
    'agreementText',
    'buttonText',
  ],
});

Scrivito.provideComponent(ContactFormWidget, ({ widget }) =>
  <div className="row floating-label">
    <form>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contactName">Your name</label>
          <input
            className="form-control input-lg"
            id="contactName"
            placeholder="Name"
            type="text"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contactFamilyName">Family name</label>
          <input
            className="form-control input-lg"
            id="contactFamilyName"
            placeholder="Family name"
            type="text"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contactEmail">Email address</label>
          <input
            className="form-control input-lg"
            id="contactEmail"
            placeholder="Email"
            type="email"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contactCompany">Company</label>
          <input
            className="form-control input-lg"
            id="contactCompany"
            placeholder="Company"
            type="text"
          />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="form-group">
          <label htmlFor="contactMessage">Message</label>
          <textarea
            className="form-control input-lg"
            rows="3"
            id="contactMessage"
            placeholder="Your Message..."
          />
        </div>
        {
          widget.get('agreementText') && <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              { widget.get('agreementText') }
            </label>
          </div>
        }
        <button className="btn btn-primary btn-block">
          { widget.get('buttonText') || 'send message' }
        </button>
      </div>
    </form>
  </div>
);

export default ContactFormWidget;
