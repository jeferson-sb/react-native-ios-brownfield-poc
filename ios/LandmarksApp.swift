import SwiftUI
import ReactBrownfield

@main
struct LandmarksApp: App {
    @State private var modelData = ModelData()
    
    init() {
      ReactNativeBrownfield.shared.startReactNative {
        print("⚛️ React Native bundle loaded")
      }
    }
  
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(modelData)
        }
    }
}
