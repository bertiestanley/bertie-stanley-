scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(15)
effects.blizzard.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 5 5 . . 5 5 5 5 . . . . 
    . . 3 3 3 3 . . 3 3 3 3 . . . . 
    . . 5 5 5 5 . . 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
