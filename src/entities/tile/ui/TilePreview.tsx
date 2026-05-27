import type { Tile } from '@/entities/tile/model/types'

type TilePreviewProps = {
  tile: Tile
  className?: string
}

export const TilePreview = ({ tile, className }: TilePreviewProps) => {
  return (
    <div
      aria-label={`${tile.name} tile pattern`}
      className={className}
      style={{ backgroundColor: '#ccc' }}
    />
    /*<img src={tile.imageUrl} alt={`${tile.name} tile pattern`} />*/
  )
}
