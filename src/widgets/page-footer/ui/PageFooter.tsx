import Image from 'next/image'

const desktopFooterLinks = [
  { href: '#terms', label: 'Terms of Service' },
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#shipping', label: 'Shipping Info' },
  { href: '#contact', label: 'Contact Us' },
]

export const PageFooter = () => {
  return (
    <footer className="relative z-10 mt-6 w-full text-center text-[12px] font-medium uppercase leading-tight xl:mt-8 xl:text-[13px]">
      {/* Mobile footer */}
      <nav className="pb-4 xl:hidden">
        <div className="flex justify-center gap-6">
          <a href="#terms" className="hover:underline hover:underline-offset-4">
            Terms
          </a>

          <a href="#contact" className="hover:underline hover:underline-offset-4">
            Contact
          </a>
        </div>
      </nav>

      {/* Desktop footer with bottom decor */}
      <div className="relative hidden min-h-[150px] overflow-hidden xl:block">
        <Image
          src="/images/decor/desktop-bottom-left-decor.png"
          alt=""
          width={520}
          height={120}
          className="pointer-events-none absolute bottom-0 left-0 h-auto w-[440px] max-w-none 2xl:w-[520px]"
        />

        <Image
          src="/images/decor/desktop-bottom-right-decor.png"
          alt=""
          width={520}
          height={120}
          className="pointer-events-none absolute bottom-0 right-0 h-auto w-[440px] max-w-none 2xl:w-[520px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[150px] max-w-[1258px] flex-col items-center justify-end px-4 pb-6">
          <nav className="flex items-center justify-center gap-2">
            {desktopFooterLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                <a href={link.href} className="hover:underline hover:underline-offset-4">
                  {link.label}
                </a>

                {index < desktopFooterLinks.length - 1 && <span>|</span>}
              </span>
            ))}
          </nav>

          <p className="mt-1">&copy; 2026 The Artisan Kiln. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
