import SwiftUI

struct ContentView: View {
    @State private var selection: Tab = .featured

    enum Tab {
        case featured
        case list
        case feed
    }
    
    var body: some View {
        TabView(selection: $selection) {
            CategoryHome()
                .tabItem {
                    Label("Featured", systemImage: "star")
                }
                .tag(Tab.featured)

            LandmarkList()
                .tabItem {
                    Label("List", systemImage: "list.bullet")
                }
                .tag(Tab.list)
            
            Feed()
                .tabItem {
                    Label("Feed", systemImage: "newspaper.fill")
                }
                .tag(Tab.feed)
        }
    }
}

#Preview {
    ContentView()
        .environment(ModelData())
}
