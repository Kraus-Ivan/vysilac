radio.setGroup(1)
basic.forever(function on_forever() {
    if (WSJoyStick.Listen_Key(KEY.A)) {
        basic.showIcon(IconNames.Heart)
        radio.sendValue("keya", 1)
    } else {
        basic.clearScreen()
    }
    
})
