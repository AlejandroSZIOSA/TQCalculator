import Seed from "../models/seed"
import Zone from "../models/zone"

export const ZONE = [
  new Zone('1',"Stockholm",["s1","s2"]),
  new Zone('2',"Malmö",["s3","s4"]),
  new Zone('3',"Helsingborgs",["s5","s6","s7"]), //problem solved array "s5" not 's5' :)
  new Zone('4',"Ekerö",["s8","s9","s10"]),
]
export const SEED = [
  new Seed("s1",'Seed type1',13),
  new Seed("s2",'Seed type2',50 ),
  new Seed("s3",'Seed type3',80),
  new Seed("s4",'Seed type4',70),
  new Seed("s5",'Seed type 5',11),
  new Seed("s6",'Seed type 6',2),
  new Seed("s7",'Seed type7',71),
  new Seed("s8",'Seed type8',9),
  new Seed("s9",'Seed type 9',15),
  new Seed("s10",'Seed type 10',20)
]
