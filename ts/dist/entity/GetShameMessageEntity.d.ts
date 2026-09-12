import { ShameAsAServiceEntityBase } from '../ShameAsAServiceEntityBase';
import type { ShameAsAServiceSDK } from '../ShameAsAServiceSDK';
import type { Control } from '../types';
import type { GetShameMessage, GetShameMessageLoadMatch } from '../ShameAsAServiceTypes';
declare class GetShameMessageEntity extends ShameAsAServiceEntityBase<GetShameMessage> {
    constructor(client: ShameAsAServiceSDK, entopts: any);
    make(this: GetShameMessageEntity): GetShameMessageEntity;
    load(this: any, reqmatch?: GetShameMessageLoadMatch, ctrl?: Control): Promise<GetShameMessageEntity>;
}
export { GetShameMessageEntity };
