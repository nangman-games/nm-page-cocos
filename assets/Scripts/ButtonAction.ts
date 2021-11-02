
import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonAction
 * DateTime = Tue Oct 19 2021 17:54:25 GMT+0900 (대한민국 표준시)
 * Author = paare
 * FileBasename = ButtonAction.ts
 * FileBasenameNoExtension = ButtonAction
 * URL = db://assets/Scripts/ButtonAction.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('ButtonAction')
export class ButtonAction extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    clickButton(){
        console.log("click");
        sys.openURL("https://note.nangman.games");
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
