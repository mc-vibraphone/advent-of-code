
  const { readFileSync } = require('fs')

  export const xxxxxxxxxx = () => {
    const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
    console.log(data)
    return 0
  }
