class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

/////////////////////////////////////////
/////////////////////////////////////////

interface Observer {
    update(bidderName: string, amount: number): void;
}

class Subject__ {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(bidderName: string, amount: number) {
        for (const observer of this.observers) {
            observer.update(bidderName, amount);
        }
    }
}

class Auction_ extends Subject__ {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        super();
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
            this.notify(bidderName, amount); // Notificar a los observadores
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

class Bidder implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(bidderName: string, amount: number) {
        if (bidderName !== this.name) {
            console.log(`${this.name}, la nueva oferta máxima es de ${amount} por ${bidderName}`);
        }
    }
}

const auctionItem_ = new Auction_("Cuadro famoso");
const bidderCarlos_ = new Bidder("Carlos");
const bidderAna_ = new Bidder("Ana");

auctionItem_.addObserver(bidderCarlos_);
auctionItem_.addObserver(bidderAna_);

auctionItem_.makeBid("Carlos", 500);
auctionItem_.makeBid("Ana", 450);
