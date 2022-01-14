declare const Computer: {
    lockComputer(): Promise<unknown>;
    standbyComputer(isForce?: boolean): Promise<unknown>;
    sleepComputer(isForce?: boolean): Promise<unknown>;
    rebootComputer(seconds?: number): Promise<unknown>;
    closeComputer(seconds?: number, isForce?: boolean): Promise<unknown>;
};
export default Computer;
