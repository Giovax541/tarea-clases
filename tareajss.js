class usuario {
    constructor(name, lastName, pets, books) {
        this.name = name
        this.last = lastName
        this.pets = pets
        this.books = books
    }

    getname() {
        return this.name
    }

    getlastName() {
        return this.last
    } 

    getFullName() {
        return `${this.name} ${this.last}`
    }

    addPets(petName) { 
       this.pets.push(petName)
    }

    countPets() {
        let pets= this.pets
        return pets.length
    }

    addBook(newName, newAuthor)  {
        var newBook = {
            name:"",
            author:""
        }
        
        newBook.name= newName,
        newBook.author=newAuthor 

        this.books.push(newBook)
    }

    getBookNames() {
        let books= this.books
        return books.map(book=>book.name) 
    } 
}

   function createUser(){
      var user1 = new usuario("armando","mago","","")
      user1.addBook("1984","George orwell")
      user1.addPets("tobby")
      user1.addBook("el señor de los anillos","tolkien")
      user1.getBookNames()
      user1.getFullName()
      user1.getname()
      user1.countPets()
    }



