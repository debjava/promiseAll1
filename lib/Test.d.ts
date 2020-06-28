export declare class Test {
    /**
     * This function simply sleeps for sometime
     * @param seconds
     */
    sleep(seconds: number): Promise<void>;
    /**
     * This function takes 7 seconds to perform
     */
    call1(): Promise<string[]>;
    /**
     * This method takes 5 seconds to perform
     */
    call2(): Promise<string[]>;
    /**
     * This function takes 3 seconds to perform
     */
    call3(): Promise<string[]>;
    callParallely(): Promise<string[]>;
    showResults1(): Promise<void>;
    showResults2(): Promise<void>;
    showResults3(): Promise<void>;
    getResult1(): Promise<string[]>;
    getResult2(): Promise<string[]>;
    getResult3(): Promise<string[]>;
    showResults4(): Promise<void>;
}
