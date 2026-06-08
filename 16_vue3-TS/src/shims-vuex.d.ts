declare module 'vuex' {
  export type Store<S> = import('vuex/types/index').Store<S>
  export type StoreOptions<S> = import('vuex/types/index').StoreOptions<S>
  export type Commit = import('vuex/types/index').Commit
  export type Dispatch = import('vuex/types/index').Dispatch

  export const storeKey: typeof import('vuex/types/index').storeKey
  export const createStore: typeof import('vuex/types/index').createStore
  export const useStore: typeof import('vuex/types/index').useStore

  export const mapState: typeof import('vuex/types/index').mapState
  export const mapMutations: typeof import('vuex/types/index').mapMutations
  export const mapGetters: typeof import('vuex/types/index').mapGetters
  export const mapActions: typeof import('vuex/types/index').mapActions
  export const createNamespacedHelpers: typeof import('vuex/types/index').createNamespacedHelpers
  export const createLogger: typeof import('vuex/types/index').createLogger

  const Vuex: typeof import('vuex/types/index').default
  export default Vuex
}
