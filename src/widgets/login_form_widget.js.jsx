const LoginFormWidget = Scrivito.createWidgetClass({
  name: 'LoginFormWidget',
});

Scrivito.registerClass('LoginFormWidget', LoginFormWidget);

Scrivito.provideUiConfig(LoginFormWidget, {
  title: 'Login Form',
  description: 'A widget with login form.',
});

Scrivito.provideComponent(LoginFormWidget, () =>
  <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div className="box-login floating-label">
      <h1 className="h3 text-center">Login</h1>
      <div className="form-group">
        <label htmlFor="loginUsername">Your username</label>
        <input
            className="form-control input-lg"
            id="loginUsername"
            placeholder="Username"
            type="text"
          />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Your password</label>
        <input
            className="form-control input-lg"
            id="loginPassword"
            placeholder="Password"
            type="password"
          />
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" /> Remember me next time
        </label>
      </div>
      <button className="btn btn-primary btn-block">Log me in now</button>
      <br/>
      <Scrivito.LinkTag to={ Scrivito.currentPage() }>
        Lost your password?
      </Scrivito.LinkTag>
      <Scrivito.LinkTag to={ Scrivito.currentPage() }>
        No account? Register here.
      </Scrivito.LinkTag>
    </div>
  </div>
);

export default LoginFormWidget;
