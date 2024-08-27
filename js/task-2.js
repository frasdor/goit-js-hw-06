class Storage {
    constructor(items){
        this.items = items;
    }
    getItems(){
        return this.items
    }
    addItem(newItem){
        return this.items.push(newItem)
    }
    removeItem(itemToRemove){
        const index = this.items.indexOf(itemToRemove);           
        if (index !== -1) {                                
            this.items.splice(index,1);    
        }

    }
    
};
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





// Stwórz klasę Storage, która będzie tworzyć obiekty do zarządzania magazynem towarów. Klasa oczekuje tylko jednego argumentu — początkowej tablicy towarów, która jest zapisywana do utworzonego obiektu w prywatnej właściwości items.

// Ogłoś następujące metody klasy:

// getItems() — zwraca tablicę bieżących towarów w prywatnej właściwości items.
// addItem(newItem) — przyjmuje nowy towar newItem i dodaje go do tablicy towarów w prywatnej właściwości items obiektu.
// removeItem(itemToRemove) — przyjmuje ciąg znaków z nazwą towaru itemToRemove i usuwa go z tablicy towarów w prywatnej właściwości items obiektu.


// // removeItem(itemToRemove){
//     const index = this.items.indexOf(itemToRemove);           // sprawdzamy czy w tablicy this.items znajduje sie  itemToRemove, jesli jast to indexOf daje jego indeks, jesli nie to wynik jest -1.
//     if (index !== -1) {                                // sprawdzamy czy index nie jest rowny -1 (czyli,ze itemToremove znajduje sie w tablicy this.items)
//         this.items.splice(index,1);    // jesli warunek z if zostal spelniony to z tablicy this.items za pomoca metody splice zostanie usuniety ten przedmiot, ktorego index zosatl wyznaczony, a po przecinku oznacz ile ma byc usunietych tych itemow, u nas 1)
//     }

// }