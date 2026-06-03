'use client'

import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { clearCell, placeTile } from '@/features/design-tool/model/designToolSlice'
import { selectDesignGridCells } from '@/features/design-tool/model/designToolSelectors'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

export const DesignGrid = () => {
  const dispatch = useAppDispatch()
  const cells = useAppSelector(selectDesignGridCells)

  return (
    <section className={'flex justify-center'}>
      <div className="grid size-[364px] grid-cols-6 grid-rows-6 overflow-hidden border-l border-kiln-ink bg-kiln-paperDark">
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
    </section>
  )
}
