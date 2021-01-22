scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
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
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101040000000300000000000000000000010100000003000000000000000000000101000000030000000000000000000001010000000300000000000000000000010100000303000000000303030300000101000003000000000000030003000001010000030300000300000300030000010100000003030303000003000300000101000000000000030000030003000001010000000000000300000000030000010100000003030303000000000303000101000000030000000000000000030001010000000000000000000000000300010100000000000000030000000003000201010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . 2 2 . . . . 2 2 2 2 . . . 
    . . . 2 . . . . . . 2 . 2 . . . 
    . . . 2 2 . . 2 . . 2 . 2 . . . 
    . . . . 2 2 2 2 . . 2 . 2 . . . 
    . . . . . . . 2 . . 2 . 2 . . . 
    . . . . . . . 2 . . . . 2 . . . 
    . . . . 2 2 2 2 . . . . 2 2 . . 
    . . . . 2 . . . . . . . . 2 . . 
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . 2 . . . . 2 . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.chestOpen,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
