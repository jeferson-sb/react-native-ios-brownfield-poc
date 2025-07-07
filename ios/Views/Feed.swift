import SwiftUI
import ReactBrownfield

struct Feed: View {
    var body: some View {
      ReactNativeView(moduleName: "LandmarksFeed", initialProperties: ["title": "This is string from swift"])
    }
}
