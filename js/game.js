import Menu from "./Menu.js";
import PreloadScene from "./PreloadScene.js";
import homeScene from "./homeScene.js";
import villageScene from "./villageScene.js";
import selectPlayerScene from "./selectPlayerScene.js";
import uiScene from "./uiScene.js";
import GzDialog from "./plugins/GzDialog.js"
import instructionsScene from "./instructionsScene.js";
import shopScene from "./shopScene.js";
import inventoryScene from "./inventoryScene.js";
import Dungeon from "./Dungeon.js";
import DungeonV2 from "./DungeonV2.js";
import audioManager from "./audioManager.js";
import schmiedScene from "./schmiedScene.js";

export const config = {
    type: Phaser.WEBGL, // Welcher Renderer soll verwendet werden?
    width: 1280,
    height: 720,
    antialias: false,
    fps: {
        target: 30 // 30x per second
    },
    test: true,
    pixelArt: true,
    parent: "game", // HTML ID 
    plugins: {
        scene: [
            { key: 'gzDialog', plugin: GzDialog, mapping: 'gzDialog' }
        ]
    },
    scene: [PreloadScene, Menu, selectPlayerScene, villageScene, homeScene, uiScene, instructionsScene, shopScene, inventoryScene, Dungeon, audioManager, DungeonV2, schmiedScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }, // no gravity
            //debug: true
        },

    }
};

const game = new Phaser.Game(config);
export { game }