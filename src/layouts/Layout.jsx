import propTypes from "prop-types"
import { useState } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Sidebar from "../components/Sidebar/Sidebar"

const Layout = ( { children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function onCloseSidebar(){
        setSidebarOpen(false)
    }

    function onOpenSidebar(){
        setSidebarOpen(true)
    }

  return (
    <>
    <div className="flex h-screen overflow-hidden text-secondary bg-primary font-quicksand">
      <Sidebar sidebarOpen={sidebarOpen} onCloseSidebar={onCloseSidebar} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header onSidebarOpen={onOpenSidebar} />
        <main className="mb-5">
            <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
                {children}
            </div>
        </main>
        <Footer/>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: propTypes.node
}

export default Layout
