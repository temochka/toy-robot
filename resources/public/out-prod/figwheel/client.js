// Compiled by ClojureScript 0.0-2277
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__10941,args){var map__10943 = p__10941;var map__10943__$1 = ((cljs.core.seq_QMARK_(map__10943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10943):map__10943);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10943__$1,cljs.core.constant$keyword$45);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__10941,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__10941,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__10944){
var p__10941 = cljs.core.first(arglist__10944);
var args = cljs.core.rest(arglist__10944);
return log__delegate(p__10941,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__10945){var map__10947 = p__10945;var map__10947__$1 = ((cljs.core.seq_QMARK_(map__10947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10947):map__10947);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10947__$1,cljs.core.constant$keyword$46);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__10948,callback){var map__10950 = p__10948;var map__10950__$1 = ((cljs.core.seq_QMARK_(map__10950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10950):map__10950);var msg = map__10950__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10950__$1,cljs.core.constant$keyword$47);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10950__$1,cljs.core.constant$keyword$48);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10950__$1,cljs.core.constant$keyword$49);if(cljs.core.truth_((function (){var or__3543__auto__ = dependency_file;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__10950,map__10950__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__10950,map__10950__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__10951,p__10952){var map__10955 = p__10951;var map__10955__$1 = ((cljs.core.seq_QMARK_(map__10955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10955):map__10955);var opts = map__10955__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10955__$1,cljs.core.constant$keyword$50);var map__10956 = p__10952;var map__10956__$1 = ((cljs.core.seq_QMARK_(map__10956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10956):map__10956);var d = map__10956__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10956__$1,cljs.core.constant$keyword$51);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$49,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__10957,p__10958){var map__10999 = p__10957;var map__10999__$1 = ((cljs.core.seq_QMARK_(map__10999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10999):map__10999);var opts = map__10999__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10999__$1,cljs.core.constant$keyword$52);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10999__$1,cljs.core.constant$keyword$53);var map__11000 = p__10958;var map__11000__$1 = ((cljs.core.seq_QMARK_(map__11000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11000):map__11000);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11000__$1,cljs.core.constant$keyword$54);var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files){
return (function (state_11022){var state_val_11023 = (state_11022[(1)]);if((state_val_11023 === (6)))
{var inst_11005 = (state_11022[(7)]);var inst_11014 = (state_11022[(2)]);var inst_11015 = [inst_11005];var inst_11016 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11015,null));var inst_11017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_11016);var state_11022__$1 = (function (){var statearr_11024 = state_11022;(statearr_11024[(8)] = inst_11014);
return statearr_11024;
})();var statearr_11025_11039 = state_11022__$1;(statearr_11025_11039[(2)] = inst_11017);
(statearr_11025_11039[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11023 === (5)))
{var inst_11020 = (state_11022[(2)]);var state_11022__$1 = state_11022;return cljs.core.async.impl.ioc_helpers.return_chan(state_11022__$1,inst_11020);
} else
{if((state_val_11023 === (4)))
{var state_11022__$1 = state_11022;var statearr_11026_11040 = state_11022__$1;(statearr_11026_11040[(2)] = null);
(statearr_11026_11040[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11023 === (3)))
{var inst_11005 = (state_11022[(7)]);var inst_11008 = console.debug("Figwheel: loaded these files");var inst_11009 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$51,inst_11005);var inst_11010 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_11009], 0));var inst_11011 = console.log(inst_11010);var inst_11012 = cljs.core.async.timeout((10));var state_11022__$1 = (function (){var statearr_11027 = state_11022;(statearr_11027[(9)] = inst_11008);
(statearr_11027[(10)] = inst_11011);
return statearr_11027;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11022__$1,(6),inst_11012);
} else
{if((state_val_11023 === (2)))
{var inst_11005 = (state_11022[(7)]);var inst_11005__$1 = (state_11022[(2)]);var inst_11006 = cljs.core.not_empty(inst_11005__$1);var state_11022__$1 = (function (){var statearr_11028 = state_11022;(statearr_11028[(7)] = inst_11005__$1);
return statearr_11028;
})();if(cljs.core.truth_(inst_11006))
{var statearr_11029_11041 = state_11022__$1;(statearr_11029_11041[(1)] = (3));
} else
{var statearr_11030_11042 = state_11022__$1;(statearr_11030_11042[(1)] = (4));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11023 === (1)))
{var inst_11001 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_11002 = figwheel.client.add_request_urls(opts,files);var inst_11003 = figwheel.client.load_all_js_files(inst_11002);var state_11022__$1 = (function (){var statearr_11031 = state_11022;(statearr_11031[(11)] = inst_11001);
return statearr_11031;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11022__$1,(2),inst_11003);
} else
{return null;
}
}
}
}
}
}
});})(c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files))
;return ((function (switch__6208__auto__,c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11035 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11035[(0)] = state_machine__6209__auto__);
(statearr_11035[(1)] = (1));
return statearr_11035;
});
var state_machine__6209__auto____1 = (function (state_11022){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11022);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11036){if((e11036 instanceof Object))
{var ex__6212__auto__ = e11036;var statearr_11037_11043 = state_11022;(statearr_11037_11043[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11022);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11044 = state_11022;
state_11022 = G__11044;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11022){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files))
})();var state__6275__auto__ = (function (){var statearr_11038 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_11038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__,map__10999,map__10999__$1,opts,on_jsload,before_jsload,map__11000,map__11000__$1,files))
);
return c__6273__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__11045,link_href){var map__11047 = p__11045;var map__11047__$1 = ((cljs.core.seq_QMARK_(map__11047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11047):map__11047);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11047__$1,cljs.core.constant$keyword$49);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11047__$1,cljs.core.constant$keyword$51);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__,parent){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__,parent){
return (function (state_11068){var state_val_11069 = (state_11068[(1)]);if((state_val_11069 === (2)))
{var inst_11065 = (state_11068[(2)]);var inst_11066 = parent.removeChild(orig_link);var state_11068__$1 = (function (){var statearr_11070 = state_11068;(statearr_11070[(7)] = inst_11065);
return statearr_11070;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_11068__$1,inst_11066);
} else
{if((state_val_11069 === (1)))
{var inst_11063 = cljs.core.async.timeout((200));var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11068__$1,(2),inst_11063);
} else
{return null;
}
}
});})(c__6273__auto__,parent))
;return ((function (switch__6208__auto__,c__6273__auto__,parent){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11074 = [null,null,null,null,null,null,null,null];(statearr_11074[(0)] = state_machine__6209__auto__);
(statearr_11074[(1)] = (1));
return statearr_11074;
});
var state_machine__6209__auto____1 = (function (state_11068){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11068);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11075){if((e11075 instanceof Object))
{var ex__6212__auto__ = e11075;var statearr_11076_11078 = state_11068;(statearr_11076_11078[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11068);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11079 = state_11068;
state_11068 = G__11079;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11068){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__,parent))
})();var state__6275__auto__ = (function (){var statearr_11077 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_11077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__,parent))
);
return c__6273__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__11080){var map__11082 = p__11080;var map__11082__$1 = ((cljs.core.seq_QMARK_(map__11082))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11082):map__11082);var f_data = map__11082__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11082__$1,cljs.core.constant$keyword$49);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11082__$1,cljs.core.constant$keyword$51);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__11083,files_msg){var map__11105 = p__11083;var map__11105__$1 = ((cljs.core.seq_QMARK_(map__11105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11105):map__11105);var opts = map__11105__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11105__$1,cljs.core.constant$keyword$55);var seq__11106_11126 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__11107_11127 = null;var count__11108_11128 = (0);var i__11109_11129 = (0);while(true){
if((i__11109_11129 < count__11108_11128))
{var f_11130 = chunk__11107_11127.cljs$core$IIndexed$_nth$arity$2(null,i__11109_11129);figwheel.client.reload_css_file(f_11130);
{
var G__11131 = seq__11106_11126;
var G__11132 = chunk__11107_11127;
var G__11133 = count__11108_11128;
var G__11134 = (i__11109_11129 + (1));
seq__11106_11126 = G__11131;
chunk__11107_11127 = G__11132;
count__11108_11128 = G__11133;
i__11109_11129 = G__11134;
continue;
}
} else
{var temp__4126__auto___11135 = cljs.core.seq(seq__11106_11126);if(temp__4126__auto___11135)
{var seq__11106_11136__$1 = temp__4126__auto___11135;if(cljs.core.chunked_seq_QMARK_(seq__11106_11136__$1))
{var c__4299__auto___11137 = cljs.core.chunk_first(seq__11106_11136__$1);{
var G__11138 = cljs.core.chunk_rest(seq__11106_11136__$1);
var G__11139 = c__4299__auto___11137;
var G__11140 = cljs.core.count(c__4299__auto___11137);
var G__11141 = (0);
seq__11106_11126 = G__11138;
chunk__11107_11127 = G__11139;
count__11108_11128 = G__11140;
i__11109_11129 = G__11141;
continue;
}
} else
{var f_11142 = cljs.core.first(seq__11106_11136__$1);figwheel.client.reload_css_file(f_11142);
{
var G__11143 = cljs.core.next(seq__11106_11136__$1);
var G__11144 = null;
var G__11145 = (0);
var G__11146 = (0);
seq__11106_11126 = G__11143;
chunk__11107_11127 = G__11144;
count__11108_11128 = G__11145;
i__11109_11129 = G__11146;
continue;
}
}
} else
{}
}
break;
}
var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload){
return (function (state_11116){var state_val_11117 = (state_11116[(1)]);if((state_val_11117 === (2)))
{var inst_11112 = (state_11116[(2)]);var inst_11113 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_11114 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_11113) : on_cssload.call(null,inst_11113));var state_11116__$1 = (function (){var statearr_11118 = state_11116;(statearr_11118[(7)] = inst_11112);
return statearr_11118;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_11116__$1,inst_11114);
} else
{if((state_val_11117 === (1)))
{var inst_11110 = cljs.core.async.timeout((100));var state_11116__$1 = state_11116;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11116__$1,(2),inst_11110);
} else
{return null;
}
}
});})(c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload))
;return ((function (switch__6208__auto__,c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11122 = [null,null,null,null,null,null,null,null];(statearr_11122[(0)] = state_machine__6209__auto__);
(statearr_11122[(1)] = (1));
return statearr_11122;
});
var state_machine__6209__auto____1 = (function (state_11116){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11116);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11123){if((e11123 instanceof Object))
{var ex__6212__auto__ = e11123;var statearr_11124_11147 = state_11116;(statearr_11124_11147[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11116);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11148 = state_11116;
state_11116 = G__11148;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11116){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload))
})();var state__6275__auto__ = (function (){var statearr_11125 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_11125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__,map__11105,map__11105__$1,opts,on_cssload))
);
return c__6273__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$56)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$56)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster(src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__11149){var map__11154 = p__11149;var map__11154__$1 = ((cljs.core.seq_QMARK_(map__11154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11154):map__11154);var opts = map__11154__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11154__$1,cljs.core.constant$keyword$57);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11154__$1,cljs.core.constant$keyword$58);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11154__$1,cljs.core.constant$keyword$46);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11154__$1,cljs.core.constant$keyword$59);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__11155 = cljs.core._EQ_;var expr__11156 = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__11155.cljs$core$IFn$_invoke$arity$2 ? pred__11155.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$60,expr__11156) : pred__11155.call(null,cljs.core.constant$keyword$60,expr__11156))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__11155.cljs$core$IFn$_invoke$arity$2 ? pred__11155.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$61,expr__11156) : pred__11155.call(null,cljs.core.constant$keyword$61,expr__11156))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__11155.cljs$core$IFn$_invoke$arity$2 ? pred__11155.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$62,expr__11156) : pred__11155.call(null,cljs.core.constant$keyword$62,expr__11156))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$59,(retry_count - (1))));
});})(socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__11154,map__11154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj11161 = {"detail":url};return obj11161;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,cljs.core.constant$keyword$64], null)),get_essential_messages(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__11162){var map__11164 = p__11162;var map__11164__$1 = ((cljs.core.seq_QMARK_(map__11164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11164):map__11164);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11164__$1,cljs.core.constant$keyword$64);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11164__$1,cljs.core.constant$keyword$63);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__11165){var map__11171 = p__11165;var map__11171__$1 = ((cljs.core.seq_QMARK_(map__11171))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11171):map__11171);var ed = map__11171__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11171__$1,cljs.core.constant$keyword$66);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11171__$1,cljs.core.constant$keyword$67);console.debug("Figwheel: Compile Exception");
var seq__11172_11176 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__11173_11177 = null;var count__11174_11178 = (0);var i__11175_11179 = (0);while(true){
if((i__11175_11179 < count__11174_11178))
{var msg_11180 = chunk__11173_11177.cljs$core$IIndexed$_nth$arity$2(null,i__11175_11179);console.log(msg_11180);
{
var G__11181 = seq__11172_11176;
var G__11182 = chunk__11173_11177;
var G__11183 = count__11174_11178;
var G__11184 = (i__11175_11179 + (1));
seq__11172_11176 = G__11181;
chunk__11173_11177 = G__11182;
count__11174_11178 = G__11183;
i__11175_11179 = G__11184;
continue;
}
} else
{var temp__4126__auto___11185 = cljs.core.seq(seq__11172_11176);if(temp__4126__auto___11185)
{var seq__11172_11186__$1 = temp__4126__auto___11185;if(cljs.core.chunked_seq_QMARK_(seq__11172_11186__$1))
{var c__4299__auto___11187 = cljs.core.chunk_first(seq__11172_11186__$1);{
var G__11188 = cljs.core.chunk_rest(seq__11172_11186__$1);
var G__11189 = c__4299__auto___11187;
var G__11190 = cljs.core.count(c__4299__auto___11187);
var G__11191 = (0);
seq__11172_11176 = G__11188;
chunk__11173_11177 = G__11189;
count__11174_11178 = G__11190;
i__11175_11179 = G__11191;
continue;
}
} else
{var msg_11192 = cljs.core.first(seq__11172_11186__$1);console.log(msg_11192);
{
var G__11193 = cljs.core.next(seq__11172_11186__$1);
var G__11194 = null;
var G__11195 = (0);
var G__11196 = (0);
seq__11172_11176 = G__11193;
chunk__11173_11177 = G__11194;
count__11174_11178 = G__11195;
i__11175_11179 = G__11196;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$51,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$59,(100),cljs.core.constant$keyword$58,figwheel.client.default_on_jsload,cljs.core.constant$keyword$52,(function (){var or__3543__auto__ = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$55,figwheel.client.default_on_cssload,cljs.core.constant$keyword$53,figwheel.client.default_before_load,cljs.core.constant$keyword$57,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$50,cljs.core.identity,cljs.core.constant$keyword$46,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__11197){var map__11199 = p__11197;var map__11199__$1 = ((cljs.core.seq_QMARK_(map__11199))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11199):map__11199);var opts = map__11199__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__11197 = null;if (arguments.length > 0) {
  p__11197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__11197);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__11200){
var p__11197 = cljs.core.seq(arglist__11200);
return watch_and_reload__delegate(p__11197);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
