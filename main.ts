input.onButtonPressed(Button.A, function () {
    mkSpell()
    basic.showString(Spell)
})
function mkSpell () {
    Spell = ""
    for (let index = 0; index < 6; index++) {
        Spell = "" + Spell + (" " + Dictionary[randint(0, Dictionary.length - 1)])
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showString(Spell)
})
let Dictionary: string[] = []
let Spell = ""
Spell = ""
Dictionary = ["a", "b", "c"]
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
