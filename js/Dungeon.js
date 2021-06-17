import Player from "./objects/Player.js";
import Slime from "./objects/slime.js";

export default class Dungeon extends Phaser.Scene {
    constructor() {
        super("Dungeon");
    }

    init(data) {
        this.selectedCharacter = data.char;
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        this.physics.world.createDebugGraphic();
        var uiScene = this.scene.get('uiScene');

        //tilemap einfügen
        const map = this.make.tilemap({ key: "dungeonMap" });
        const tileset = map.addTilesetImage("Dungeon", "dungeonTiles");

        //Eben createn
        const belowLayer = map.createLayer("boden", tileset, 0, 0);
        this.worldLayer = map.createLayer("wand", tileset, 0, 0);
        const chestLayer = map.createLayer("chest", tileset, 0, 0);
        const buttonLayer = map.createLayer("button", tileset, 0, 0);
        const mobsLayer = map.createLayer("mobs", tileset, 0, 0);

        //fügt den button q hinzu
        this.q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.e = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        //collision mit der wand in tiled einstellen
        this.worldLayer.setCollisionByProperty({ collides: true });
        chestLayer.setCollisionByProperty({ collides: true });

        //spawnpoint in tiled festlegen
        this.spawnPoint = map.findObject(
            "Objects",
            (obj) => obj.name === "Spawn Point"
        );

        // Spieler erstellen
        this.player = new Player(this, this.spawnPoint.x, this.spawnPoint.y, this.selectedCharacter);

        // Slime Gruppe
        this.slimeGroup = [];

        this.slime = map.createFromObjects('orc');
        this.slime.forEach((slime) => {
            this.slime = new Slime(this, slime.x, slime.y, 'npc', 1);
            this.slimeGroup.push(this.slime)
        })
        console.log(this.slimeGroup);
        this.physics.add.collider(this.player, this.slimeGroup, () => {
            uiScene.removeHeart();
            this.player.pushBack();
        });

        //collider hinzufügen
        this.physics.add.collider(this.player, this.worldLayer);
        this.physics.add.collider(this.player, chestLayer);
        this.physics.add.collider(this.slimeGroup, this.worldLayer);

        //funktion damit die kamera einen verfolgt
        const camera = this.cameras.main;
        camera.startFollow(this.player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.setZoom(3);

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        this.projectiles = this.add.group();

    }

    angriff() {
        console.log("atack");
    }

    update(time, delta) {
        const speed = 175;
        const prevVelocity = this.player.body.velocity.clone();
        this.player.update(this.cursors, "atlas");
        this.slimeGroup.forEach((slime) => {
            slime.update();
        });

        if (Phaser.Input.Keyboard.JustDown(this.q)) {
            this.shootBeam();
        }

        if (Phaser.Input.Keyboard.JustDown(this.e)) {
            this.player.dash();
        }


        this.rotation = Phaser.Math.Angle.Between(this.player, this.slimeGroup[0])

        if (this.distance < 200) {
            //this.angriff();
        }
    }
    //Beam schießen amk
    shootBeam() {
        var beam = new Beam(this);
    }
}