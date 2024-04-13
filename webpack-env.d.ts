// webpack-env.d.ts
declare interface NodeRequire {
  context(
    path: string,
    recursive?: boolean,
    regex?: RegExp,
  ): {
    (path: string): any
    keys(): string[]
    id: string
  }
}
