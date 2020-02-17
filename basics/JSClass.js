class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const rect = new Rectangle(10, 10);

if (rect.width == rect.height) {
    console.log('rect is a square, because it\'s height ' + rect.height + ' is equal to it\'s width ' + rect.width);
}
