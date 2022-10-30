basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showIcon(IconNames.Happy)
        basic.showString("T.NORMAL")
    }
    if (input.temperature() > 34) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Sad)
        basic.showString("T.ALTA")
    }
    if (input.temperature() < 26) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Sad)
        basic.showString("T.BAJA")
    }
})
