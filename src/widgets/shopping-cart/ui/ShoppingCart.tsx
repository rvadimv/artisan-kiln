'use client'

import { TilePreview } from '@/entities/tile/ui/TilePreview'
import { changeAreaSqFt, decreaseAreaSqFt, increaseAreaSqFt } from '@/features/cart/model/cartSlice'
import { selectCartItemsWithTiles, selectCartTotals } from '@/features/cart/model/cartSelectors'
import { AreaSqFtInput } from '@/features/cart/ui/AreaSqFtInput'
import { formatCurrency } from '@/shared/lib/formatCurrency'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'
import Image from 'next/image'

type ShoppingCartProps = {
  showTitle?: boolean
}

const cartColumns = 'grid-cols-[104px_76px_67px_67px_65px]'

const headerCellClass =
  'flex h-11 items-center justify-center border-r-2 border-kiln-ink bg-kiln-paperDark px-1.5 text-center text-[11px] font-bold uppercase leading-tight'

const headerCellClassLast =
  'flex h-11 items-center justify-center border-kiln-ink bg-kiln-paperDark px-1.5 text-center text-[11px] font-bold uppercase leading-tight'

const bodyCellClass =
  'flex h-[66px] items-center justify-center border-r-2 border-t-2 border-kiln-ink px-1.5 text-center last:border-r-0'

const bracketValueClass =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap text-[16px] font-medium'

const totalRowClass = 'grid grid-cols-[87px_68px] items-center'

const totalLabelClass = 'whitespace-nowrap px-1 text-right text-[13px] font-bold leading-none'

const totalValueClass =
  'flex h-[22px] items-center border-x-2 border-b-2 border-kiln-ink bg-kiln-paper px-1 text-left text-[11px] font-bold leading-none'

export const ShoppingCart = ({ showTitle = true }: ShoppingCartProps) => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItemsWithTiles)
  const totals = useAppSelector(selectCartTotals)

  return (
    <section className="mx-auto w-[382px] max-w-full text-kiln-ink xl:mx-0">
      {showTitle && (
        <h2 className="mb-2 text-xl font-bold uppercase tracking-tight">
          Shopping Cart & Design Tool
        </h2>
      )}

      <div className="overflow-hidden rounded-[3px] rounded-br-none bg-kiln-paper">
        <div className={`grid ${cartColumns} border-2 border-kiln-ink`}>
          <div className={headerCellClass}>Tile Collection</div>

          <div className={headerCellClass}>Item</div>

          <div className={headerCellClass}>
            <span>
              Quantity
              <br />
              <span className="text-[11px]">(sq. ft.)</span>
            </span>
          </div>

          <div className={headerCellClass}>
            <span>
              Unit Price
              <br />
              <span className="text-[11px]">($)</span>
            </span>
          </div>

          <div className={headerCellClassLast}>Actions</div>

          {cartItems.map(({ tileId, areaSqFt, tile }) => {
            if (!tile) {
              return null
            }

            return (
              <div key={tileId} className={`contents`}>
                <div className={bodyCellClass}>
                  <div className="mt-1 flex flex-col items-center justify-center gap-1">
                    <TilePreview
                      imageUrl={tile.previewImageUrl}
                      className="size-11 rounded-[3px] border-2 border-kiln-ink shadow-none"
                    />

                    <p className="text-[11px] font-bold uppercase leading-tight">{tile.name}</p>
                  </div>
                </div>

                <div className={bodyCellClass}>
                  <TilePreview imageUrl={tile.patternImageUrl} className="size-14 shadow-none" />
                </div>

                <div className={bodyCellClass}>
                  <div className={bracketValueClass}>
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

                <div className={bodyCellClass}>
                  <div className={bracketValueClass}>
                    <span>[</span>
                    <span>{formatCurrency(tile.pricePerSqFt)}</span>
                    <span>]</span>
                  </div>
                </div>

                <div className={bodyCellClass}>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => dispatch(increaseAreaSqFt(tileId))}
                      className="mt-[12px] flex flex-col items-start text-[10px] font-bold uppercase"
                      aria-label={`Add one square foot of ${tile.name}`}
                    >
                      <span className="relative block h-[20px] w-[29px] shrink-0">
                        <Image
                          src="/images/icons/add-tile-action.png"
                          alt=""
                          fill
                          sizes="29px"
                          className="object-contain"
                        />
                      </span>
                      <span className={'inline-flex pl-[3px]'}>Add</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => dispatch(decreaseAreaSqFt(tileId))}
                      className="mt-[10px] flex flex-col items-center text-[10px] font-bold uppercase"
                      aria-label={`Remove one square foot of ${tile.name}`}
                    >
                      <span className="relative block h-[23px] w-[22px] shrink-0">
                        <Image
                          src="/images/icons/remove-tile-action.png"
                          alt=""
                          fill
                          sizes="22px"
                          className="object-contain"
                        />
                      </span>
                      <span className={'ml-[-2px]'}>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-[92px_135px_155px] items-start">
          <div className="relative h-[62px] bg-kiln-paperDark">
            <Image
              src="/images/decor/hand-tile.png"
              alt=""
              width={92}
              height={62}
              className="absolute left-0 top-0 h-[62px] w-[92px] object-contain"
            />
          </div>

          <div className="pt-1">
            <button
              type="button"
              disabled
              className="inline-flex h-8 w-full items-center gap-2 rounded-[3px] border-2 border-kiln-ink bg-kiln-paperDark px-1 text-xs font-bold uppercase leading-none"
            >
              <span className="text-xl leading-none">+</span>

              <Image
                src="/images/decor/add-tile-icon.png"
                alt=""
                width={20}
                height={20}
                className="size-5 shrink-0 border border-kiln-ink object-cover"
              />

              <span className="text-left leading-none">Add new tile to cart</span>
            </button>
          </div>

          <div className="text-[11px] font-bold uppercase leading-none">
            <div className={totalRowClass}>
              <span className={totalLabelClass}>Subtotal:</span>

              <span className="flex h-[22px] items-center border-2 border-t-0 border-kiln-ink bg-kiln-paper px-1 text-left text-[11px] leading-none">
                [{formatCurrency(totals.subtotal)}]
              </span>
            </div>

            <div className={totalRowClass}>
              <span className={totalLabelClass}>Shipping:</span>

              <span className={totalValueClass}>
                [{totals.shipping === 0 ? 'Free' : formatCurrency(totals.shipping)}]
              </span>
            </div>

            <div className={totalRowClass}>
              <span className={totalLabelClass}>Grand Total:</span>

              <span className={`${totalValueClass} rounded-[3px] rounded-t-none bg-kiln-paperDark`}>
                [{formatCurrency(totals.grandTotal)}]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
