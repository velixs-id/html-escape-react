import LinkComp from "./Link";

export default function Header() {
  return (
    <>
      <header className="mb-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              HTML Escaper
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">A simple HTML Escaper 🎉</p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <LinkComp text="Escape" to="/" />
            <LinkComp text="Unescape" to="/unescape" />
          </div>
        </div>
      </header>
    </>
  );
}
