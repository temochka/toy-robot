(ns robot.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [robot.core :as robot]
            [clojure.string :refer [join split-lines]]))

(def state (atom {}))

(defn exec-script [script data]
  (let [lines (split-lines script)
        state (reduce robot/interpret {:output []} lines)]
    (om/update! data state)))

(defn console [state owner]
  (reify
    om/IRender
    (render [this] 
      (dom/code nil (dom/pre nil (join "\n" (:output state)))))))

(defn editor [state owner]
  (reify
    om/IRender
    (render [this]
      (dom/textarea #js {:onChange #(exec-script (.. % -target -value) state)}))))

(om/root console state {:target (. js/document (getElementById "console"))})
(om/root editor state {:target (. js/document (getElementById "editor"))})
