function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Elevate Your Style</h1>
        <p>
          At Tech Genius, we believe that fashion should be a
          reflection of your individuality. That's why we offer a curated
          selection of stylish and on-trend clothing and accessories that can
          help you elevate your personal style. Whether you're looking for the
          perfect statement piece or an everyday staple, our collection has
          something for everyone. Shop now and elevate your style with Tech
          Genius.
        </p>
      </div>

      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
