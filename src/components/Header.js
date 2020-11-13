const Header = () => {
return (
    <div>
        <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
          <div className="flex justify-between">
            <a href="/" className="flex items-center p-2 mr-4 no-underline">
              <img alt="" className="max-h-l4 w-auto mb-2 ml-10" src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifGCrBRMkBjIwXs1M3EMoAJtliAoh...Bj...fU9PExevg9C3ktKMcs8" />
            </a>
            <a data-toggle="toggle-nav" data-target="#nav-items" href="/"
              className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
              <i data-feather="menu"></i>
            </a>
          </div>
          <div id="nav-items" className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
            <a href="#home" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Início</a>
            <a href="#features" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Casos</a>
            <a href="#news" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Notícias</a>
            <a href="#blog" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Prevenção</a>
            <a href="/" className="button bg-white black fw-300 no-underline mx-5">Entrar</a>
          </div>
        </nav>
    </div>
)
}

export default Header;