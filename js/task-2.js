class Storage {
    getItems(),
    AddItem(),
    removeItem();
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