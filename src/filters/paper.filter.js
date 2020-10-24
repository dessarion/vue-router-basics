import laborets from '@/articles-base/papers/laborets.json'
import lady from '@/articles-base/papers/lady.json'
import galykova from '@/articles-base/papers/galykova.json'
import fencuka from '@/articles-base/papers/fencuka.json'
import zhupanatska from '@/articles-base/papers/zhupanatska.json'
import wall_of_death from '@/articles-base/papers/wall_of_death.json'
import fluder from '@/articles-base/papers/fluder.json'

const currentPaper = {
    'laborets': laborets,
    'lady': lady,
    'galykova':galykova,
    'fencuka':fencuka,
    'zhupanatska':zhupanatska,
    'wall_of_death':wall_of_death,
    'fluder':fluder
}

export default function paperFilter(key, paper){    
    return currentPaper[paper][key] || `[Paper Error]: key ${key} not found`
}