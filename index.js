class Foods {
  constructor(name = "Nasi Goreng", color = "orange") {
    this.name = name
    this.color = color
  }

  cooked() {
    console.log(`${this.name} is being cooked`)
  }
}

const sayurAsem = new Foods("Sayur Asem", "orange")
console.log(sayurAsem)

sayurAsem.cooked()

// =============================================== extends (inheritence)

class FavoriteFoods extends Foods {
  constructor({ name, color, price, origin }) {
    super(name, color)
    this.price = price
    this.origin = origin
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

const myFavoriteFood = new FavoriteFoods({
  name: "Sate Ayam",
  color: "brown",
  price: 30000,
  origin: "Indonesia"
})

console.log(myFavoriteFood)
console.log(myFavoriteFood.name)
console.log(myFavoriteFood.getOrigin())
