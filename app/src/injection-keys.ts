import type { InjectionKey } from 'vue';
import type PocketBase from 'pocketbase';
import type { Authenticator } from '@/services/authenticator';

const POCKETBASE: InjectionKey<PocketBase> = Symbol('PocketBase');
const AUTHENTICATOR: InjectionKey<Authenticator> = Symbol('PocketBase');

export default {
    POCKETBASE,
    AUTHENTICATOR,
};