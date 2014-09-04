// Compiled by ClojureScript 0.0-2277
goog.provide('robot.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.set');
robot.core.directions = (new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)],null));
robot.core.transitions = (function (){var states = cljs.core.keys(robot.core.directions);return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,states,cljs.core.rest(cljs.core.cycle(states))));
})();
robot.core.eval = (function (){var method_table__4409__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$72,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("eval",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (p__8906,_){var map__8907 = p__8906;var map__8907__$1 = ((cljs.core.seq_QMARK_(map__8907))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8907):map__8907);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8907__$1,cljs.core.constant$keyword$73);return name;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,cljs.core.constant$keyword$7,hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$74,(function (p__8908,state){var map__8909 = p__8908;var map__8909__$1 = ((cljs.core.seq_QMARK_(map__8909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8909):map__8909);var vec__8910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8909__$1,cljs.core.constant$keyword$75);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8910,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8910,(1),null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8910,(2),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$76,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.array_seq([cljs.core.constant$keyword$77,d], 0));
}));
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$78,(function (_,p__8911){var map__8912 = p__8911;var map__8912__$1 = ((cljs.core.seq_QMARK_(map__8912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8912):map__8912);var state = map__8912__$1;var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8912__$1,cljs.core.constant$keyword$77);var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8912__$1,cljs.core.constant$keyword$76);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$76,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,pos,(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(robot.core.directions) : d.call(null,robot.core.directions)))));
}));
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$79,(function (_,p__8913){var map__8914 = p__8913;var map__8914__$1 = ((cljs.core.seq_QMARK_(map__8914))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8914):map__8914);var state = map__8914__$1;var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8914__$1,cljs.core.constant$keyword$77);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$77,cljs.core.get.cljs$core$IFn$_invoke$arity$2(robot.core.transitions,d));
}));
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$80,(function (_,p__8915){var map__8916 = p__8915;var map__8916__$1 = ((cljs.core.seq_QMARK_(map__8916))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8916):map__8916);var state = map__8916__$1;var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8916__$1,cljs.core.constant$keyword$77);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$77,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(robot.core.transitions),d));
}));
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$81,(function (_,p__8917){var map__8918 = p__8917;var map__8918__$1 = ((cljs.core.seq_QMARK_(map__8918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8918):map__8918);var state = map__8918__$1;var vec__8919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8918__$1,cljs.core.constant$keyword$76);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8919,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8919,(1),null);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8918__$1,cljs.core.constant$keyword$77);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82], null),cljs.core.conj,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name((function (){var or__3543__auto__ = d;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "";
}
})())))));
}));
robot.core.eval.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,state){return state;
}));
robot.core.valid_state_QMARK_ = (function valid_state_QMARK_(p__8920){var map__8922 = p__8920;var map__8922__$1 = ((cljs.core.seq_QMARK_(map__8922))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8922):map__8922);var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8922__$1,cljs.core.constant$keyword$76);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8922__$1,cljs.core.constant$keyword$77);return (cljs.core.contains_QMARK_(robot.core.directions,d)) && (cljs.core.every_QMARK_(cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5))),pos));
});
robot.core.lexems = new cljs.core.PersistentArrayMap(null, 4, [/^\d+/,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,cljs.core.constant$keyword$83], null),/^\,/,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,cljs.core.constant$keyword$84], null),/^\s+/,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,cljs.core.constant$keyword$85], null),/^[A-Z]+/,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,cljs.core.constant$keyword$73], null)], null);
robot.core.str__GT_value = (function str__GT_value(s,t){var G__8924 = (((t instanceof cljs.core.Keyword))?t.fqn:null);switch (G__8924) {
case "name":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(s));

break;
case "number":
return parseInt(s);

break;
default:
return s;

}
});
robot.core.read_lexem = (function read_lexem(expr,p__8926){var vec__8929 = p__8926;var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8929,(0),null);var map__8930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8929,(1),null);var map__8930__$1 = ((cljs.core.seq_QMARK_(map__8930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8930):map__8930);var lexem = map__8930__$1;var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8930__$1,cljs.core.constant$keyword$21);var temp__4126__auto__ = cljs.core.re_find(r,expr);if(cljs.core.truth_(temp__4126__auto__))
{var match = temp__4126__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(expr,r,""),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lexem,cljs.core.constant$keyword$16,robot.core.str__GT_value(match,t))], null);
} else
{return null;
}
});
robot.core.lexer = (function() {
var lexer = null;
var lexer__1 = (function (expr){return lexer.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(expr),cljs.core.PersistentVector.EMPTY);
});
var lexer__2 = (function (expr,ls){while(true){
var temp__4124__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(robot.core.read_lexem,expr),robot.core.lexems);if(cljs.core.truth_(temp__4124__auto__))
{var vec__8932 = temp__4124__auto__;var expr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,(0),null);var lexem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8932,(1),null);{
var G__8933 = expr__$1;
var G__8934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ls,lexem);
expr = G__8933;
ls = G__8934;
continue;
}
} else
{return ls;
}
break;
}
});
lexer = function(expr,ls){
switch(arguments.length){
case 1:
return lexer__1.call(this,expr);
case 2:
return lexer__2.call(this,expr,ls);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lexer.cljs$core$IFn$_invoke$arity$1 = lexer__1;
lexer.cljs$core$IFn$_invoke$arity$2 = lexer__2;
return lexer;
})()
;
robot.core.whitespace_QMARK_ = (function whitespace_QMARK_(p__8935){var map__8937 = p__8935;var map__8937__$1 = ((cljs.core.seq_QMARK_(map__8937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8937):map__8937);var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8937__$1,cljs.core.constant$keyword$21);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.constant$keyword$85);
});
robot.core.syntax = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,cljs.core.constant$keyword$85,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$73], null),(function (p__8938,_,a1,___$1,a2,___$2,a3){var map__8939 = p__8938;var map__8939__$1 = ((cljs.core.seq_QMARK_(map__8939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8939):map__8939);var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8939__$1,cljs.core.constant$keyword$16);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,n,cljs.core.constant$keyword$75,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$16,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,a3], null)))], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73], null),(function (p__8940){var map__8941 = p__8940;var map__8941__$1 = ((cljs.core.seq_QMARK_(map__8941))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8941):map__8941);var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8941__$1,cljs.core.constant$keyword$16);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,n,cljs.core.constant$keyword$75,cljs.core.PersistentVector.EMPTY], null);
})], true, false);
robot.core.parser = (function parser(lexems){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(robot.core.syntax,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21,lexems)));if(cljs.core.truth_(temp__4126__auto__))
{var parse_fn = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(parse_fn,lexems);
} else
{return null;
}
});
robot.core.interpret = (function interpret(state,expr){var ast = robot.core.parser(robot.core.lexer.cljs$core$IFn$_invoke$arity$1(expr));var next_state = (robot.core.eval.cljs$core$IFn$_invoke$arity$2 ? robot.core.eval.cljs$core$IFn$_invoke$arity$2(ast,state) : robot.core.eval.call(null,ast,state));if(robot.core.valid_state_QMARK_(next_state))
{return next_state;
} else
{return state;
}
});
