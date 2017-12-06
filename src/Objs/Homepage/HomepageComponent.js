Scrivito.provideComponent('Homepage', ({ page }) =>
    <div>
      <div id="header">
        <span className="logo icon fa-paper-plane-o"></span>
        <Scrivito.ContentTag tag="h1" content={ page } attribute="headerline" />
        <Scrivito.ContentTag content={ page } attribute="headerlineContent" />
      </div>

      <div id="main">

        <header className="major container 75%">
          <Scrivito.ContentTag tag="h3" content={ page } attribute="banner" />
        </header>

        <div className="box alt container">
          <section className="feature left">
            <a href="#" className="image icon fa-signal">
              <Scrivito.ImageTag content={ page } attribute="image1" />
            </a>
            <div className="content">
              <Scrivito.ContentTag tag="h3" content={ page }
                attribute="feature1Headline"
              />
              <Scrivito.ContentTag tag="p" content={ page } attribute="feature1Content" />
            </div>
          </section>
          <section className="feature right">
            <a href="#" className="image icon fa-code">
              <Scrivito.ImageTag content={ page } attribute="image2" />
            </a>
            <div className="content">
              <Scrivito.ContentTag tag="h3" content={ page }
                attribute="feature2Headline"
              />
              <Scrivito.ContentTag tag="p" content={ page } attribute="feature2Content" />
            </div>
          </section>
          <section className="feature left">
            <a href="#" className="image icon fa-mobile">
              <Scrivito.ImageTag content={ page } attribute="image3" />
            </a>
            <div className="content">
              <Scrivito.ContentTag tag="h3" content={ page }
                attribute="feature3Headline"
              />
              <Scrivito.ContentTag tag="p" content={ page } attribute="feature3Content" />
            </div>
          </section>
        </div>

        <footer className="major container 75%">
          <Scrivito.ContentTag tag="h3" content={ page } attribute="banner2" />
          <Scrivito.ContentTag tag="p" content={ page } attribute="banner2Content" />
          <ul className="actions">
            <li><a href="#" className="button">Join our crew</a></li>
          </ul>
        </footer>
      </div>
      <div id="footer">
        <div className="container 75%">
          <header className="major last">
            <Scrivito.ContentTag tag="h2" content={ page } attribute="footerTitle" />
          </header>
          <Scrivito.ContentTag tag="p" content={ page } attribute="footerContent" />
          <form method="post" action="#">
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
             <label>Don’t fill this out: <input name="bot-field" /></label>
            </div>
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
            <li><a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span></a>
            </li>
            <li><a href="#" className="icon fa-facebook">
              <span className="label">Facebook</span></a>
            </li>
            <li><a href="#" className="icon fa-instagram">
              <span className="label">Instagram</span></a>
            </li>
            <li><a href="#" className="icon fa-github">
              <span className="label">Github</span></a>
            </li>
            <li><a href="#" className="icon fa-dribbble">
              <span className="label">Dribbble</span></a>
            </li>
          </ul>

          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved.</li><li>Design:
            <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>

        </div>
      </div>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/skel.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
);
