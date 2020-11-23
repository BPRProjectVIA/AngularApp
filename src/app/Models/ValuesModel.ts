export class ValuesModel {
    public dateTime: Date;
    public microcontrollerID: number;
    public temperature: number;
    public humidity: number;
    public dust: number;
    public doorOpen: boolean;
    public power: number;

    constructor(){
        this.dateTime = new Date();
        this.microcontrollerID = 0;
        this.temperature = 0;
        this.humidity = 0;
        this.dust = 0;
        this.doorOpen = false;
        this.power = 0;
    }

    // constructor(dateTime: Date, microcontrolerID: number, temperature: number, humidity: number, dust: number, doorOpen: boolean, power: number) {
    //     this.dateTime = dateTime;
    //     this.doorOpen = doorOpen;
    //     this.microcontrollerID = microcontrolerID;
    //     this.temperature = temperature;
    //     this.humidity = humidity;
    //     this.dust = dust;
    //     this.power = power;
    // }
}