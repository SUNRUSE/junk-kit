onload = () => {
  engineStorageCheck()
  engineStateLoad()
  engineAudioStart()
  engineRender()
  onunload = engineStateSave
  onkeydown = engineKeyInputHandleKey
  onblur = engineAudioSuspend
  onresize = engineViewportsResize
}
