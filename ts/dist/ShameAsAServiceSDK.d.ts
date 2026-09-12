import { GetShameMessageEntity } from './entity/GetShameMessageEntity';
export type * from './ShameAsAServiceTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ShameAsAServiceEntityBase } from './ShameAsAServiceEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ShameAsAServiceSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetShameMessage(entopts?: Record<string, any>): GetShameMessageEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ShameAsAServiceSDK;
    tester(testopts?: any, sdkopts?: any): ShameAsAServiceSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ShameAsAServiceSDK;
export { stdutil, config, BaseFeature, ShameAsAServiceEntityBase, ShameAsAServiceSDK, SDK, };
