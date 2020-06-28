"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTasks = void 0;
class TestTasks {
    sleep(seconds) {
        const ms = seconds * 1000;
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async washClothes() {
        const summary = [];
        await this.sleep(7);
        const data = "Clothes are ready";
        summary.push(data);
        return summary;
    }
}
exports.TestTasks = TestTasks;
