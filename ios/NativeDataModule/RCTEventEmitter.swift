import Foundation
import React

@objc(TurboEventEmitter)
class TurboEventEmitter: RCTEventEmitter {

  public static var shared: TurboEventEmitter?

  override init() {
    super.init()
    TurboEventEmitter.shared = self
  }

  override func supportedEvents() -> [String]! {
    return ["onAppStateChanged"]
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func sendStateUpdate(_ data: [String: Any]) {
    sendEvent(withName: "onAppStateChanged", body: data)
  }
}
