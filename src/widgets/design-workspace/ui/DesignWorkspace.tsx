import { DesignGrid } from '@/features/design-tool/ui/DesignGrid'
import { DesignPalette } from '@/features/design-tool/ui/DesignPalette'

export const DesignWorkspace = () => {
  return (
    <section className="hidden w-full text-kiln-ink xl:block">
      <h2 className="mb-2 text-xl font-bold uppercase tracking-tight">Interactive Design Tool</h2>

      <div className="border-2 border-kiln-ink bg-kiln-paper p-4 shadow-kiln">
        <div className="grid grid-cols-[1fr_104px] gap-3">
          <DesignGrid />
          <DesignPalette />
        </div>
      </div>
    </section>
  )
}
