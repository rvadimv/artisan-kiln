'use client'

import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { clearCell, placeTile } from '@/features/design-tool/model/designToolSlice'
import {
  selectDesignGridCells,
  selectSelectedTile,
} from '@/features/design-tool/model/designToolSelectors'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

export const DesignGrid = () => {
  const dispatch = useAppDispatch()
  const selectedTile = useAppSelector(selectSelectedTile)
  const cells = useAppSelector(selectDesignGridCells)

  return (
    <section className="min-w-0 text-kiln-ink">
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold uppercase leading-none">Design Grid</h3>

          <p className="mt-1 text-xs font-bold uppercase">
            Selected: {selectedTile?.name ?? 'None'}
          </p>
        </div>

        <p className="text-xs font-bold uppercase">6 × 6</p>
      </div>

      <div className="grid aspect-square w-full grid-cols-6 grid-rows-6 overflow-hidden border-2 border-kiln-ink bg-kiln-paperDark">
        {cells.map(({ tile }, index) => (
          <button
            key={index}
            type="button"
            onClick={() => dispatch(placeTile(index))}
            onContextMenu={(event) => {
              event.preventDefault()
              dispatch(clearCell(index))
            }}
            className="relative min-h-0 min-w-0 overflow-hidden border-b border-r border-kiln-ink bg-kiln-paperDark"
            aria-label={`Place selected tile in cell ${index + 1}`}
          >
            {tile ? (
              <TilePreview
                imageUrl={tile.patternImageUrl}
                className="absolute inset-0 rounded-none border-0 shadow-none"
              />
            ) : null}
          </button>
        ))}
      </div>

      <p className="mt-2 text-[11px] font-bold uppercase leading-tight">
        Click a cell to place the selected tile. Right-click to clear.
      </p>
    </section>
  )
}
