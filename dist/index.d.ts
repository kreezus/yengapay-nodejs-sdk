export type PaymentIntentResult = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    contryOrigin: "BF" | "CI";
    reference: string;
    articleId: string | null;
    isPaylink: boolean;
    paymentIntentIsUsed: boolean;
    apiEnv: "prod" | "test";
    paymentSource: string;
    articles: Article[];
    token: string;
    projectId: number;
    checkoutPageUrlWithPaymentToken: string;
    customerNumber: string;
    paymentAmount: number;
    paymentFees: number;
    currency: "XOF";
    transactionStatus: "PENDING";
    transactionType: "PAYMENT";
};
export type Article = {
    price: number;
    title: string;
    pictures: string[];
    description: string;
};
export type PaymentIntent = {
    paymentAmount: number;
    reference: string | undefined;
    articles: Article[];
    customerNumber: string | undefined;
    paymentSource: string | undefined;
};
export declare class YengaPay {
    private groupId;
    private apiKey;
    private projectId;
    private apiUrl;
    constructor();
    _verifyRequiredParameters(): void;
    setApiKey(apiKey: string): YengaPay;
    setGroupId(groupId: string): YengaPay;
    setProjectId(projectId: string): YengaPay;
    createPaymentIntent(data: PaymentIntent): Promise<any>;
}
