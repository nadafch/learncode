import "../style/Layout.css";

function Layout({children}) {
  return (
    <div id="layout">
      {children}
    </div>
  )
}

export default Layout;