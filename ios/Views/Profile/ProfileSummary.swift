import SwiftUI

var dataModule = NativeDataModuleImpl()

class AppState: ObservableObject {
    static let shared = AppState()

    @Published var userName: String = "" {
        didSet {
            notifyReactNative()
        }
    }

    private func notifyReactNative() {
        TurboEventEmitter.shared?.sendStateUpdate(["userName": userName])
    }
}

struct ProfileSummary: View {
    var profile: Profile
    @ObservedObject var state = AppState.shared

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 10) {
                Text("@\(profile.username)")
                    .bold()
                    .font(.title)

                Text("Notifications: \(profile.prefersNotifications ? "On": "Off" )")
                Text("Seasonal Photos: \(profile.seasonalPhoto.rawValue)")
                Text("Goal Date: ") + Text(profile.goalDate, style: .date)
                Button("Set data") {
                  print("call button")
                  state.userName = "@user-\(Int.random(in: 1...100))"
                }
                .buttonStyle(.borderedProminent)
            }
        }
    }
}

#Preview {
    ProfileSummary(profile: Profile.default)
}
