// Compiled by ClojureScript 0.0-2277
goog.provide('robot.ui');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('robot.core');
goog.require('robot.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
robot.ui.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
robot.ui.exec_script = (function exec_script(script,data){var lines = clojure.string.split_lines(script);var state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(robot.core.interpret,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$82,cljs.core.PersistentVector.EMPTY], null),lines);return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(data,state);
});
robot.ui.console = (function console__$1(state,owner){if(typeof robot.ui.t9761 !== 'undefined')
{} else
{
/**
* @constructor
*/
robot.ui.t9761 = (function (owner,state,console,meta9762){
this.owner = owner;
this.state = state;
this.console = console;
this.meta9762 = meta9762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
robot.ui.t9761.cljs$lang$type = true;
robot.ui.t9761.cljs$lang$ctorStr = "robot.ui/t9761";
robot.ui.t9761.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"robot.ui/t9761");
});
robot.ui.t9761.prototype.om$core$IRender$ = true;
robot.ui.t9761.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.code(null,React.DOM.pre(null,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(self__.state))));
});
robot.ui.t9761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9763){var self__ = this;
var _9763__$1 = this;return self__.meta9762;
});
robot.ui.t9761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9763,meta9762__$1){var self__ = this;
var _9763__$1 = this;return (new robot.ui.t9761(self__.owner,self__.state,self__.console,meta9762__$1));
});
robot.ui.__GT_t9761 = (function __GT_t9761(owner__$1,state__$1,console__$1,meta9762){return (new robot.ui.t9761(owner__$1,state__$1,console__$1,meta9762));
});
}
return (new robot.ui.t9761(owner,state,console__$1,null));
});
robot.ui.editor = (function editor(state,owner){if(typeof robot.ui.t9768 !== 'undefined')
{} else
{
/**
* @constructor
*/
robot.ui.t9768 = (function (owner,state,editor,meta9769){
this.owner = owner;
this.state = state;
this.editor = editor;
this.meta9769 = meta9769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
robot.ui.t9768.cljs$lang$type = true;
robot.ui.t9768.cljs$lang$ctorStr = "robot.ui/t9768";
robot.ui.t9768.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"robot.ui/t9768");
});
robot.ui.t9768.prototype.om$core$IRender$ = true;
robot.ui.t9768.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1({"onChange": ((function (this$__$1){
return (function (p1__9764_SHARP_){return robot.ui.exec_script(p1__9764_SHARP_.target.value,self__.state);
});})(this$__$1))
}) : om.dom.textarea.call(null,{"onChange": ((function (this$__$1){
return (function (p1__9764_SHARP_){return robot.ui.exec_script(p1__9764_SHARP_.target.value,self__.state);
});})(this$__$1))
}));
});
robot.ui.t9768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9770){var self__ = this;
var _9770__$1 = this;return self__.meta9769;
});
robot.ui.t9768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9770,meta9769__$1){var self__ = this;
var _9770__$1 = this;return (new robot.ui.t9768(self__.owner,self__.state,self__.editor,meta9769__$1));
});
robot.ui.__GT_t9768 = (function __GT_t9768(owner__$1,state__$1,editor__$1,meta9769){return (new robot.ui.t9768(owner__$1,state__$1,editor__$1,meta9769));
});
}
return (new robot.ui.t9768(owner,state,editor,null));
});
om.core.root(robot.ui.console,robot.ui.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$115,document.getElementById("console")], null));
om.core.root(robot.ui.editor,robot.ui.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$115,document.getElementById("editor")], null));
