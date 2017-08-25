const LoginWidget = Scrivito.createWidgetClass({
  name: 'LoginWidget',
});

Scrivito.registerClass('LoginWidget', LoginWidget);

Scrivito.provideUiConfig(LoginWidget, {
  title: 'Login',
  description: 'A widget with login form.',
});

Scrivito.provideComponent(LoginWidget, () =>
  <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div className="box-login floating-label">
      <h1 className="h3 text-center">Login</h1>
      <div className="form-group">
        <label>Your username</label>
        <input
            className="form-control input-lg"
            id="exampleInputName1"
            placeholder="username"
            type="text"
          />
      </div>
      <div className="form-group">
        <label>Your email</label>
        <input
            className="form-control input-lg"
            id="exampleInputEmail1"
            placeholder="email"
            type="email"
          />
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" /> Remember me next time
        </label>
      </div>
      <button className="btn btn-primary btn-block">Log me in now</button>
      <br/>
      <Scrivito.React.Link to={ Scrivito.currentPage() }>
        Lost your password?
      </Scrivito.React.Link>
      <Scrivito.React.Link to={ Scrivito.currentPage() }>
        No account? Register here.
      </Scrivito.React.Link>
    </div>
  </div>
);

export default LoginWidget;
