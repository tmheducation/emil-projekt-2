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
    basic.pause(500)
    basic.turnRgbLedOff()
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
    basic.pause(1000)
    basic.turnRgbLedOff()
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("GO")
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.ArrowWest)
    basic.pause(500)
    basic.showIcon(IconNames.ArrowEast)
    basic.pause(500)
})
