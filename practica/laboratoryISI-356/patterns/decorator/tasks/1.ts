class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();

////////////////////////////////////////////////
////////////////////////////////////////////////

interface RoomDecorator_ {
    applyDesign(design: string): void;
}

class DecoratedRoom_ implements RoomDecorator_ {
    private room: Room;
    
    constructor(room: Room) {
        this.room = room;
    }

    applyDesign(design: string) {
        this.room.applyDesign(design);
    }

    showRoom() {
        this.room.showRoom();
    }
}

const myRoom_ = new Room('blue');
const decoratedRoom = new DecoratedRoom_(myRoom_);
decoratedRoom.applyDesign('stripe');
decoratedRoom.showRoom();
