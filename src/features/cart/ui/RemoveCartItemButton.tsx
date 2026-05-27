type RemoveCartItemButtonProps = {
  onRemove: () => void
}

export const RemoveCartItemButton = ({ onRemove }: RemoveCartItemButtonProps) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="text-sm text-stone-400 underline-offset-4 hover:text-red-300 hover:underline"
    >
      Remove
    </button>
  )
}
