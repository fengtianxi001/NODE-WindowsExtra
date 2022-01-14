declare const Clipboard: {
    clearClip(): Promise<unknown>;
    copyText2Clip(text: string): Promise<unknown>;
    copyFileContent2Clip(filePath: string): Promise<unknown>;
    writeFileFromClip(filePath: string): Promise<unknown>;
    appendFileFromClip(filePath: string): Promise<unknown>;
    saveImageFromClip(imgPath: string): Promise<unknown>;
    copyImage2Clip(imgPath: string): Promise<unknown>;
};
export default Clipboard;
