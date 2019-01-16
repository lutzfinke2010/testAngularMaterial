export class RBLWaitRoomEntity implements RBLWaitRoom{
  constructor(public counter: number){
  }
}

export interface RBLWaitRoom{
  counter: number;
}

