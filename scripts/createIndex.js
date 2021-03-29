const _ = require('lodash')

const fs = require('fs')
const lunr = require('lunr')
const os = require('os')
const path = require('path')
const boxen = require('boxen')

const anger = require('../data/anger_quotes.json')
const books = require('../data/books_quotes.json')
const courage = require('../data/courage_quotes.json')
const death = require('../data/death_quotes.json')
const entrepreneurship = require('../data/entrepreneurship_quotes.json')
const faith = require('../data/faith_quotes.json')
const french = require('../data/french_quotes.json')
const fun = require('../data/fun_quotes.json')
const general = require('../data/general_quotes.json')
const god = require('../data/god_quotes.json')
const gratitude = require('../data/gratitude_quotes.json')
const happiness = require('../data/happiness_quotes.json')
const health = require('../data/health_quotes.json')
const hope = require('../data/hope_quotes.json')
const humor = require('../data/humor_quotes.json')
const inspire = require('../data/inspire_quotes.json')
const knowledge = require('../data/knowledge_quotes.json')
const life = require('../data/life_quotes.json')
const love = require('../data/love_quotes.json')
const motivation = require('../data/motivation_quotes.json')
const movie = require('../data/movie_quotes.json')
const philosophy = require('../data/philosophy_quotes.json')
const poetry = require('../data/poetry_quotes.json')
const popular = require('../data/popular_quotes.json')
const portuguese = require('../data/portuguese_quotes.json')
const portuguese2 = require('../data/portuguese2_quotes.json')
const portuguese3 = require('../data/portuguese3_quotes.json')
const portuguese4 = require('../data/portuguese4_quotes.json')
const portuguese5 = require('../data/portuguese5_quotes.json')
const programming = require('../data/programming_quotes.json')
const relationships = require('../data/relationships_quotes.json')
const religion = require('../data/religion_quotes.json')
const responsibility = require('../data/responsibility_quotes.json')
const romance = require('../data/romance_quotes.json')
const sadness = require('../data/sadness_quotes.json')
const science = require('../data/science_quotes.json')
const spirituality = require('../data/spirituality_quotes.json')
const stress = require('../data/stress_quotes.json')
const success = require('../data/success_quotes.json')
const thinking = require('../data/thinking_quotes.json')
const time = require('../data/time_quotes.json')
const travel = require('../data/travel_quotes.json')
const truth = require('../data/truth_quotes.json')
const wisdom = require('../data/wisdom_quotes.json')
const writing = require('../data/writing_quotes.json')

function getConfig() {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION
        ? { path: '.cache', name: 'lunr-index.json', delimiter: '__' }
        : { path: '.cache', name: 'lunr-index.json', delimiter: '_' }
}

function filePath() {
    return path.join(os.tmpdir(), `${getConfig().path}`)
}

function getIndexPath(filePath) {
    return path.join(filePath, `${getConfig().name}`)
}

function loadIndex(obj, args) {
    obj.field('quote')
    obj.field('author')

    for (const category of Object.keys(args)) {
        for (const [index, value] of Object.entries(args[category])) {
            value.id = `${category}${getConfig().delimiter}${index}`
            obj.add(value)
        }
    }

    return obj.build()
}

function createIndex(args) {
    const args_ = _.merge(...args)
    return lunr(obj => loadIndex(obj, args_))
}

function ensureDirExists(dir) {
    fs.existsSync(dir) || fs.mkdirSync(dir, { recursive: true })
}

;( function () {
    try {
        const path = filePath()
        ensureDirExists(path)

        const values = [
            anger,
            books,
            courage,
            death,
            entrepreneurship,
            faith,
            french,
            fun,
            general,
            god,
            gratitude,
            happiness,
            health,
            hope,
            humor,
            inspire,
            knowledge,
            life,
            love,
            motivation,
            movie,
            philosophy,
            poetry,
            popular,
            portuguese,
            portuguese2,
            portuguese3,
            portuguese4,
            portuguese5,
            programming,
            relationships,
            religion,
            responsibility,
            romance,
            sadness,
            science,
            spirituality,
            stress,
            success,
            thinking,
            time,
            travel,
            truth,
            wisdom,
            writing,
        ]
        const searchIndex = createIndex(values)
        const index = getIndexPath(path)

        console.log(
            boxen(`Storing index file by path=${index}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'single',
                borderColor: 'yellow',
            })
        )

        fs.writeFileSync(index, JSON.stringify(searchIndex))
    } catch (e) {
        console.error(
            boxen(`Failed to store index file, message=${e.message}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'red',
            })
        )
        throw e
    }
} )()
