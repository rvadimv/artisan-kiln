'use client'

import { tiles } from '@/entities/tile/model/data'
import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { selectTile } from '@/features/design-tool/model/designToolSlice'
import { selectSelectedTileId } from '@/features/design-tool/model/designToolSelectors'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

export const DesignPalette = () => {
  const dispatch = useAppDispatch()
  const selectedTileId = useAppSelector(selectSelectedTileId)

  return (
    <section className="text-kiln-ink">
      <h3 className="mb-2 text-lg font-bold uppercase leading-none">Design Palette</h3>

      <div className="grid grid-cols-1 gap-2">
        {tiles.map((tile) => {
          const isSelected = selectedTileId === tile.id

          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => dispatch(selectTile(tile.id))}
              className={`border-2 border-kiln-ink bg-kiln-paper p-2 shadow-kiln-sm ${
                isSelected ? 'ring-4 ring-kiln-mint' : ''
              }`}
              aria-pressed={isSelected}
            >
              <TilePreview
                imageUrl={tile.previewImageUrl}
                className="mx-auto size-14 rounded-md border-2 border-kiln-ink shadow-none"
              />

              <span className="mt-1 block text-center text-[10px] font-bold uppercase leading-tight">
                {tile.name}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
