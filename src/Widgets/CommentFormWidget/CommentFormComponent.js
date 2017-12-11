Scrivito.provideComponent('CommentFormWidget', ({ widget }) =>
  <div>
    <header className="major last">
      <Scrivito.ContentTag tag="h2" content={ widget } attribute="headline" />
    </header>

    <Scrivito.ContentTag tag="p" content={ widget } attribute="info" />

    <form method="post" action="#">
      <div className="row">
        <div className="6u 12u(mobilep)">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="6u 12u(mobilep)">
          <input type="email" name="email" placeholder="Email" />
        </div>
      </div>
      <div className="row">
        <div className="12u">
          <textarea name="message" placeholder="Message" rows="6"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="12u">
          <ul className="actions">
            <li><input type="submit"
              value={ widget.get('buttonText') || 'send message' } />
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
);
