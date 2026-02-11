export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Traverse Ridge Digital Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Traverse Ridge Digital
            </h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="/apps" className="text-gray-700 hover:text-gray-900 font-medium">
                  Apps
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
