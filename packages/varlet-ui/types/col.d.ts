import { VarComponent, BasicAttributes } from './varComponent'

export type ColSizeDescriptor = {
  span?: number | string
  offset?: number | string
}

export type ColDirection = 'row' | 'column'

export interface ColProps extends BasicAttributes {
  span?: string | number
  offset?: string | number
  direction?: ColDirection
  xs?: string | number | ColSizeDescriptor | undefined
  sm?: string | number | ColSizeDescriptor | undefined
  md?: string | number | ColSizeDescriptor | undefined
  lg?: string | number | ColSizeDescriptor | undefined
  xl?: string | number | ColSizeDescriptor | undefined
  onClick?: (e: Event) => void
}

export class Col extends VarComponent {
  $props: ColProps
}

export class _ColComponent extends Col {}
