class Journalist {
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticles(journalist: Journalist) {
        const latestArticle = journalist.articles[journalist.articles.length - 1];
        console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.publishArticle("Los beneficios de la programación");
readerB.checkForNewArticles(journalistA);

//////////////////////////////////////////////////
//////////////////////////////////////////////////



interface Observer_ {
    update(article: string): void;
}

class Reader_ implements Observer_ {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}

class Subject_ {
    private observers: Observer_[] = [];

    addObserver(observer: Observer_) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer_) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(article: string) {
        for (const observer of this.observers) {
            observer.update(article);
        }
    }
}

class Journalist_ extends Subject_ {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    publishArticle(article: string) {
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
        this.notify(article);
    }
}

const journalistA_ = new Journalist_('Juan');
const readerB_ = new Reader_('Ana');

journalistA_.addObserver(readerB_);

journalistA_.publishArticle("Los beneficios de la programación");
