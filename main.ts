input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.setLedColor(0x00ffff)
})
basic.forever(function () {
    basic.showIcon(IconNames.ArrowWest)
    basic.pause(500)
    basic.showIcon(IconNames.ArrowEast)
    basic.pause(500)
})
