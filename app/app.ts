let fruits:string[] = [];

function pickFruit():void {
    fruits.push("apple");
}

function eatFruit():string {
    return fruits.shift();
}
