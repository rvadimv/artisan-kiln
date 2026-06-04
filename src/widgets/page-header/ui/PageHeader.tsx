import Image from 'next/image'

export const PageHeader = () => {
  return (
    <header className="mb-6 pt-3 text-center xl:mb-8 xl:pt-8">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/images/decor/header-bank-icon.png"
          alt=""
          width={58}
          height={70}
          className="hidden h-auto w-[48px] xl:block"
        />

        <h1 className="font-display text-[34px] font-medium uppercase leading-none tracking-[0.03em] xl:text-5xl xl:tracking-[0.04em]">
          Ceramic Tile Order Form
        </h1>

        <Image
          src="/images/decor/header-fireplace-icon.png"
          alt=""
          width={58}
          height={70}
          className="hidden h-auto w-[48px] xl:block"
        />
      </div>

      <div className="mt-2 flex items-center justify-center gap-2 xl:gap-3">
        <Image
          src="/images/decor/slogan-left-tiles.png"
          alt=""
          width={111}
          height={35}
          className="h-auto w-[72px] xl:w-[82px]"
        />

        <p className="text-xl font-medium uppercase tracking-[0.03em] xl:text-2xl">
          The Artisan Kiln
        </p>

        <Image
          src="/images/decor/slogan-right-tiles.png"
          alt=""
          width={111}
          height={35}
          className="h-auto w-[72px] xl:w-[82px]"
        />
      </div>
    </header>
  )
}
