import Category from "../models/category"

export const CATEGORIES = [
  new Category('1',"Consumer Product",["s1","s2","s3","s4","s5"]),
  new Category('2',"Lawn & Public green",["s6"]),
  new Category('3',"Professional Turf",["s7","s8"]), //problem solved array "s5" not 's5' :)
  new Category('4',"Slopes & Banks",["s9"]),
]