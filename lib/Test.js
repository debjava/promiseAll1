"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const performance_now_1 = __importDefault(require("performance-now"));
const all_tasks_1 = require("./all.tasks");
class Test {
    /**
     * This function simply sleeps for sometime
     * @param seconds
     */
    sleep(seconds) {
        const ms = seconds * 1000;
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * This function takes 7 seconds to perform
     */
    async call1() {
        const summary = [];
        await this.sleep(7);
        const num = 5;
        for (let i = 0; i < num; i++) {
            const value = i.toString();
            summary.push(value);
        }
        return summary;
    }
    /**
     * This method takes 5 seconds to perform
     */
    async call2() {
        const summary = [];
        await this.sleep(5);
        const num = 10;
        for (let i = 5; i < num; i++) {
            const value = i.toString();
            summary.push(value);
        }
        return summary;
    }
    /**
     * This function takes 3 seconds to perform
     */
    async call3() {
        const summary = [];
        await this.sleep(3);
        const num = 15;
        for (let i = 10; i < num; i++) {
            const value = i.toString();
            summary.push(value);
        }
        return summary;
    }
    async callParallely() {
        const allSummary = [];
        const val1 = this.call1();
        const val2 = this.call2();
        const val3 = this.call3();
        const allPromises = [];
        allPromises.push(val1);
        allPromises.push(val2);
        allPromises.push(val3);
        const proms = await Promise.all(allPromises);
        proms.map(val => {
            allSummary.push(...val);
        });
        return allSummary;
    }
    async showResults1() {
        const allSummary = [];
        const start = performance_now_1.default();
        allSummary.push(...await this.call1());
        allSummary.push(...await this.call2());
        allSummary.push(...await this.call3());
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("Total time taken in showResults1(): ", timeInSeconds, "seconds");
        console.log("All Results: ", ...allSummary);
        console.log("--------------------------------------------");
        // allSummary.forEach((val) => {
        //     console.log("Result Value: ", val);
        // });
    }
    async showResults2() {
        const allSummary = [];
        const start = performance_now_1.default();
        console.log("Trying to execute parallely, it provides undesired result ...");
        const val1 = this.call1();
        const val2 = this.call2();
        const val3 = this.call3();
        const newVal = await Promise.all([val1, val2, val3]);
        allSummary.push(...newVal);
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("Total time taken in showResults2(): ", timeInSeconds, "seconds");
        console.log("All Results: ", ...allSummary);
        console.log("--------------------------------------------");
    }
    async showResults3() {
        const start = performance_now_1.default();
        const results = await this.callParallely();
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("Total time taken in showResults3(): ", timeInSeconds, "seconds");
        // console.log("All Results: ", results.join("\t"));
        console.log("All Results: ", ...results);
        console.log("--------------------------------------------");
    }
    async getResult1() {
        const values = await this.call1();
        return values;
    }
    async getResult2() {
        const values = await this.call2();
        return values;
    }
    async getResult3() {
        const values = await this.call3();
        return values;
    }
    async showResults4() {
        console.time("showResults4");
        const start = performance_now_1.default();
        const proms = [];
        let tempPromise = await this.call1();
        proms.push(tempPromise);
        tempPromise = await this.call2();
        proms.push(tempPromise);
        tempPromise = await this.call3();
        proms.push(tempPromise);
        const valSummary = [];
        const allPromises = await Promise.all(proms);
        allPromises.map((value) => {
            valSummary.push(...value);
        });
        const end = performance_now_1.default();
        const timeInSeconds = (end - start) / 1000;
        console.log("Total time taken in showResults4(): ", timeInSeconds, "seconds");
        console.log("All Results: from results4", ...valSummary);
        console.timeEnd("showResults4");
    }
}
exports.Test = Test;
// const test = new Test();
// test.showResults1(); // It takes more time to perform
//
// // The following will not give the desired result
// test.showResults2();
//
// // The following is the fastest way
// test.showResults3();
//
// // Again this is slow one
// test.showResults4();
const allTaskTest = new all_tasks_1.AllTasks();
allTaskTest.showResults1();
// allTaskTest.showResults2();
