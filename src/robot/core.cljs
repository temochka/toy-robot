(ns robot.core
  (:require [clojure.set :refer [map-invert]]
            [clojure.string :refer [upper-case lower-case trim]]))

(def directions
  (array-map :north [0 1]
             :east [1 0]
             :south [0 -1]
             :west [-1 0]))

(def transitions
  (let [states (keys directions)]
    (into {} (map vector states (rest (cycle states))))))

(defmulti eval (fn [{name :name} _] name))

(defmethod eval :place [{[x y d] :args} state]
  (-> state (assoc :pos [x y] :d d)))

(defmethod eval :move [_ {:keys [pos d] :as state}]
  (-> state (assoc :pos (vec (map + pos (d directions)))))) 

(defmethod eval :right [_ {d :d :as state}]
  (-> state (assoc :d (get transitions d))))

(defmethod eval :left [_ {d :d :as state}]
  (-> state (assoc :d (get (map-invert transitions) d))))

(defmethod eval :report [_ {[x y] :pos d :d :as state}]
  (-> state (update-in [:output] conj (str x "," y "," (upper-case (name (or d "")))))))

(defmethod eval :default [_ state] state)

(defn valid-state? [{pos :pos d :d}]
  (and (contains? directions d) (every? (set (range 0 5)) pos)))

(def lexems
  {#"^\d+" {:type :number}
   #"^\," {:type :comma}
   #"^\s+" {:type :whitespace}
   #"^[A-Z]+" {:type :name}})

(defn str->value [s t]
  (case t
    :number (js/parseInt s)
    :name (-> s lower-case keyword)
    s))

(defn- read-lexem
  [expr [r {t :type :as lexem}]]
  (when-let [match (re-find r expr)]
    [(clojure.string/replace expr r "")
     (assoc lexem :value (str->value match t))]))

(defn lexer 
  ([expr] (lexer (trim expr) []))
  ([expr ls]
   (if-let [[expr lexem] (some (partial read-lexem expr) lexems)]
     (recur expr (conj ls lexem))
     ls)))

(defn- whitespace? [{t :type}]
  (= t :whitespace))

(def syntax
  {[:name :whitespace :number :comma :number :comma :name]
   (fn [{n :value} _ a1 _ a2 _ a3]
     {:name n :args (vec (map :value [a1 a2 a3]))})
   [:name]
   (fn [{n :value}] {:name n :args []})})

(defn parser [lexems]
  (when-let [parse-fn (get syntax (->> lexems (map :type) vec))]
    (apply parse-fn lexems)))

(defn interpret [state expr]
  (let [ast (-> expr lexer parser)
        next-state (eval ast state)]
    (if (valid-state? next-state) next-state state)))

