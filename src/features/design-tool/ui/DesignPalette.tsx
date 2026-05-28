'use client'

import { tiles } from '@/entities/tile/model/data'
import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { selectTile } from '@/features/design-tool/model/designToolSlice'
import { selectSelectedTileId } from '@/features/design-tool/model/designToolSelectors'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

export function DesignPalette() {
  const dispatch = useAppDispatch()
  const selectedTileId = useAppSelector(selectSelectedTileId)

  return (
    <section className="text-[#111111]">
      <h3 className="mb-2 text-lg font-black uppercase">Design Palette</h3>

      <div className="grid grid-cols-4 gap-2">
        {tiles.map((tile) => {
          const isSelected = selectedTileId === tile.id

          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => dispatch(selectTile(tile.id))}
              className={`border-2 border-[#111111] bg-[#f6eedc] p-2 shadow-[2px_2px_0_#111111] ${
                isSelected ? 'ring-4 ring-[#5fa792]' : ''
              }`}
              aria-pressed={isSelected}
            >
              <TilePreview
                tile={tile}
                className="mx-auto size-12 rounded-none border-2 border-[#111111] shadow-none"
              />

              <span className="mt-2 block text-[10px] font-black uppercase leading-tight">
                {tile.name}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
