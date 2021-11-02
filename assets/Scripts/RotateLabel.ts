import {_decorator, Component, Node, Quat} from 'cc';

const {ccclass, property} = _decorator;

/**
 * Predefined variables
 * Name = RotateLabel
 * DateTime = Thu Oct 14 2021 23:36:07 GMT+0900 (대한민국 표준시)
 * Author = paare
 * FileBasename = RotateLabel.ts
 * FileBasenameNoExtension = RotateLabel
 * URL = db://assets/RotateLabel.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('RotateLabel')
export class RotateLabel extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;
  @property({type: Node})
  label: Node = null;

  z: number = 0;
  speed : number = 100;

  start() {
    // [3]
  }

  update(deltaTime: number) {
    this.z += (deltaTime * this.speed);
    // console.log(this.z);
    // console.log(deltaTime);
    this.label.setRotationFromEuler(0, 0, this.z);
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
