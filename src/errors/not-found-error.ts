import {ValidationError} from "express-validator"
import {CustomError} from "./custom-error";

export class NotFoundError extends CustomError{

    statusCode: number = 404

    constructor() {
        super('Route Not found.');
        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors(){
        return [{message: 'Not Found'}]
    }
}