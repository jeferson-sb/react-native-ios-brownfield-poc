import Foundation

@objc public class NativeDataModuleImpl: NSObject {
  var data: String?

  @objc public func setData(_ value: String) {
    data = value
  }
}


