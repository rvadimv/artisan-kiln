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
    <section className="border-l-2 border-kiln-ink bg-kiln-paperDark text-kiln-ink">
      <h3 className="border-b-2 border-kiln-ink px-1 py-2 text-center text-[15px] font-medium uppercase leading-none">
        Design Palette
      </h3>

      <div className="grid grid-cols-2 gap-[8px] p-[8px]">
        {tiles.map((tile) => {
          const isSelected = selectedTileId === tile.id

          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => dispatch(selectTile(tile.id))}
              className="group grid h-[51px] w-[49px] place-items-center"
              aria-pressed={isSelected}
              aria-label={`Select ${tile.name}`}
            >
              <TilePreview
                imageUrl={tile.previewImageUrl}
                className={`h-[51px] w-[49px] rounded-[3px] border-2 shadow-none transition-colors ${
                  isSelected ? 'border-[#9aa0ad]' : 'border-kiln-ink group-hover:border-[#9aa0ad]'
                }`}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
}
