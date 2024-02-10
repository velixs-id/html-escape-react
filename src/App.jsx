import Header from "./components/Header";

import RoutersIndex from "./routes";

export default function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Header />

        <RoutersIndex />
      </div>
    </>
  )
}
