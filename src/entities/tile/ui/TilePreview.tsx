import Image from 'next/image'

type TilePreviewProps = {
  imageUrl?: string
  className?: string
}

export const TilePreview = ({ imageUrl, className }: TilePreviewProps) => {
  return (
    <div className={`overflow-hidden bg-[#ccc] ${className ?? ''}`}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          width={96}
          height={96}
          className="block h-full w-full object-cover"
        />
      ) : null}
    </div>
  )
}
