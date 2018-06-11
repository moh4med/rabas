/**
 * terminalVM.tsx
 */
import { TerminalCodes } from "../enums";

export class TerminalVM {
    public terminalCode: TerminalCodes;
    constructor(terminalCode: TerminalCodes) {
        this.terminalCode = terminalCode;
    }
    // should be set dynamically depending on the platform type and technology
    // refer to terminalCodes Enum
}
