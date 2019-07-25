function engineLoadState(): void {
  const possibleState = engineLoadDirect<EngineState>(gameName)
  if (possibleState === null
    || possibleState.engineVersion !== engineVersion
    || possibleState.gameVersion !== version) {
    engineState = initial()
  } else {
    engineState = possibleState.state
    now = possibleState.now
  }
  engineDropDirect(gameName)
}
