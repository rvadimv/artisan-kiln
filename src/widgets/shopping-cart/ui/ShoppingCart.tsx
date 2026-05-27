'use client'

import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { changeAreaSqFt, decreaseAreaSqFt, increaseAreaSqFt } from '@/features/cart/model/cartSlice'
import { selectCartItemsWithTiles, selectCartTotals } from '@/features/cart/model/cartSelectors'
import { AreaSqFtInput } from '@/features/cart/ui/AreaSqFtInput'
import { formatCurrency } from '@/shared/lib/formatCurrency'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

const cartGridColumns =
  'grid-cols-[1.08fr_0.68fr_0.76fr_0.82fr_0.96fr] md:grid-cols-[1.3fr_1fr_0.9fr_0.9fr_0.9fr]'

export const ShoppingCart = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItemsWithTiles)
  const totals = useAppSelector(selectCartTotals)

  return (
    <section className="w-full text-[#111111]">
      <h2 className="mb-2 text-xl font-black uppercase tracking-tight md:text-2xl">
        Shopping Cart & Design Tool
      </h2>

      <div className="w-full border-2 border-[#111111] bg-[#f6eedc]">
        <div
          className={`grid ${cartGridColumns} border-b-2 border-[#111111] text-center text-[8px] font-black uppercase leading-tight md:text-sm`}
        >
          <div className="border-r-2 border-[#111111] px-1 py-2 md:px-2 md:py-3">
            Tile Collection
          </div>

          <div className="border-r-2 border-[#111111] px-1 py-2 md:px-2 md:py-3">Item</div>

          <div className="border-r-2 border-[#111111] px-1 py-2 md:px-2 md:py-3">
            Quantity
            <br />
            <span className="text-[7px] md:text-xs">(sq. ft.)</span>
          </div>

          <div className="border-r-2 border-[#111111] px-1 py-2 md:px-2 md:py-3">
            Unit Price
            <br />
            <span className="text-[7px] md:text-xs">($)</span>
          </div>

          <div className="px-1 py-2 md:px-2 md:py-3">Actions</div>
        </div>

        <ul>
          {cartItems.map(({ tileId, areaSqFt, tile }) => {
            if (!tile) {
              return null
            }

            return (
              <li
                key={tileId}
                className={`grid ${cartGridColumns} border-b-2 border-[#111111] last:border-b-0`}
              >
                <div className="flex flex-col items-center justify-center gap-1 border-r-2 border-[#111111] p-1 text-center md:gap-2 md:p-3">
                  <TilePreview
                    tile={tile}
                    className="size-8 rounded-none border-2 border-[#111111] shadow-none md:size-14"
                  />

                  <p className="text-[8px] font-black uppercase leading-tight md:text-sm">
                    {tile.name}
                  </p>
                </div>

                <div className="flex items-center justify-center border-r-2 border-[#111111] p-1 md:p-3">
                  <TilePreview
                    tile={tile}
                    className="size-9 rounded-none border-0 shadow-none md:size-20"
                  />
                </div>

                <div className="flex items-center justify-center border-r-2 border-[#111111] p-1 md:p-3">
                  <div className="flex items-center gap-0.5 text-[10px] font-black md:gap-2 md:text-lg">
                    <span>[</span>

                    <AreaSqFtInput
                      value={areaSqFt}
                      onChange={(nextAreaSqFt) =>
                        dispatch(
                          changeAreaSqFt({
                            tileId,
                            areaSqFt: nextAreaSqFt,
                          }),
                        )
                      }
                    />

                    <span>]</span>
                  </div>
                </div>

                <div className="flex items-center justify-center border-r-2 border-[#111111] p-1 md:p-3">
                  <p className="text-[9px] font-black md:text-lg">
                    [ {formatCurrency(tile.pricePerSqFt)} ]
                  </p>
                </div>

                <div className="flex items-center justify-center p-1 md:p-3">
                  <div className="flex items-center justify-center gap-1 md:gap-3">
                    <button
                      type="button"
                      onClick={() => dispatch(increaseAreaSqFt(tileId))}
                      className="flex flex-col items-center text-[7px] font-black uppercase md:text-xs"
                      aria-label={`Add one square foot of ${tile.name}`}
                    >
                      <span className="grid size-5 place-items-center rounded border-2 border-[#111111] bg-[#5fa792] text-sm leading-none shadow-[1px_1px_0_#111111] md:size-8 md:text-xl md:shadow-[2px_2px_0_#111111]">
                        +
                      </span>
                      Add
                    </button>

                    <button
                      type="button"
                      onClick={() => dispatch(decreaseAreaSqFt(tileId))}
                      className="flex flex-col items-center text-[7px] font-black uppercase md:text-xs"
                      aria-label={`Remove one square foot of ${tile.name}`}
                    >
                      <span className="grid size-5 place-items-center rounded border-2 border-[#111111] bg-[#c96f4a] text-sm leading-none shadow-[1px_1px_0_#111111] md:size-8 md:text-xl md:shadow-[2px_2px_0_#111111]">
                        −
                      </span>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_330px]">
        <button
          type="button"
          className="inline-flex w-fit items-center gap-2 border-2 border-[#111111] bg-[#f6eedc] px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#111111] md:gap-3 md:px-4 md:text-base"
        >
          <span className="text-xl leading-none md:text-2xl">+</span>

          <span className="text-left leading-tight">
            Add new tile
            <br />
            to cart
          </span>
        </button>

        <div className="ml-auto w-full max-w-[310px] space-y-1 text-right text-sm font-black uppercase md:max-w-none md:text-lg">
          <div className="grid grid-cols-[1fr_145px] items-center gap-2 md:grid-cols-[1fr_170px] md:gap-3">
            <span>Subtotal:</span>
            <span className="border-2 border-[#111111] bg-[#f6eedc] px-2 py-1 text-left md:px-3">
              [ {formatCurrency(totals.subtotal)} ]
            </span>
          </div>

          <div className="grid grid-cols-[1fr_145px] items-center gap-2 md:grid-cols-[1fr_170px] md:gap-3">
            <span>Shipping:</span>
            <span className="border-2 border-[#111111] bg-[#f6eedc] px-2 py-1 text-left md:px-3">
              [ {totals.shipping === 0 ? 'Free' : formatCurrency(totals.shipping)} ]
            </span>
          </div>

          <div className="grid grid-cols-[1fr_145px] items-center gap-2 md:grid-cols-[1fr_170px] md:gap-3">
            <span>Grand Total:</span>
            <span className="border-2 border-[#111111] bg-[#f6eedc] px-2 py-1 text-left md:px-3">
              [ {formatCurrency(totals.grandTotal)} ]
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
