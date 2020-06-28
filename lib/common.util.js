"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtil = void 0;
class CommonUtil {
    static sleep1(seconds) {
        this.sleep(seconds);
    }
    static async sleep(seconds) {
        const ms = seconds * 1000;
        await new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.CommonUtil = CommonUtil;
