const { readdirSync, mkdirSync, writeFileSync } = require('fs')

import { startCase, camelCase } from 'lodash'
;(async () => {
  const completedProjectIds = readdirSync(`${__dirname}/solutions-2022/`, {
    withFileTypes: true,
  })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)
    .map((name: string) => parseInt(name))
  let nextProjectId = 0
  for (let id = 1; id <= 31; id++) {
    if (!completedProjectIds.includes(id)) {
      nextProjectId = id
      break
    }
  }

  const projectIdString = String(nextProjectId).padStart(2, '0')

  mkdirSync(`${__dirname}/solutions-2022/${projectIdString}`)

  const projectFileContent = `
  const { readFileSync } = require('fs')

  export const xxxxxxxxxx = () => {
    const data = readFileSync(\`\${__dirname}/data.txt\`, 'utf8').split('\\n')
    console.log(data)
    return 0
  }
`

  writeFileSync(
    `${__dirname}/solutions-2022/${projectIdString}/solution.ts`,
    projectFileContent,
  )
  writeFileSync(`${__dirname}/solutions-2022/${projectIdString}/data.txt`, '')
})()
