describe("my app", function () {
    it("should have fruits", function () {
        expect(fruits).toBeDefined();
    });
    it("should allow to pick a new fruit", function () {
        let numOfFruitsBefore:number = fruits.length;
        pickFruit();

        expect(fruits.length).toBe(numOfFruitsBefore + 1);
    });
    it("should allow to eat an existing fruit", function () {
        fruits = ["orange"];
        let numOfFruitsBefore:number = fruits.length;
        let fruit:string = eatFruit();

        expect(fruit).toEqual("orange");
        expect(fruits.length).toBe(numOfFruitsBefore - 1);
    });
});
