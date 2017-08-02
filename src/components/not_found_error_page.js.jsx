function NotFoundErrorPage() {
  return <Scrivito.React.NotFoundErrorPage>
    <div>
      <h1>OOOPS</h1>
      <div>The page you were looking for doesn&apos;t exist.</div>
    </div>
  </Scrivito.React.NotFoundErrorPage>;
}

export default Scrivito.React.connect(NotFoundErrorPage);
