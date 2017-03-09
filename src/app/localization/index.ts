/**
 * Barrel
 * A way to roll up exports from several ES2015 modules 
 * into a single convenient ES2015 module. The barrel 
 * itself is an ES2015 module file that re-exports 
 * selected exports of other ES2015 modules.
 * It is called 'index', by convention.
 */
export * from './localization.service';
export * from './localization';