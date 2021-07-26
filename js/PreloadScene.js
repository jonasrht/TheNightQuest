export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    //Tilemaps
    this.load.tilemapTiledJSON("map", "assets/tilesets/tileset.json");
    this.load.image("tiles", "assets/tilesets/Serene_Village_16x16.png");
    this.load.image("schmiedTiles", "assets/tilesets/schmied16x16.png");
    this.load.image("dorfTiles", "assets/tilesets/dorfset.png");
    this.load.image("shopHaus", "assets/tilesets/shop.png");

    // Dungeon
    this.load.tilemapTiledJSON("homeroom", "assets/tilesets/room.json");
    this.load.image(
      "homeground",
      "assets/tilesets/Room_Builder_free_16x16.png"
    );
    this.load.image("interior", "assets/tilesets/Interiors_free_16x16.png");

    this.load.tilemapTiledJSON("dungeonMap", "assets/tilesets/dungeon.json");
    this.load.image(
      "dungeonTiles",
      "assets/tilesets/0x72_DungeonTilesetII_v1.3.png"
    );

    this.load.image("spike1", "assets/tilesets/spikes/spikes1.png");
    this.load.image("spike2", "assets/tilesets/spikes/spikes2.png");
    this.load.image("spike3", "assets/tilesets/spikes/spikes3.png");
    this.load.image("spike4", "assets/tilesets/spikes/spikes4.png");

    // Player
    this.load.atlas(
      "atlas",
      "assets/tilesets/atlas.png",
      "assets/tilesets/atlas.json"
    );
    this.load.atlas(
      "atlasPink",
      "assets/tilesets/atlas-pink.png",
      "assets/tilesets/atlas.json"
    );

    this.load.atlas(
      "swordult",
      "assets/tilesets/sword-ult.png",
      "assets/tilesets/sword-ult.json"
    );

    this.load.atlas(
      "sword",
      "assets/tilesets/schwerthieb.png",
      "assets/tilesets/schwerthieb.json"
    )

    // NPC
    this.load.atlas(
      "npc",
      "assets/tilesets/npc.png",
      "assets/tilesets/npc.json"
    );

    // Dorfbewohner

    this.load.atlas(
      "bewohner1",
      "assets/tilesets/randomdorfguy1.png",
      "assets/tilesets/atlas.json"
    );

    
    this.load.atlas(
      "bewohner2",
      "assets/tilesets/randomdorfguy2.png",
      "assets/tilesets/atlas.json"
    );

    this.load.atlas(
      "bewohner3",
      "assets/tilesets/randomdorfguy3.png",
      "assets/tilesets/atlas.json"
    );

    // Slime
    this.load.atlas(
      "slime",
      "assets/tilesets/slime.png",
      "assets/tilesets/slime.json"
    )

    // Arrow Button
    this.load.atlas(
      "arrowBtn",
      "assets/tilesets/spritesheet_arrow.png",
      "assets/tilesets/arrow.json"
    );

    // UI
    this.load.image("uiAttack", "assets/img/gui-ingame.png");
    this.load.image("dialogbox", "assets/img/dialogbox.png");  
    this.load.image("flaschenpost", "assets/img/flaschenpost16x16.png");
    this.load.image("brief", "assets/img/flaschenbrief.png");
  
    // Buttons
    this.load.image("exitButton", "assets/img/exitButton4.png");
    this.load.image("MenuTop", "assets/img/MenuTop.png");
    this.load.image("MenuMapTop", "assets/img/MenuMapTop.png");

    // Inventar
    this.load.image("invIcon", "assets/img/invenIcon.png");
    this.load.image("heartIcon", "assets/img/Sprite_heart.png");
    this.load.image("coinIcon", "assets/img/coin18.png");

    //Audio
    this.load.audio("menuMusic", "assets/sounds/menumusic.mp3");
    this.load.audio("startGame", "assets/sounds/gamestart.mp3");
    this.load.audio("buttonSound", "assets/sounds/button.wav");
    this.load.audio("heartSound", "assets/sounds/heart.wav");
    this.load.audio("dooropenSound", "assets/sounds/dooropen.wav");
    this.load.audio("doorcloseSound", "assets/sounds/doorclose.wav");

    //Arrow
    this.load.image("arrow", "assets/tilesets/arrow.png");
    //Plugins
  }

  create() {
    this.scene.start("mainMenu");
  }
}
