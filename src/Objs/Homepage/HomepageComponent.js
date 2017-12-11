Scrivito.provideComponent('Homepage', ({ page }) =>
  <div>
    <body>
      { /* Header */ }
        <div id="header">
          <Scrivito.ContentTag tag="span" className="logo" content={ page } attribute="icon" />
          <Scrivito.ContentTag content={ page } attribute="header" />
        </div>

      { /*  Main */ }
        <div id="main">
          <div className="box alt container">
              <Scrivito.ContentTag content={ page } attribute="body" />
          </div>
        </div>

      { /* Footer */ }
        <div id="footer">
          <div className="container 75%">
            <Scrivito.ContentTag content={ page } attribute="directiveFooter" />
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
