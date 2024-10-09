import { Suspense } from "react"
import Header from "../Header/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;