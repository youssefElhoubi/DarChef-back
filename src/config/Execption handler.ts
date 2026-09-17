// all-exceptions.filter.ts
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch() // The empty decorator catches *all* exceptions
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        // Default to 500 Internal Server Error
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        // If it's a known HttpException (like a 404, 400, etc.), use its details
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message = typeof res === 'string' ? res : (res as any).message;
        } else if (exception instanceof Error) {
            // For other unexpected errors, we can log the full error
            this.logger.error(exception.message, exception.stack);
            message = exception.message;
        }

        // Build the response body to match your ErrorResponseDTO
        response.status(status).json({
            timestamp: new Date().toISOString(),
            httpCode: status,
            errorType: exception instanceof Error ? exception.constructor.name : 'UnknownException', // e.g., "BadRequestException"
            message: message,
            path: request.url,
        });
    }
}