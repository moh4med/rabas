/**
 * index.tsx
 */

import { SectionVM } from "../../../viewModels/SectionVM";

export interface IStateProps {
    index?: number;
    sectionId?: number;
    section?: SectionVM;
    content?: any;
    isCollapsed?: boolean;
    collapsedSections?: boolean[];
}

export interface IStateActions {
    updateCollapsibleSection(sectionId: number, isCollapsed: boolean): any;

}
