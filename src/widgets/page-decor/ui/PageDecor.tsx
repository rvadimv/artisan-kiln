import Image from 'next/image'

export const PageDecor = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Desktop */}

      <Image
        src="/images/decor/desktop-top-decor.png"
        alt=""
        width={224}
        height={74}
        priority
        className="absolute left-[68px] top-0 hidden h-auto w-[224px] max-w-none 2xl:block"
      />

      <Image
        src="/images/decor/desktop-top-decor.png"
        alt=""
        width={224}
        height={74}
        priority
        className="absolute right-[58px] top-0 hidden h-auto w-[224px] max-w-none -scale-x-100 2xl:block"
      />
      <Image
        src="/images/decor/desktop-left-decor2.png"
        alt=""
        width={58}
        height={760}
        priority
        className="absolute left-0 top-0 hidden h-[calc(100%_-_60px)] w-auto max-w-none 2xl:block"
      />

      <Image
        src="/images/decor/desktop-right-decor.png"
        alt=""
        width={58}
        height={760}
        className="absolute right-0 top-0 hidden h-[calc(100%_-_60px)] w-auto max-w-none 2xl:block"
      />

      {/* Mobile */}
      <div
        aria-hidden="true"
        className="absolute left-[-17px] top-0 h-[100px] w-[58px] overflow-hidden xl:hidden"
      >
        <Image
          src="/images/decor/desktop-left-decor2.png"
          alt=""
          width={58}
          height={760}
          priority
          className="h-auto w-[58px] max-w-none"
        />
      </div>

      <div className="absolute right-[-17px] top-0 h-[100px] w-[58px] overflow-hidden xl:hidden">
        <Image
          src="/images/decor/desktop-right-decor.png"
          alt=""
          width={58}
          height={760}
          className="h-auto w-[58px] max-w-none"
        />
      </div>
    </div>
  )
}
