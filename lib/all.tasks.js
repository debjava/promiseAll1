"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTasks = void 0;
const performance_now_1 = __importDefault(require("performance-now"));
class AllTasks {
    sleep(seconds) {
        const ms = seconds * 1000;
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async washClothes() {
        const summary = [];
        await this.sleep(7);
        const data = "Clothes are ready,";
        summary.push(data);
        return summary;
    }
    async prepareRecepe() {
        const summary = [];
        await this.sleep(9);
        const data = "Recepe is ready,";
        summary.push(data);
        return summary;
    }
    async prepareRice() {
        const summary = [];
        await this.sleep(11);
        const data = "Rice is ready,";
        summary.push(data);
        return summary;
    }
    async boilMilk() {
        const summary = [];
        await this.sleep(5);
        const data = "Milk is ready,";
        summary.push(data);
        return summary;
    }
    async createNVTInstaller() {
        const summary = [];
        await this.sleep(10);
        const data = "Installer is ready,";
        summary.push(data);
        return summary;
    }
    async cleanUtensils() {
        const summary = [];
        await this.sleep(13);
        const data = "Utensils are cleaned";
        summary.push(data);
        return summary;
    }
    async showResults1() {
        const allSummary = [];
        const start = performance_now_1.default();
        allSummary.push(...await this.washClothes()); // Takes 7 seconds
        allSummary.push(...await this.prepareRecepe()); // Takes 9 seconds
        allSummary.push(...await this.prepareRice()); // Takes 11 seconds
        allSummary.push(...await this.createNVTInstaller()); // Takes 10 seconds
        allSummary.push(...await this.boilMilk()); // Takes 5 seconds
        allSummary.push(...await this.cleanUtensils()); // Takes 13 seconds
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("**************************************************************");
        console.log("Total time taken: ", timeInSeconds, "seconds");
        console.log("**************************************************************");
        console.log("All Results: ", ...allSummary);
    }
    async showResults2() {
        const allSummary = [];
        const start = performance_now_1.default();
        const proms = [];
        proms.push(this.washClothes()); // Takes 7 seconds
        proms.push(this.prepareRecepe()); // Takes 9 seconds
        proms.push(this.prepareRice()); // Takes 11 seconds
        proms.push(this.createNVTInstaller()); // Takes 10 seconds
        proms.push(this.boilMilk()); // Takes 5 seconds
        proms.push(this.cleanUtensils()); // Takes 13 seconds
        const allPromises = await Promise.all(proms);
        allPromises.map((value) => {
            allSummary.push(...value);
        });
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("**************************************************************");
        console.log("Total time taken: ", timeInSeconds, "seconds");
        console.log("**************************************************************");
        console.log("All Results: ", ...allSummary);
    }
}
exports.AllTasks = AllTasks;
// const test: AllTasks = new AllTasks();
// // test.showResults1();
// test.showResults2();
