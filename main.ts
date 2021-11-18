bluetooth.onBluetoothConnected(function () {
    BLE = 1
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    BLE = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteValue("x", CNT)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    TXT = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    CNT = parseFloat(TXT)
})
let TXT = ""
let BLE = 0
let CNT = 0
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
basic.showLeds(`
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
CNT = 0
BLE = 0
basic.forever(function () {
    CNT += 1
    basic.pause(1000)
})
