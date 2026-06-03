import { DesignGrid } from '@/features/design-tool/ui/DesignGrid'
import { DesignPalette } from '@/features/design-tool/ui/DesignPalette'

export const DesignWorkspace = () => {
  return (
    <section className="hidden w-[520px] text-kiln-ink xl:block">
      <div className="mt-[34px] rounded-[3px] border-2 border-kiln-ink bg-kiln-paperDark">
        <div className="grid grid-cols-[400px_116px]">
          <div>
            <div className="border-b-2 border-kiln-ink bg-kiln-paperDark pb-[15px] pt-[10px] text-center">
              <h2 className="text-xl font-medium uppercase leading-none">Visualize Your Order:</h2>

              <p className="mt-1 text-sm font-medium leading-tight">
                Drag and drop tiles here to create patterns.
              </p>
            </div>
            <DesignGrid />
            <p className="p-2 text-[11px] font-medium uppercase leading-tight">
              Click a cell to place the selected tile. Right-click to clear.
            </p>
          </div>

          <DesignPalette />
        </div>
      </div>
    </section>
  )
}
