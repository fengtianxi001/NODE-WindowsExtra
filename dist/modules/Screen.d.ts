declare const Screen: {
    closeScreen(): Promise<unknown>;
    openScreen(): Promise<unknown>;
    lowPowerScreen(): Promise<unknown>;
    saverScreen(): Promise<unknown>;
    setPrimaryScreen(monitorIndex?: number): Promise<unknown>;
    setScreenBrightness(level: number, mode?: number): Promise<unknown>;
};
export default Screen;
