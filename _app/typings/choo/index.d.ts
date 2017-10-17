/// <reference types="node" />

import * as EventEmitter from 'events'

declare module 'choo' {
  class Choo {
    constructor (opts?: Choo.IChoo)
    use (callback: (state: Choo.IState, emitter: EventEmitter) => void): void
    route (routeName: string, handler: (state: Choo.IState, emit: (name: string, ...args: any[]) => void) => void): void
    mount (selector: string): void
    start (): HTMLElement
    toString (location: string, state?: Choo.IState): string
  }

  namespace Choo {
    interface IChoo {
      history?: boolean
      href?: boolean
    }

    interface IState {
      events: {
        [key: string]: string
      }
      params: {
        [key: string]: string
      }
      query?: {
        [key: string]: string
      }
      href: string
      route: string
      title: string
      [key: string]: any
    }
  }
}
