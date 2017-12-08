Scrivito.provideComponent('Homepage', ({ page }) =>
  <div>
    <body>
      { /* Header */ }
        <div id="header">
          <Scrivito.ContentTag tag="span" className="logo icon" content={ page } attribute="icon" />
          <Scrivito.ContentTag content={ page } attribute="header" />
        </div>

      { /*  Main */ }
        <div id="main">

          <header className="major container 75%">
            <Scrivito.ContentTag content={ page } attribute="banner" />
          </header>

          <div className="box alt container">
              <Scrivito.ContentTag content={ page } attribute="body" />
          </div>

          <footer className="major container 75%">
            <Scrivito.ContentTag content={ page } attribute="banner2" />
            <ul className="actions">
              <li><a href="#" className="button">Join our crew</a></li>
            </ul>
          </footer>

        </div>

      { /* Footer */ }
        <div id="footer">
          <div className="container 75%">

            <header className="major last">
              <h2>Questions or comments?</h2>
            </header>

            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor
            orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.</p>

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
                    <li><input type="submit" value="Send Message" /></li>
                  </ul>
                </div>
              </div>
            </form>

            <ul className="icons">
              <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
              <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
            </ul>

            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>

          </div>
        </div>

      { /* Scripts */ }
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/skel.min.js"></script>
        <script src="assets/js/util.js"></script>
        { /* [if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif] */ }
        <script src="assets/js/main.js"></script>

    </body>
  </div>
);
