declare const Keyboard: {
    sendkey(key?: string, action?: string): Promise<unknown>;
    sendkeypress(combinations?: never[]): Promise<unknown>;
};
export default Keyboard;
