input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Chessboard)
})
basic.showIcon(IconNames.Chessboard)
