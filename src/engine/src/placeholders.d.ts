declare const gameName: string

type State = `STATE PLACEHOLDER`

declare function initial(): State

declare const version: number

declare function audioReady(): void

declare const beatsPerMinute: number

declare function renderBeat(): void

declare function render(): undefined | (() => void)
