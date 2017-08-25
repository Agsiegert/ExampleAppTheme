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
      <h1 className="h3 text-center">Login to scrivito</h1>
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
          <input type="checkbox" value=""/> Remember me next time
        </label>
      </div>
      <button className="btn btn-primary btn-block">Log me in now</button>
      <br/>
      <a href="#">Lost your password?</a>
      <a href="#">No account? Register here.</a>
    </div>
  </div>
);

export default LoginWidget;
