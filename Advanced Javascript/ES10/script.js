const array = [1,2,3,4,5]
array.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat(2)

flatMap()

const userEmail = '      eddytheeagle@gmail.com'
const useremail2 = 'jonnydangerous@gmail       '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

fromEntries

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles)

try{
    4 + 5
} catch {

}