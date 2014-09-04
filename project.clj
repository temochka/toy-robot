(defproject robot "0.1.0-SNAPSHOT"
  :description "Toy Robot Simulation for krasdevmeetups"
  :url "http://devmeetups.ru"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [om "0.7.1"]
                 [figwheel "0.1.4-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]
            [com.cemerick/austin "0.1.5"]]
  :figwheel {:http-server-root "public"
             :port 3449
             :css-dirs ["resources/public/css"]}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/robot.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/robot.min.js"
                                   :output-dir "resources/public/out-prod"
                                   :optimizations :advanced
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :pretty-print false}}]})
