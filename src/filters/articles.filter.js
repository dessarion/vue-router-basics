import arts from '@/articles-base/articles.json'

const articles_base = arts

export default function articleFilter(key) {
    return articles_base[key] || `[Description error]: key ${key} not found`
}