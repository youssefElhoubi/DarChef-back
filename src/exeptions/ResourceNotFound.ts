export class ResourceNotFound extends Error {
    public readonly code :number;
    constructor(message: string, code: number = 404) {
        super(message);
        this.name = 'ResourceNotFound';
        this.code = code;
    }
}