onload = () => {
  engineLoadState()
  onbeforeunload = () => {
    engineSaveState()
  }
}