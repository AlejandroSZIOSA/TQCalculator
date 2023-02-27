import Seed from "../models/seed"
import Zone from "../models/zone"

export const ZONE=[
  new Zone('1','Stockholm',['s1','s2']),
  new Zone('2','Malmö',['s3','s4']),
  new Zone('3','Helsinborg',['s5','s6'])
]
export const SEED=[
  new Seed('s1','Seed type1'),
  new Seed('s2','Seed type2'),
  new Seed('s3','Seed type3'),
  new Seed('s4','Seed type4'),
  new Seed('s5','Seed type 5'),
  new Seed('s6','Seed type 6')
]
//todo:fix exports