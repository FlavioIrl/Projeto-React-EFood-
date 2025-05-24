class Food {
  category: string
  description: string
  image: string
  highlight?: string
  rating: number
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    rating: number,
    title: string,
    highlight?: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.highlight = highlight
    this.rating = rating
  }
}

export default Food
