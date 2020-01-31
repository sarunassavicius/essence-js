export class EssenceResponse<T> {
    public success: boolean;
    public status: number;
    public response: string;
    public data: T;
}