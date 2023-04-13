import Seed from "../models/seed"
import Zone from "../models/zone"

// This data model is used not for testing purposes
export const ZONE = [
  new Zone('1',"Consumer Product",["s1","s2","s3","s4","s5"]),
  new Zone('2',"Lawn & Public green",["s6"]),
  new Zone('3',"Professional Turf",["s7","s8"]), //problem solved array "s5" not 's5' :)
  new Zone('4',"Slopes & Banks",["s9"]),
]

//This Data Model is used for testing purposes
export const SEED = [
  new Seed("s1",'type1',13),
  new Seed("s2",'type2',50 ),
  new Seed("s3",'type3',80),
  new Seed("s4",'type4',70),
  new Seed("s5",'type 5',11),
  new Seed("s6",'type 6',2),
  new Seed("s7",'type7',71),
  new Seed("s8",'type8',9),
  new Seed("s9",'type 9',15),
  new Seed("s10",'type 10',20)
]
