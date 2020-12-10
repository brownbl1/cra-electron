interface AppRuntime {
  readdir: any
}

const appRuntime = (window as any).appRuntime as AppRuntime
export default appRuntime
