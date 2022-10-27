export default class Laptop {
    constructor(multimediaInterface) {
        this.output = multimediaInterface
    }

    sendSignalByUsbOutput(signal) {
        this.output.sendSignal(signal)
    }
}

export class MultimediaInterface {
    constructor(monitor) {
        this.monitor = monitor
    }

    sendSignal(signal) {
        this.monitor.showSignal(signal) 
    }
}

export class Monitor {
    constructor() {

    }

    addInput(input) {
        input
    }

    showSignal(signal) {
        console.log(signal)
    }
}

let m = new Monitor()
