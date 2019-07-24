function engineAnimation(
  start: number,
  frames: ReadonlyArray<readonly [number, () => void]>,
  pastEnd?: (
    ended: number
  ) => void
): void {
  const elapsed = engineNow - start
  if (elapsed < 0) {
    engineAt(start)
  } else {
    let accumulated = 0
    for (const frame of frames) {
      accumulated += frame[0]
      if (elapsed < accumulated) {
        frame[1]()
        engineAt(start + accumulated)
        return
      }
    }
    if (pastEnd) {
      pastEnd(start + accumulated)
    }
  }
}