import * as anger from '../data/anger_quotes.json'
import * as books from '../data/books_quotes.json'
import * as courage from '../data/courage_quotes.json'
import * as death from '../data/death_quotes.json'
import * as entrepreneurship from '../data/entrepreneurship_quotes.json'
import * as faith from '../data/faith_quotes.json'
import * as french from '../data/french_quotes.json'
import * as fun from '../data/fun_quotes.json'
import * as general from '../data/general_quotes.json'
import * as god from '../data/god_quotes.json'
import * as gratitude from '../data/gratitude_quotes.json'
import * as happiness from '../data/happiness_quotes.json'
import * as health from '../data/health_quotes.json'
import * as hope from '../data/hope_quotes.json'
import * as humor from '../data/humor_quotes.json'
import * as inspire from '../data/inspire_quotes.json'
import * as knowledge from '../data/knowledge_quotes.json'
import * as life from '../data/life_quotes.json'
import * as love from '../data/love_quotes.json'
import * as motivation from '../data/motivation_quotes.json'
import * as movie from '../data/movie_quotes.json'
import * as philosophy from '../data/philosophy_quotes.json'
import * as poetry from '../data/poetry_quotes.json'
import * as popular from '../data/popular_quotes.json'
import * as portuguese from '../data/portuguese_quotes.json'
import * as portuguese2 from '../data/portuguese2_quotes.json'
import * as portuguese3 from '../data/portuguese3_quotes.json'
import * as portuguese4 from '../data/portuguese4_quotes.json'
import * as portuguese5 from '../data/portuguese5_quotes.json'
import * as programming from '../data/programming_quotes.json'
import * as relationships from '../data/relationships_quotes.json'
import * as religion from '../data/religion_quotes.json'
import * as responsibility from '../data/responsibility_quotes.json'
import * as romance from '../data/romance_quotes.json'
import * as sadness from '../data/sadness_quotes.json'
import * as science from '../data/science_quotes.json'
import * as spirituality from '../data/spirituality_quotes.json'
import * as stress from '../data/stress_quotes.json'
import * as success from '../data/success_quotes.json'
import * as thinking from '../data/thinking_quotes.json'
import * as time from '../data/time_quotes.json'
import * as travel from '../data/travel_quotes.json'
import * as truth from '../data/truth_quotes.json'
import * as wisdom from '../data/wisdom_quotes.json'
import * as writing from '../data/writing_quotes.json'

import { mergeProps } from './commons'
import { QuoteMapper } from '../typings/types'

const getQuoteData = (): QuoteMapper =>
    mergeProps<QuoteMapper>(
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
        writing
    )

export const quotes = getQuoteData()
