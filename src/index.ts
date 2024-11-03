import axios from "axios";


export type PaymentIntentResult = {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    contryOrigin: "BF" | "CI",
    reference: string,
    articleId: string | null,
    isPaylink: boolean,
    paymentIntentIsUsed: boolean,
    apiEnv: "prod" | "test",
    paymentSource: string,
    articles: Article[],
    token: string,
    projectId: number,
    checkoutPageUrlWithPaymentToken: string,
    customerNumber: string,
    paymentAmount: number,
    paymentFees: number,
    currency: "XOF",
    transactionStatus: "PENDING",
    transactionType: "PAYMENT"
}

export type Article = {
    price: number,
    title: string,
    pictures: string[],
    description: string
}

export type PaymentIntent = {
    paymentAmount: number,
    reference: string | undefined,
    articles: Article[],
    customerNumber: string | undefined,
    paymentSource: string | undefined,
}


export class YengaPay {
    private groupId: string | undefined;
    private apiKey: string | undefined;
    private projectId: string | undefined;
    private apiUrl: string;
    constructor() {
        this.apiUrl = "https://api.yengapay.com/api/v1/groups";
    }

    _verifyRequiredParameters() {
        if (!this.groupId) {
            throw new Error("The group ID (groupId) should be defined");
        }
        if (!this.apiKey) {
            throw new Error("API KEY (apiKey) should be defined");
        }
        if (!this.projectId) {
            throw new Error("The Project ID (projectId) should be defined");
        }
    };

    setApiKey(apiKey: string): YengaPay {
        this.apiKey = apiKey;
        return this
    };
    setGroupId(groupId: string): YengaPay {
        this.groupId = groupId;
        return this
    };
    setProjectId(projectId: string): YengaPay {
        this.projectId = projectId;
        return this
    };


    async createPaymentIntent(data: PaymentIntent) {
        this._verifyRequiredParameters();
        try {
            const response = await axios.post(`${this.apiUrl}/${this.groupId}/payment-intent/${this.projectId}`, data, {
                headers: {
                    "Content-type": "application/json",
                    "x-api-key": this.apiKey,
                },
            });
            return response.data;
        } catch (error) {
            throw error
        }

    }
}