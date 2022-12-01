const args = process.argv

const day = `${args[2]}`.padStart(2, '0')

const dynamicModule = require(`./solutions-2022/${day}/solution.ts`)
const func = dynamicModule[Object.keys(dynamicModule)[0]]

console.time(day)
const result = func()
console.timeEnd(day)
console.log(result)
