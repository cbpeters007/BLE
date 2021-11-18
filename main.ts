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
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
let BLE = 0
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
basic.showLeds(`
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
BLE = 0
basic.forever(function () {
	
})
