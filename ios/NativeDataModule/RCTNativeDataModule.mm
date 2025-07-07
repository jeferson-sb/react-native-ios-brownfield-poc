#import "NativeDataModule.h"
#import "Landmarks-Swift.h"

@implementation RCTNativeDataModule

RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
  (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeDataModuleSpecJSI>(params);
}

NativeDataModuleImpl *nativedatamodule = [[NativeDataModuleImpl alloc] init];

- (NSString *)setData {
    return [nativedatamodule setData];
}

@end
