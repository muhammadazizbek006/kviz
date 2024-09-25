import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Success from "./pages/Success";

// components
import Page from "./Page";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const totalPage = 10;
  const pageRef = useRef();
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    if (pageRef) {
      pageRef.current.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <Router>
      <Routes>
        {/* --- HOME --- */}
        <Route
          index
          path="/"
          element={
            <div className="relative min-h-screen flex flex-col">
              <Header />

              {/* main */}
              <main className="container flex-1 py-4 overflow-y-auto">
                <div
                  ref={pageRef}
                  className="h-full overflow-y-auto scroll-hidden pb-12"
                >
                  <Page
                    page={page}
                    maxPage={maxPage}
                    updatePage={(number) => setPage(number)}
                    updateMaxPage={(number) => setMaxPage(number)}
                  />
                </div>
              </main>

              {page !== 10 && (
                <Footer
                  className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50"
                  page={page}
                  maxPage={maxPage}
                  totalPage={totalPage}
                  updatePage={(number) => setPage(number)}
                />
              )}
            </div>
          }
        />

        {/* --- SUCCESS --- */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
