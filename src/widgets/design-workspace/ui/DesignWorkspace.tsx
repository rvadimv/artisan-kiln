import { DesignGrid } from '@/features/design-tool/ui/DesignGrid'
import { DesignPalette } from '@/features/design-tool/ui/DesignPalette'

export function DesignWorkspace() {
  return (
    <section className="hidden w-full text-[#111111] lg:block">
      <h2 className="mb-2 text-xl font-black uppercase tracking-tight md:text-2xl">
        Interactive Design Tool
      </h2>

      <div className="space-y-5 border-2 border-[#111111] bg-[#f6eedc] p-4 shadow-[4px_4px_0_#111111]">
        <DesignGrid />
        <DesignPalette />
      </div>
    </section>
  )
}
