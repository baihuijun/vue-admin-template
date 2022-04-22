import mitt from 'mitt'
import type { Emitter } from 'mitt'
type Events = {
  resize: {
    detail: {
      width: number
      height: number
    }
  }
  openPanel: string
  logoChange: string
  changLayoutRoute: {
    indexPath: string
    parentPath: string
  }
}

export const emitter: Emitter<Events> = mitt<Events>()
