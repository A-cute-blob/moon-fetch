class e extends Error {

    constructor(message: string) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.message = message;
        this.name = `moon-fetch-error`;
    }

}

export default e;