import {RBLSitzplatz} from './rblsitzplatz';

export class RBLRuleResultEntity implements RBLRuleResult {

  constructor(public Check: boolean,
              public Info: string,
              public sitzplatz: RBLSitzplatz,
              public link: string,
              public Name: string){

  }

}

export interface RBLRuleResult{
  Check: boolean,
  Info: string,
  sitzplatz: RBLSitzplatz,
  link: string,
  Name: string
}


// public class RBLRuleResult {
//
//   public String Name;
//
//   public RBLRuleResult(){
//     Check = false;
//     Info = "";
//     sitzplatz = new RBLSitzplatz();
//     link = "";
//     Name = "";
//   }
//
//   public boolean Check;
//
//   public String Info;
//
//   public RBLSitzplatz sitzplatz;
//
//   public String link;
// }
