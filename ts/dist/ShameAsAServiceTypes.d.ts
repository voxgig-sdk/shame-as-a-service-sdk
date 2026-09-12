export interface GetShameMessage {
    country: string;
    detectedFromIp?: boolean;
    ip?: string;
    message: string;
}
export interface GetShameMessageLoadMatch {
    country?: string;
}
