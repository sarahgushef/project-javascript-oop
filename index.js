class Food {
  constructor(name = "Nasi Goreng", color = "orange") {
    this.name = name
    this.color = color
  }

  cook() {
    console.log(`${this.name} is being cooked`)
  }
}

const sayurAsem = new Food("Sayur Asem", "orange")
console.log(sayurAsem)

sayurAsem.cook()

// =============================================== extends (inheritence)

class FavoriteFood extends Food {
  constructor({ name, color, price, origin, ingredients }) {
    super(name, color)
    this.price = price
    this.origin = origin
    this.ingredients = ingredients
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(this.price)

    return formattedPrice
  }

  getOrigin() {
    return this.origin
  }
}

// ============================== new Object from inheritence

const myFavoriteFood = new FavoriteFood({
  name: "Sate Ayam",
  color: "brown",
  price: 30000,
  origin: "Indonesia",
  ingredients: ["ayam", "kecap", "bawang merah", "saus kacang"]
})

console.log(myFavoriteFood)
console.log(myFavoriteFood.name)
console.log(myFavoriteFood.getOrigin())
console.log(myFavoriteFood.ingredients)
console.log(myFavoriteFood.getPrice())
