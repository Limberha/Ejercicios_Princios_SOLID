// loggerService.ts

export class LoggerService {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    logMessage(message: string): void {
        // Lógica ficticia para escribir en el archivo
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}

// app.ts

import { LoggerService } from './loggerService';

let logger1 = new LoggerService("log.txt");
let logger2 = new LoggerService("log.txt");

logger1.logMessage("This is a message from logger1");
logger2.logMessage("This is a message from logger2");


//////////////////////////////////////
//////////////////////////////////////

// loggerService.ts

export class LoggerService_ {
    private static instance: LoggerService;
    private filePath: string;

    private constructor(filePath: string) {
        this.filePath = filePath;
    }

    static getInstance(filePath: string): LoggerService {
        if (!LoggerService_.instance) {
            LoggerService_.instance = new LoggerService(filePath);
        }
        return LoggerService_.instance;
    }

    logMessage(message: string): void {
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}


import { LoggerService__ } from './loggerService';

let logger1_ = LoggerService_.getInstance("log.txt");
let logger2_ = LoggerService_.getInstance("log.txt");

logger1_.logMessage("This is a message from logger1");
logger2_.logMessage("This is a message from logger2");
