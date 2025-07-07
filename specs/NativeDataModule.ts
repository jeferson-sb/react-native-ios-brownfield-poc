import { TurboModuleRegistry } from 'react-native';
import type {TurboModule} from 'react-native';

export interface Spec extends TurboModule {
  setData(value: string): void;
}
export default TurboModuleRegistry.getEnforcing<Spec>('NativeDataModule');