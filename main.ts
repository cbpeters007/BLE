bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
basic.forever(function () {
	
})
