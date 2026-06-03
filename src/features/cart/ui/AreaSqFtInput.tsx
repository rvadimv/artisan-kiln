import type { ChangeEvent } from 'react'

type AreaSqFtInputProps = {
  value: number
  onChange: (value: number) => void
}

export const AreaSqFtInput = ({ value, onChange }: AreaSqFtInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.valueAsNumber

    if (Number.isNaN(nextValue)) {
      return
    }

    onChange(Math.max(1, nextValue))
  }

  return (
    <input
      min={1}
      type="number"
      inputMode="numeric"
      value={value}
      onChange={handleInputChange}
      className="w-[3ch] bg-transparent text-center text-[16px] font-medium text-kiln-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      aria-label="Square feet"
    />
  )
}
