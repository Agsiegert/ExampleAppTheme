import Pic01 from "../../assets/images/pic01.jpg";
import Pic02 from "../../assets/images/pic02.jpg";
import Pic03 from "../../assets/images/pic03.jpg";

Scrivito.provideComponent('Homepage', ({ page }) =>
    <div>
      <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
      <div id="header">
        <span className="logo icon fa-paper-plane-o"></span>
        <h1>Hi. This is Directive.</h1>
        <p>A responsive HTML5 + CSS3 site template designed by
          <a href="http://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the
          <a href="http://html5up.net/license">Creative Commons license</a>.</p>
      </div>

      <div id="main">

        <header className="major container 75%">
          <h2>We conduct experiments that
          <br />
          may or may not seriously
          <br />
          break the universe</h2>
        </header>

        <div className="box alt container">
          <section className="feature left">
            <a href="#" className="image icon fa-signal">
              <img src={ Pic01 } alt="" /></a>
            <div className="content">
              <h3>The First Thing</h3>
              <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci
                penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi
                quis fusce lacus.</p>
            </div>
          </section>
          <section className="feature right">
            <a href="#" className="image icon fa-code"><img src={ Pic02 } alt="" /></a>
            <div className="content">
              <h3>The Second Thing</h3>
              <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci
               penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi
                quis fusce lacus.</p>
            </div>
          </section>
          <section className="feature left">
            <a href="#" className="image icon fa-mobile"><img src={ Pic03 } alt="" /></a>
            <div className="content">
              <h3>The Third Thing</h3>
              <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci
               penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi
                quis fusce lacus.</p>
            </div>
          </section>
        </div>

        <footer className="major container 75%">
          <h3>Get shady with science</h3>
          <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci
           penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.</p>
          <ul className="actions">
            <li><a href="#" className="button">Join our crew</a></li>
          </ul>
        </footer>
      </div>
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
