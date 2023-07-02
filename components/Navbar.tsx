import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm lowercase font-mono">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex px-2 lg:px-0">
            <h1 className="text-lg flex-shrink-0 flex items-center transition-colors hover:text-rose-500 hover:underline">
              DAAP Study Resources
            </h1>
          </Link>
          <span>
            Made by <Link href="https://twitter.com/krishstwt" className="transition-colors hover:text-rose-500 hover:underline">krishstwt</Link>
          </span>
        </div>
      </div>
    </header>
  )
}
