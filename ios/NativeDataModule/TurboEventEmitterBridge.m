#import <React/RCTEventEmitter.h> // <- This line is essential
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TurboEventEmitter, RCTEventEmitter)

RCT_EXTERN_METHOD(sendStateUpdate:(NSDictionary *)data)

@end
