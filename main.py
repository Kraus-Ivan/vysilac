radio.set_group(1)

def on_forever():
    if WSJoyStick.Listen_Key(KEY.A):
        basic.show_icon(IconNames.HEART)
        radio.send_value("keya", 1)
    else:
        basic.clear_screen()
    
basic.forever(on_forever)