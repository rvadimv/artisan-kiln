import type { ChangeEvent } from 'react'

type AreaSqFtInputProps = {
  value: number
  onChange: (value: number) => void
}

export const AreaSqFtInput = ({ value, onChange }: AreaSqFtInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)

    if (Number.isNaN(nextValue)) {
      return
    }

    onChange(Math.max(1, nextValue))
  }

  return (
    <input
      min={1}
      type="number"
      value={value}
      onChange={handleInputChange}
      className="w-8 bg-transparent text-center text-[10px] font-black outline-none md:w-16 md:text-base"
      aria-label="Square feet"
    />
  )
}
