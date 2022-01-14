declare const Mouse: {
    sendMouse(x: number, y: number): Promise<unknown>;
    setsMousewin(x: number, y: number): Promise<unknown>;
    moveMouse(x: number, y: number): Promise<unknown>;
    mouseEvent(dir?: string, action?: string): Promise<unknown>;
    moveWheel(distance?: number): Promise<unknown>;
};
export default Mouse;
