"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YengaPay = void 0;
const axios_1 = __importDefault(require("axios"));
class YengaPay {
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
    }
    ;
    setApiKey(apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    ;
    setGroupId(groupId) {
        this.groupId = groupId;
        return this;
    }
    ;
    setProjectId(projectId) {
        this.projectId = projectId;
        return this;
    }
    ;
    createPaymentIntent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this._verifyRequiredParameters();
            try {
                const response = yield axios_1.default.post(`${this.apiUrl}/${this.groupId}/payment-intent/${this.projectId}`, data, {
                    headers: {
                        "Content-type": "application/json",
                        "x-api-key": this.apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.YengaPay = YengaPay;
