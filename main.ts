input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    music.playMelody("G F G A - F E D ", 85)
    basic.setLedColor(0xff0000)
    basic.pause(500)
    basic.setLedColor(0x00ffff)
    basic.pause(500)
    basic.setLedColor(0x007fff)
    basic.pause(500)
    basic.setLedColor(0x00ff00)
    basic.pause(500)
    basic.setLedColor(0x000000)
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
