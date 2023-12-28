/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../config';
import handleValidationError from '../interface/handleValidationErr';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || "Something went wrong!";

    let errorSources: TErrorSource = [
        {
            path: "",
            message: "Something went wrong"
        }
    ];
    const handleZodError = (err: ZodError) => {
        const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
            return {
                path: issue?.path[issue.path.length - 1],
                message: issue.message
            }
        })

        const statusCode = 400
        return {
            statusCode,
            message: "ValidationError",
            errorSources
        }
    }
    if (err instanceof ZodError) {
        const simplefiedError = handleZodError(err)
        statusCode = simplefiedError.statusCode;
        message = simplefiedError.message;
        errorSources = simplefiedError.errorSources
    } else if (err?.name === "ValidationError") {
        const simplefiedError = handleValidationError(err)
        statusCode = simplefiedError.statusCode;
        message = simplefiedError.message;
        errorSources = simplefiedError.errorSources
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config.NODE_ENV === "development" ? err?.stack : null
        // error: err
    })
}
export default globalErrorHandler;