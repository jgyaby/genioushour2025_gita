scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(salad, effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(salad, effects.disintegrate, 100)
})
let salad: Sprite = null
game.splash("Eat the salad AKU ", "This game Gita will eat all salad ")
tiles.setCurrentTilemap(tilemap`level2`)
let gita = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(gita, 100, 100)
gita.setPosition(82, 87)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    salad = sprites.create(img`
        ..............eeeeeee...........
        ............ee455662e2e.........
        ..........ee45556723e2688.......
        .........e46776677232e777668....
        ........e46745554772227776778...
        .......4448744444777766777678...
        ......4522e7777776777766676668..
        .....4523227766722e666eeeee888..
        ....455232e76672322e4555dddd48..
        ...44567777554623e455ddddddddd4.
        ...e66774554477e455dddd55554dd44
        ..e46777444677e55dd55555d55dddd4
        ..e5668677666e5dd555555555555dde
        .e45544e8776e5d555554555555555de
        .e554eeee66e5d5555d55555dddd54de
        .e55ee44fee5d5d555555d5d5dddddde
        e454eeeefe45d55555555555dd4ddde.
        e5e4eefffe5d55555555d5555dddde..
        e5ee4eeff45d555555555555dddde...
        e5eeeeffe5d55d555d5555d5ddde....
        e5ffefeee5d55545555555ddd4e.....
        e5ffffffe545555555d5d4ddee......
        e54efeff45d55d55555dddde........
        e5eeeffe5dd5555545dddee.........
        e4eeefff5d5555d55ddde...........
        e4efefff5d5d55555d4e............
        .e4efffe5d555555dee.............
        .e54eeee5d545dd4e...............
        ..e554ee5dddddee................
        ...ee5544dddee..................
        .....eeeeeee....................
        ................................
        `, SpriteKind.Food)
    salad.setPosition(randint(10, 145), 9)
    salad.setVelocity(0, 50)
})
