export declare class CSSMetadata {
    #private;
    constructor(properties: CSSPropertyDefinition[], aliasesFor: Map<string, string>);
    private static sortPrefixesToEnd;
    allProperties(): string[];
    nameValuePresets(includeSVG?: boolean): string[];
    isSVGProperty(name: string): boolean;
    getLonghands(shorthand: string): string[] | null;
    getShorthands(longhand: string): string[] | null;
    isColorAwareProperty(propertyName: string): boolean;
    isFontFamilyProperty(propertyName: string): boolean;
    isAngleAwareProperty(propertyName: string): boolean;
    isGridAreaDefiningProperty(propertyName: string): boolean;
    isLengthProperty(propertyName: string): boolean;
    isBezierAwareProperty(propertyName: string): boolean;
    isFontAwareProperty(propertyName: string): boolean;
    isCustomProperty(propertyName: string): boolean;
    isShadowProperty(propertyName: string): boolean;
    isStringProperty(propertyName: string): boolean;
    canonicalPropertyName(name: string): string;
    isCSSPropertyName(propertyName: string): boolean;
    isPropertyInherited(propertyName: string): boolean;
    private specificPropertyValues;
    getPropertyValues(propertyName: string): string[];
    propertyUsageWeight(property: string): number;
    getValuePreset(key: string, value: string): {
        text: string;
        startColumn: number;
        endColumn: number;
    } | null;
}
export declare const VariableRegex: RegExp;
export declare const CustomVariableRegex: RegExp;
export declare const URLRegex: RegExp;
/**
 * Matches an instance of a grid area 'row' definition.
 * 'grid-template-areas', e.g.
 *    "a a ."
 *
 * 'grid', 'grid-template', e.g.
 *    [track-#name] "a a ." minmax(50px, auto) [track-#name]
 */
export declare const GridAreaRowRegex: RegExp;
export declare function cssMetadata(): CSSMetadata;
export interface CSSPropertyDefinition {
    name: string;
    longhands: string[] | null;
    inherited: boolean | null;
    svg: boolean | null;
}
