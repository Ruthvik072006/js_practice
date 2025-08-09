//arrays [USE FOR OF]

const myarr = [2,4,5,5]

for(const i of myarr)
{
  console.log(`the numbers are : ${i}`)
}

//if i use for - in over arrays , here key consist of 
//index values of arr, and programming[key] consist
//of the actual elements of the arr

//so basically , for - in over arrays takes all its 
//properites , basically it treats like an obj with key 
//value pair , where key is the idx's and value are the
//actual elemets in the arr, so it is not advisable to use
//for - in over arr , use for - of
const programming = [9,8,7]

for (const key in programming) {
  console.log(`at index ${key} : ${programming[key]}`)
}




//maps

const map = new Map() //declaration of a map

map.set(1,'india') //initialization of key value pairs
map.set(2,'russia')

for(const [key,value] of map) //accessing
{
  console.log(key,':',value)
}

//should use for - in loop for obj
const obj = {
  game1 : "tekken",
  game2 : "nfs"
}


for(const key in obj)
{
  console.log(key,':',obj[key])
}



forEach

const myarr = ['ruthvik','abhi','swe','hari']

myarr.forEach(function(val){
  console.log(val)
})

//another way
function printme(item)
{
  console.log(item);
}

myarr.forEach(printme)


for each is most imp when we get the obj inside of an arr

const arr = [
  {
    name : "ruthvik",
    age : "18"
  },
  {
    name : "abhi",
    age : 16
  },
  {
    name : 'swe',
    age : 37
  }
  ]
  
  arr.forEach( (family) => {
    console.log(family.age)
  })
















