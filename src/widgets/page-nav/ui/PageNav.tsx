import Image from 'next/image'

const desktopNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#collections', label: 'Collections' },
  { href: '#about', label: 'About Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#blog', label: 'Blog' },
]

const mobileNavLinks = [
  { href: '#shop', label: 'Shop' },
  { href: '#collections', label: 'Collections' },
  { href: '#about', label: 'About Us' },
]

export const PageNav = () => {
  return (
    <nav className="relative z-20 h-10 w-full border-b-2 border-kiln-ink bg-kiln-paperDark font-medium uppercase tracking-[0.03em]">
      <Image
        src="/images/decor/nav-dots.png"
        alt=""
        width={42}
        height={12}
        className="absolute left-2 top-1/2 h-auto w-[42px] -translate-y-1/2"
      />

      {/* Mobile center links */}
      <div className="absolute left-[54px] right-[126px] top-1/2 flex -translate-y-1/2 items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-[10px] xl:hidden">
        {mobileNavLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop center links */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-[13px] xl:flex">
        {desktopNavLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile right links */}
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap text-[10px] xl:hidden">
        <a href="#cart" className="hover:underline">
          Cart
        </a>

        <a href="#account" className="hover:underline">
          User
        </a>

        <a href="#login" className="hover:underline">
          Log In
        </a>
      </div>

      {/* Desktop right links */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-7 text-[13px] xl:flex">
        <a href="#cart" className="hover:underline">
          Cart
        </a>

        <a href="#account" className="hover:underline">
          User
        </a>

        <a href="#login" className="hover:underline">
          Log In
        </a>
      </div>
    </nav>
  )
}
