interface Buch {
    name: string
    author: string
    datum: Date
    isbn: string
}

class Bibliothek {
    private books:Buch[] = [];

    public addBook(book:Buch):void {
        this.books.push(book);
    }

    public suche(field:any):Buch[] {
        let foundBooks:Buch[] = this.books.filter(buchFilter);
        return foundBooks;

        function buchFilter(book:Buch) {
            for (let key in book) {
                if (book[key] == field) { // simple match
                    return true;
                } else if (typeof book[key] == "string" && typeof field == "string") { // both are string values
                    let stringField:string = field;
                    let buchAttribut:string = book[key];
                    if (buchAttribut.toLowerCase().includes(stringField.toLowerCase())) { // case insensitive match, field value has to be part of attribute value
                        return true;
                    }
                } else if (book[key] instanceof Date && field instanceof Date) { // both are dates
                    let dateField:Date = field;
                    let buchAttribut:Date = book[key];
                    if (dateField.getTime() === buchAttribut.getTime()) { // compare unix time of dates
                        return true;
                    }
                }
            }
            return false; // no match was found --> book is not in filter
        }
    }
}

let bib = new Bibliothek();
let lodr = {
    name: "Lord of the Rings",
    author: "Tolkien",
    datum: new Date("1975-01-01"),
    isbn: "923254354322"
}
let hobbit = {
    name: "The Hobbit",
    author: "Tolkien",
    datum: new Date("1970-01-01"),
    isbn: "93453454234234"
}
let shantaram = {
    name: "Shantaram",
    author: "G. D. Roberts",
    datum: new Date("2010-01-01"),
    isbn: "953452342542"
}
bib.addBook(lodr);
bib.addBook(hobbit);
bib.addBook(shantaram);

// Search in Library
search("hobbit");
search("Tolkien");
search("3453");
search(new Date("1975-01-01"));
search(""); // returns all books

function search(search:any) {
    let results:Buch[] = bib.suche(search);
    console.log(results);
    appendResults(results);
}

function appendResults(results:Buch[]) {
    let node:HTMLElement = document.createElement("pre");
    node.innerHTML = JSON.stringify(results);
    document.body.appendChild(node);
}

