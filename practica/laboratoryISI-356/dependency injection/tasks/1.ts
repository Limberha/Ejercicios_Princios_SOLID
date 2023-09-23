class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore {
    notifier: EmailNotifier;

    constructor() {
        this.notifier = new EmailNotifier();
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}

////////////////////////////////////////////
////////////////////////////////////////////


interface Notifier {
    sendNotification(receiver: string, subject: string, content: string): void;
}

class EmailNotifier_ implements Notifier {
    sendNotification(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore_ {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendNotification(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}


const emailNotifier = new EmailNotifier_();
const musicStore = new MusicStore_(emailNotifier);

musicStore.newAlbumRelease("example@example.com", "Artist Name", "Album Title");
