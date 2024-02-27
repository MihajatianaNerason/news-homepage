const Nav = () => {
  return (
    <>
      <header>
        <di id="logo">
          <img src="../src/assets/images/logo.svg" alt="Logo W." />
        </di>
        <div id="menuBurger">
          <img src="../src/assets/images/burger.png" alt="Menu Burger" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
