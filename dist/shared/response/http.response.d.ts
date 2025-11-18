import { Response } from "express";
export declare enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}
export declare class HttpResponse {
    Ok(res: Response, data?: any): Response;
    NotFound(res: Response, data?: any): Response;
    Unauthorized(res: Response, data?: any): Response;
    Forbidden(res: Response, data?: any): Response;
    Error(res: Response, data?: any): Response;
}
//# sourceMappingURL=http.response.d.ts.map