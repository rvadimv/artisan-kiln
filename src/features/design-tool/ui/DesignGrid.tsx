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
    <section className="text-[#111111]">
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-black uppercase">Design Grid</h3>
          <p className="text-xs font-bold uppercase">Selected: {selectedTile?.name ?? 'None'}</p>
        </div>

        <p className="text-xs font-bold uppercase">6 × 6</p>
      </div>

      <div className="grid aspect-square grid-cols-6 border-2 border-[#111111] bg-[#f6eedc]">
        {cells.map(({ tileId, tile }, index) => (
          <button
            // grid index is stable here
            key={index}
            type="button"
            onClick={() => dispatch(placeTile(index))}
            onContextMenu={(event) => {
              event.preventDefault()
              dispatch(clearCell(index))
            }}
            className="grid place-items-center border border-[#111111] bg-[#eadfca]"
            aria-label={`Place selected tile in cell ${index + 1}`}
          >
            {tile ? (
              <TilePreview tile={tile} className="size-full rounded-none border-0 shadow-none" />
            ) : (
              <span className="text-[10px] font-black text-[#111111]/30">{tileId}</span>
            )}
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs font-bold uppercase">
        Click a cell to place the selected tile. Right-click to clear.
      </p>
    </section>
  )
}
