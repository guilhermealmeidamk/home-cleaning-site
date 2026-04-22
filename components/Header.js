export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-10 px-10 brand-bg-secondary shadow-md">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/logop.png"
          alt="In Home Cleaning logo"
          className="h-16 w-auto"
          onError={(e) => { e.currentTarget.src = '/logo.svg' }}
        />
      </div>
    </header>
  )
}
