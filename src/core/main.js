import Phaser from 'phaser';
import TestScene from "../scenes/testScene.js";

export default class Main extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.Auto,
            parent: 'phaser-example',
            width: 800,
            height: 600,
        });
        this.scene.add("TestScene", new TestScene(), true);
    }
}



