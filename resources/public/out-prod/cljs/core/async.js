// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11315 = (function (f,fn_handler,meta11316){
this.f = f;
this.fn_handler = fn_handler;
this.meta11316 = meta11316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11315.cljs$lang$type = true;
cljs.core.async.t11315.cljs$lang$ctorStr = "cljs.core.async/t11315";
cljs.core.async.t11315.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11315");
});
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11317){var self__ = this;
var _11317__$1 = this;return self__.meta11316;
});
cljs.core.async.t11315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11317,meta11316__$1){var self__ = this;
var _11317__$1 = this;return (new cljs.core.async.t11315(self__.f,self__.fn_handler,meta11316__$1));
});
cljs.core.async.__GT_t11315 = (function __GT_t11315(f__$1,fn_handler__$1,meta11316){return (new cljs.core.async.t11315(f__$1,fn_handler__$1,meta11316));
});
}
return (new cljs.core.async.t11315(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11319 = buff;if(G__11319)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__11319.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11319.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__11319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__11319);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_11320 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11320) : fn1.call(null,val_11320));
} else
{cljs.core.async.impl.dispatch.run(((function (val_11320,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11320) : fn1.call(null,val_11320));
});})(val_11320,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___11321 = n;var x_11322 = (0);while(true){
if((x_11322 < n__4399__auto___11321))
{(a[x_11322] = (0));
{
var G__11323 = (x_11322 + (1));
x_11322 = G__11323;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11324 = (i + (1));
i = G__11324;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t11328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11328 = (function (flag,alt_flag,meta11329){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11328.cljs$lang$type = true;
cljs.core.async.t11328.cljs$lang$ctorStr = "cljs.core.async/t11328";
cljs.core.async.t11328.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11328");
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11330){var self__ = this;
var _11330__$1 = this;return self__.meta11329;
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11330,meta11329__$1){var self__ = this;
var _11330__$1 = this;return (new cljs.core.async.t11328(self__.flag,self__.alt_flag,meta11329__$1));
});})(flag))
;
cljs.core.async.__GT_t11328 = ((function (flag){
return (function __GT_t11328(flag__$1,alt_flag__$1,meta11329){return (new cljs.core.async.t11328(flag__$1,alt_flag__$1,meta11329));
});})(flag))
;
}
return (new cljs.core.async.t11328(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11334 = (function (cb,flag,alt_handler,meta11335){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11334.cljs$lang$type = true;
cljs.core.async.t11334.cljs$lang$ctorStr = "cljs.core.async/t11334";
cljs.core.async.t11334.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11334");
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t11334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11336){var self__ = this;
var _11336__$1 = this;return self__.meta11335;
});
cljs.core.async.t11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11336,meta11335__$1){var self__ = this;
var _11336__$1 = this;return (new cljs.core.async.t11334(self__.cb,self__.flag,self__.alt_handler,meta11335__$1));
});
cljs.core.async.__GT_t11334 = (function __GT_t11334(cb__$1,flag__$1,alt_handler__$1,meta11335){return (new cljs.core.async.t11334(cb__$1,flag__$1,alt_handler__$1,meta11335));
});
}
return (new cljs.core.async.t11334(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11337_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11337_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11337_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11338_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11338_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11338_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11339 = (i + (1));
i = G__11339;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11340){var map__11342 = p__11340;var map__11342__$1 = ((cljs.core.seq_QMARK_(map__11342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11342):map__11342);var opts = map__11342__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11340 = null;if (arguments.length > 1) {
  p__11340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11340);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11343){
var ports = cljs.core.first(arglist__11343);
var p__11340 = cljs.core.rest(arglist__11343);
return alts_BANG___delegate(ports,p__11340);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11351 = (function (ch,f,map_LT_,meta11352){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11352 = meta11352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11351.cljs$lang$type = true;
cljs.core.async.t11351.cljs$lang$ctorStr = "cljs.core.async/t11351";
cljs.core.async.t11351.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11351");
});
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t11354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11354 = (function (fn1,_,meta11352,ch,f,map_LT_,meta11355){
this.fn1 = fn1;
this._ = _;
this.meta11352 = meta11352;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11355 = meta11355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11354.cljs$lang$type = true;
cljs.core.async.t11354.cljs$lang$ctorStr = "cljs.core.async/t11354";
cljs.core.async.t11354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11354");
});})(___$1))
;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11344_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__11344_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11344_SHARP_) : self__.f.call(null,p1__11344_SHARP_)))) : f1.call(null,(((p1__11344_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11344_SHARP_) : self__.f.call(null,p1__11344_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11356){var self__ = this;
var _11356__$1 = this;return self__.meta11355;
});})(___$1))
;
cljs.core.async.t11354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11356,meta11355__$1){var self__ = this;
var _11356__$1 = this;return (new cljs.core.async.t11354(self__.fn1,self__._,self__.meta11352,self__.ch,self__.f,self__.map_LT_,meta11355__$1));
});})(___$1))
;
cljs.core.async.__GT_t11354 = ((function (___$1){
return (function __GT_t11354(fn1__$1,___$2,meta11352__$1,ch__$2,f__$2,map_LT___$2,meta11355){return (new cljs.core.async.t11354(fn1__$1,___$2,meta11352__$1,ch__$2,f__$2,map_LT___$2,meta11355));
});})(___$1))
;
}
return (new cljs.core.async.t11354(fn1,___$1,self__.meta11352,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t11351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11353){var self__ = this;
var _11353__$1 = this;return self__.meta11352;
});
cljs.core.async.t11351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11353,meta11352__$1){var self__ = this;
var _11353__$1 = this;return (new cljs.core.async.t11351(self__.ch,self__.f,self__.map_LT_,meta11352__$1));
});
cljs.core.async.__GT_t11351 = (function __GT_t11351(ch__$1,f__$1,map_LT___$1,meta11352){return (new cljs.core.async.t11351(ch__$1,f__$1,map_LT___$1,meta11352));
});
}
return (new cljs.core.async.t11351(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11360 = (function (ch,f,map_GT_,meta11361){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11361 = meta11361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11360.cljs$lang$type = true;
cljs.core.async.t11360.cljs$lang$ctorStr = "cljs.core.async/t11360";
cljs.core.async.t11360.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11360");
});
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11362){var self__ = this;
var _11362__$1 = this;return self__.meta11361;
});
cljs.core.async.t11360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11362,meta11361__$1){var self__ = this;
var _11362__$1 = this;return (new cljs.core.async.t11360(self__.ch,self__.f,self__.map_GT_,meta11361__$1));
});
cljs.core.async.__GT_t11360 = (function __GT_t11360(ch__$1,f__$1,map_GT___$1,meta11361){return (new cljs.core.async.t11360(ch__$1,f__$1,map_GT___$1,meta11361));
});
}
return (new cljs.core.async.t11360(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11366 = (function (ch,p,filter_GT_,meta11367){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11367 = meta11367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11366.cljs$lang$type = true;
cljs.core.async.t11366.cljs$lang$ctorStr = "cljs.core.async/t11366";
cljs.core.async.t11366.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11366");
});
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t11366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11368){var self__ = this;
var _11368__$1 = this;return self__.meta11367;
});
cljs.core.async.t11366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11368,meta11367__$1){var self__ = this;
var _11368__$1 = this;return (new cljs.core.async.t11366(self__.ch,self__.p,self__.filter_GT_,meta11367__$1));
});
cljs.core.async.__GT_t11366 = (function __GT_t11366(ch__$1,p__$1,filter_GT___$1,meta11367){return (new cljs.core.async.t11366(ch__$1,p__$1,filter_GT___$1,meta11367));
});
}
return (new cljs.core.async.t11366(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___11451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___11451,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___11451,out){
return (function (state_11430){var state_val_11431 = (state_11430[(1)]);if((state_val_11431 === (7)))
{var inst_11426 = (state_11430[(2)]);var state_11430__$1 = state_11430;var statearr_11432_11452 = state_11430__$1;(statearr_11432_11452[(2)] = inst_11426);
(statearr_11432_11452[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (1)))
{var state_11430__$1 = state_11430;var statearr_11433_11453 = state_11430__$1;(statearr_11433_11453[(2)] = null);
(statearr_11433_11453[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (4)))
{var inst_11412 = (state_11430[(7)]);var inst_11412__$1 = (state_11430[(2)]);var inst_11413 = (inst_11412__$1 == null);var state_11430__$1 = (function (){var statearr_11434 = state_11430;(statearr_11434[(7)] = inst_11412__$1);
return statearr_11434;
})();if(cljs.core.truth_(inst_11413))
{var statearr_11435_11454 = state_11430__$1;(statearr_11435_11454[(1)] = (5));
} else
{var statearr_11436_11455 = state_11430__$1;(statearr_11436_11455[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (6)))
{var inst_11412 = (state_11430[(7)]);var inst_11417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11412) : p.call(null,inst_11412));var state_11430__$1 = state_11430;if(cljs.core.truth_(inst_11417))
{var statearr_11437_11456 = state_11430__$1;(statearr_11437_11456[(1)] = (8));
} else
{var statearr_11438_11457 = state_11430__$1;(statearr_11438_11457[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (3)))
{var inst_11428 = (state_11430[(2)]);var state_11430__$1 = state_11430;return cljs.core.async.impl.ioc_helpers.return_chan(state_11430__$1,inst_11428);
} else
{if((state_val_11431 === (2)))
{var state_11430__$1 = state_11430;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11430__$1,(4),ch);
} else
{if((state_val_11431 === (11)))
{var inst_11420 = (state_11430[(2)]);var state_11430__$1 = state_11430;var statearr_11439_11458 = state_11430__$1;(statearr_11439_11458[(2)] = inst_11420);
(statearr_11439_11458[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (9)))
{var state_11430__$1 = state_11430;var statearr_11440_11459 = state_11430__$1;(statearr_11440_11459[(2)] = null);
(statearr_11440_11459[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (5)))
{var inst_11415 = cljs.core.async.close_BANG_(out);var state_11430__$1 = state_11430;var statearr_11441_11460 = state_11430__$1;(statearr_11441_11460[(2)] = inst_11415);
(statearr_11441_11460[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (10)))
{var inst_11423 = (state_11430[(2)]);var state_11430__$1 = (function (){var statearr_11442 = state_11430;(statearr_11442[(8)] = inst_11423);
return statearr_11442;
})();var statearr_11443_11461 = state_11430__$1;(statearr_11443_11461[(2)] = null);
(statearr_11443_11461[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11431 === (8)))
{var inst_11412 = (state_11430[(7)]);var state_11430__$1 = state_11430;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11430__$1,(11),out,inst_11412);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___11451,out))
;return ((function (switch__6208__auto__,c__6273__auto___11451,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11447 = [null,null,null,null,null,null,null,null,null];(statearr_11447[(0)] = state_machine__6209__auto__);
(statearr_11447[(1)] = (1));
return statearr_11447;
});
var state_machine__6209__auto____1 = (function (state_11430){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11430);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11448){if((e11448 instanceof Object))
{var ex__6212__auto__ = e11448;var statearr_11449_11462 = state_11430;(statearr_11449_11462[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11430);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11463 = state_11430;
state_11430 = G__11463;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11430){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___11451,out))
})();var state__6275__auto__ = (function (){var statearr_11450 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___11451);
return statearr_11450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___11451,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__){
return (function (state_11629){var state_val_11630 = (state_11629[(1)]);if((state_val_11630 === (7)))
{var inst_11625 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11631_11672 = state_11629__$1;(statearr_11631_11672[(2)] = inst_11625);
(statearr_11631_11672[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (20)))
{var inst_11595 = (state_11629[(7)]);var inst_11606 = (state_11629[(2)]);var inst_11607 = cljs.core.next(inst_11595);var inst_11581 = inst_11607;var inst_11582 = null;var inst_11583 = (0);var inst_11584 = (0);var state_11629__$1 = (function (){var statearr_11632 = state_11629;(statearr_11632[(8)] = inst_11583);
(statearr_11632[(9)] = inst_11606);
(statearr_11632[(10)] = inst_11584);
(statearr_11632[(11)] = inst_11581);
(statearr_11632[(12)] = inst_11582);
return statearr_11632;
})();var statearr_11633_11673 = state_11629__$1;(statearr_11633_11673[(2)] = null);
(statearr_11633_11673[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (1)))
{var state_11629__$1 = state_11629;var statearr_11634_11674 = state_11629__$1;(statearr_11634_11674[(2)] = null);
(statearr_11634_11674[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (4)))
{var inst_11570 = (state_11629[(13)]);var inst_11570__$1 = (state_11629[(2)]);var inst_11571 = (inst_11570__$1 == null);var state_11629__$1 = (function (){var statearr_11635 = state_11629;(statearr_11635[(13)] = inst_11570__$1);
return statearr_11635;
})();if(cljs.core.truth_(inst_11571))
{var statearr_11636_11675 = state_11629__$1;(statearr_11636_11675[(1)] = (5));
} else
{var statearr_11637_11676 = state_11629__$1;(statearr_11637_11676[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (15)))
{var state_11629__$1 = state_11629;var statearr_11641_11677 = state_11629__$1;(statearr_11641_11677[(2)] = null);
(statearr_11641_11677[(1)] = (16));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (21)))
{var state_11629__$1 = state_11629;var statearr_11642_11678 = state_11629__$1;(statearr_11642_11678[(2)] = null);
(statearr_11642_11678[(1)] = (23));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (13)))
{var inst_11583 = (state_11629[(8)]);var inst_11584 = (state_11629[(10)]);var inst_11581 = (state_11629[(11)]);var inst_11582 = (state_11629[(12)]);var inst_11591 = (state_11629[(2)]);var inst_11592 = (inst_11584 + (1));var tmp11638 = inst_11583;var tmp11639 = inst_11581;var tmp11640 = inst_11582;var inst_11581__$1 = tmp11639;var inst_11582__$1 = tmp11640;var inst_11583__$1 = tmp11638;var inst_11584__$1 = inst_11592;var state_11629__$1 = (function (){var statearr_11643 = state_11629;(statearr_11643[(8)] = inst_11583__$1);
(statearr_11643[(14)] = inst_11591);
(statearr_11643[(10)] = inst_11584__$1);
(statearr_11643[(11)] = inst_11581__$1);
(statearr_11643[(12)] = inst_11582__$1);
return statearr_11643;
})();var statearr_11644_11679 = state_11629__$1;(statearr_11644_11679[(2)] = null);
(statearr_11644_11679[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (22)))
{var state_11629__$1 = state_11629;var statearr_11645_11680 = state_11629__$1;(statearr_11645_11680[(2)] = null);
(statearr_11645_11680[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (6)))
{var inst_11570 = (state_11629[(13)]);var inst_11579 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11570) : f.call(null,inst_11570));var inst_11580 = cljs.core.seq(inst_11579);var inst_11581 = inst_11580;var inst_11582 = null;var inst_11583 = (0);var inst_11584 = (0);var state_11629__$1 = (function (){var statearr_11646 = state_11629;(statearr_11646[(8)] = inst_11583);
(statearr_11646[(10)] = inst_11584);
(statearr_11646[(11)] = inst_11581);
(statearr_11646[(12)] = inst_11582);
return statearr_11646;
})();var statearr_11647_11681 = state_11629__$1;(statearr_11647_11681[(2)] = null);
(statearr_11647_11681[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (17)))
{var inst_11595 = (state_11629[(7)]);var inst_11599 = cljs.core.chunk_first(inst_11595);var inst_11600 = cljs.core.chunk_rest(inst_11595);var inst_11601 = cljs.core.count(inst_11599);var inst_11581 = inst_11600;var inst_11582 = inst_11599;var inst_11583 = inst_11601;var inst_11584 = (0);var state_11629__$1 = (function (){var statearr_11648 = state_11629;(statearr_11648[(8)] = inst_11583);
(statearr_11648[(10)] = inst_11584);
(statearr_11648[(11)] = inst_11581);
(statearr_11648[(12)] = inst_11582);
return statearr_11648;
})();var statearr_11649_11682 = state_11629__$1;(statearr_11649_11682[(2)] = null);
(statearr_11649_11682[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (3)))
{var inst_11627 = (state_11629[(2)]);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.return_chan(state_11629__$1,inst_11627);
} else
{if((state_val_11630 === (12)))
{var inst_11615 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11650_11683 = state_11629__$1;(statearr_11650_11683[(2)] = inst_11615);
(statearr_11650_11683[(1)] = (9));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (2)))
{var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11629__$1,(4),in$);
} else
{if((state_val_11630 === (23)))
{var inst_11623 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11651_11684 = state_11629__$1;(statearr_11651_11684[(2)] = inst_11623);
(statearr_11651_11684[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (19)))
{var inst_11610 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11652_11685 = state_11629__$1;(statearr_11652_11685[(2)] = inst_11610);
(statearr_11652_11685[(1)] = (16));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (11)))
{var inst_11581 = (state_11629[(11)]);var inst_11595 = (state_11629[(7)]);var inst_11595__$1 = cljs.core.seq(inst_11581);var state_11629__$1 = (function (){var statearr_11653 = state_11629;(statearr_11653[(7)] = inst_11595__$1);
return statearr_11653;
})();if(inst_11595__$1)
{var statearr_11654_11686 = state_11629__$1;(statearr_11654_11686[(1)] = (14));
} else
{var statearr_11655_11687 = state_11629__$1;(statearr_11655_11687[(1)] = (15));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (9)))
{var inst_11617 = (state_11629[(2)]);var inst_11618 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_11629__$1 = (function (){var statearr_11656 = state_11629;(statearr_11656[(15)] = inst_11617);
return statearr_11656;
})();if(cljs.core.truth_(inst_11618))
{var statearr_11657_11688 = state_11629__$1;(statearr_11657_11688[(1)] = (21));
} else
{var statearr_11658_11689 = state_11629__$1;(statearr_11658_11689[(1)] = (22));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (5)))
{var inst_11573 = cljs.core.async.close_BANG_(out);var state_11629__$1 = state_11629;var statearr_11659_11690 = state_11629__$1;(statearr_11659_11690[(2)] = inst_11573);
(statearr_11659_11690[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (14)))
{var inst_11595 = (state_11629[(7)]);var inst_11597 = cljs.core.chunked_seq_QMARK_(inst_11595);var state_11629__$1 = state_11629;if(inst_11597)
{var statearr_11660_11691 = state_11629__$1;(statearr_11660_11691[(1)] = (17));
} else
{var statearr_11661_11692 = state_11629__$1;(statearr_11661_11692[(1)] = (18));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (16)))
{var inst_11613 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11662_11693 = state_11629__$1;(statearr_11662_11693[(2)] = inst_11613);
(statearr_11662_11693[(1)] = (12));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11630 === (10)))
{var inst_11584 = (state_11629[(10)]);var inst_11582 = (state_11629[(12)]);var inst_11589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11582,inst_11584);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11629__$1,(13),out,inst_11589);
} else
{if((state_val_11630 === (18)))
{var inst_11595 = (state_11629[(7)]);var inst_11604 = cljs.core.first(inst_11595);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11629__$1,(20),out,inst_11604);
} else
{if((state_val_11630 === (8)))
{var inst_11583 = (state_11629[(8)]);var inst_11584 = (state_11629[(10)]);var inst_11586 = (inst_11584 < inst_11583);var inst_11587 = inst_11586;var state_11629__$1 = state_11629;if(cljs.core.truth_(inst_11587))
{var statearr_11663_11694 = state_11629__$1;(statearr_11663_11694[(1)] = (10));
} else
{var statearr_11664_11695 = state_11629__$1;(statearr_11664_11695[(1)] = (11));
}
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto__))
;return ((function (switch__6208__auto__,c__6273__auto__){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11668[(0)] = state_machine__6209__auto__);
(statearr_11668[(1)] = (1));
return statearr_11668;
});
var state_machine__6209__auto____1 = (function (state_11629){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11629);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11669){if((e11669 instanceof Object))
{var ex__6212__auto__ = e11669;var statearr_11670_11696 = state_11629;(statearr_11670_11696[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11629);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11697 = state_11629;
state_11629 = G__11697;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11629){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__))
})();var state__6275__auto__ = (function (){var statearr_11671 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_11671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__))
);
return c__6273__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6273__auto___11792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___11792){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___11792){
return (function (state_11768){var state_val_11769 = (state_11768[(1)]);if((state_val_11769 === (7)))
{var inst_11764 = (state_11768[(2)]);var state_11768__$1 = state_11768;var statearr_11770_11793 = state_11768__$1;(statearr_11770_11793[(2)] = inst_11764);
(statearr_11770_11793[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (1)))
{var state_11768__$1 = state_11768;var statearr_11771_11794 = state_11768__$1;(statearr_11771_11794[(2)] = null);
(statearr_11771_11794[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (4)))
{var inst_11747 = (state_11768[(7)]);var inst_11747__$1 = (state_11768[(2)]);var inst_11748 = (inst_11747__$1 == null);var state_11768__$1 = (function (){var statearr_11772 = state_11768;(statearr_11772[(7)] = inst_11747__$1);
return statearr_11772;
})();if(cljs.core.truth_(inst_11748))
{var statearr_11773_11795 = state_11768__$1;(statearr_11773_11795[(1)] = (5));
} else
{var statearr_11774_11796 = state_11768__$1;(statearr_11774_11796[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (13)))
{var state_11768__$1 = state_11768;var statearr_11775_11797 = state_11768__$1;(statearr_11775_11797[(2)] = null);
(statearr_11775_11797[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (6)))
{var inst_11747 = (state_11768[(7)]);var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11768__$1,(11),to,inst_11747);
} else
{if((state_val_11769 === (3)))
{var inst_11766 = (state_11768[(2)]);var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.return_chan(state_11768__$1,inst_11766);
} else
{if((state_val_11769 === (12)))
{var state_11768__$1 = state_11768;var statearr_11776_11798 = state_11768__$1;(statearr_11776_11798[(2)] = null);
(statearr_11776_11798[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (2)))
{var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11768__$1,(4),from);
} else
{if((state_val_11769 === (11)))
{var inst_11757 = (state_11768[(2)]);var state_11768__$1 = state_11768;if(cljs.core.truth_(inst_11757))
{var statearr_11777_11799 = state_11768__$1;(statearr_11777_11799[(1)] = (12));
} else
{var statearr_11778_11800 = state_11768__$1;(statearr_11778_11800[(1)] = (13));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (9)))
{var state_11768__$1 = state_11768;var statearr_11779_11801 = state_11768__$1;(statearr_11779_11801[(2)] = null);
(statearr_11779_11801[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (5)))
{var state_11768__$1 = state_11768;if(cljs.core.truth_(close_QMARK_))
{var statearr_11780_11802 = state_11768__$1;(statearr_11780_11802[(1)] = (8));
} else
{var statearr_11781_11803 = state_11768__$1;(statearr_11781_11803[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (14)))
{var inst_11762 = (state_11768[(2)]);var state_11768__$1 = state_11768;var statearr_11782_11804 = state_11768__$1;(statearr_11782_11804[(2)] = inst_11762);
(statearr_11782_11804[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (10)))
{var inst_11754 = (state_11768[(2)]);var state_11768__$1 = state_11768;var statearr_11783_11805 = state_11768__$1;(statearr_11783_11805[(2)] = inst_11754);
(statearr_11783_11805[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11769 === (8)))
{var inst_11751 = cljs.core.async.close_BANG_(to);var state_11768__$1 = state_11768;var statearr_11784_11806 = state_11768__$1;(statearr_11784_11806[(2)] = inst_11751);
(statearr_11784_11806[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___11792))
;return ((function (switch__6208__auto__,c__6273__auto___11792){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11788 = [null,null,null,null,null,null,null,null];(statearr_11788[(0)] = state_machine__6209__auto__);
(statearr_11788[(1)] = (1));
return statearr_11788;
});
var state_machine__6209__auto____1 = (function (state_11768){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11768);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11789){if((e11789 instanceof Object))
{var ex__6212__auto__ = e11789;var statearr_11790_11807 = state_11768;(statearr_11790_11807[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11768);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11808 = state_11768;
state_11768 = G__11808;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11768){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___11792))
})();var state__6275__auto__ = (function (){var statearr_11791 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___11792);
return statearr_11791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___11792))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6273__auto___11909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___11909,tc,fc){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___11909,tc,fc){
return (function (state_11884){var state_val_11885 = (state_11884[(1)]);if((state_val_11885 === (7)))
{var inst_11880 = (state_11884[(2)]);var state_11884__$1 = state_11884;var statearr_11886_11910 = state_11884__$1;(statearr_11886_11910[(2)] = inst_11880);
(statearr_11886_11910[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (1)))
{var state_11884__$1 = state_11884;var statearr_11887_11911 = state_11884__$1;(statearr_11887_11911[(2)] = null);
(statearr_11887_11911[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (4)))
{var inst_11861 = (state_11884[(7)]);var inst_11861__$1 = (state_11884[(2)]);var inst_11862 = (inst_11861__$1 == null);var state_11884__$1 = (function (){var statearr_11888 = state_11884;(statearr_11888[(7)] = inst_11861__$1);
return statearr_11888;
})();if(cljs.core.truth_(inst_11862))
{var statearr_11889_11912 = state_11884__$1;(statearr_11889_11912[(1)] = (5));
} else
{var statearr_11890_11913 = state_11884__$1;(statearr_11890_11913[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (13)))
{var state_11884__$1 = state_11884;var statearr_11891_11914 = state_11884__$1;(statearr_11891_11914[(2)] = null);
(statearr_11891_11914[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (6)))
{var inst_11861 = (state_11884[(7)]);var inst_11867 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11861) : p.call(null,inst_11861));var state_11884__$1 = state_11884;if(cljs.core.truth_(inst_11867))
{var statearr_11892_11915 = state_11884__$1;(statearr_11892_11915[(1)] = (9));
} else
{var statearr_11893_11916 = state_11884__$1;(statearr_11893_11916[(1)] = (10));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (3)))
{var inst_11882 = (state_11884[(2)]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.return_chan(state_11884__$1,inst_11882);
} else
{if((state_val_11885 === (12)))
{var state_11884__$1 = state_11884;var statearr_11894_11917 = state_11884__$1;(statearr_11894_11917[(2)] = null);
(statearr_11894_11917[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (2)))
{var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11884__$1,(4),ch);
} else
{if((state_val_11885 === (11)))
{var inst_11861 = (state_11884[(7)]);var inst_11871 = (state_11884[(2)]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11884__$1,(8),inst_11871,inst_11861);
} else
{if((state_val_11885 === (9)))
{var state_11884__$1 = state_11884;var statearr_11895_11918 = state_11884__$1;(statearr_11895_11918[(2)] = tc);
(statearr_11895_11918[(1)] = (11));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (5)))
{var inst_11864 = cljs.core.async.close_BANG_(tc);var inst_11865 = cljs.core.async.close_BANG_(fc);var state_11884__$1 = (function (){var statearr_11896 = state_11884;(statearr_11896[(8)] = inst_11864);
return statearr_11896;
})();var statearr_11897_11919 = state_11884__$1;(statearr_11897_11919[(2)] = inst_11865);
(statearr_11897_11919[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (14)))
{var inst_11878 = (state_11884[(2)]);var state_11884__$1 = state_11884;var statearr_11898_11920 = state_11884__$1;(statearr_11898_11920[(2)] = inst_11878);
(statearr_11898_11920[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (10)))
{var state_11884__$1 = state_11884;var statearr_11899_11921 = state_11884__$1;(statearr_11899_11921[(2)] = fc);
(statearr_11899_11921[(1)] = (11));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11885 === (8)))
{var inst_11873 = (state_11884[(2)]);var state_11884__$1 = state_11884;if(cljs.core.truth_(inst_11873))
{var statearr_11900_11922 = state_11884__$1;(statearr_11900_11922[(1)] = (12));
} else
{var statearr_11901_11923 = state_11884__$1;(statearr_11901_11923[(1)] = (13));
}
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___11909,tc,fc))
;return ((function (switch__6208__auto__,c__6273__auto___11909,tc,fc){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11905 = [null,null,null,null,null,null,null,null,null];(statearr_11905[(0)] = state_machine__6209__auto__);
(statearr_11905[(1)] = (1));
return statearr_11905;
});
var state_machine__6209__auto____1 = (function (state_11884){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11884);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object))
{var ex__6212__auto__ = e11906;var statearr_11907_11924 = state_11884;(statearr_11907_11924[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11884);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11925 = state_11884;
state_11884 = G__11925;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11884){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___11909,tc,fc))
})();var state__6275__auto__ = (function (){var statearr_11908 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___11909);
return statearr_11908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___11909,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__){
return (function (state_11972){var state_val_11973 = (state_11972[(1)]);if((state_val_11973 === (7)))
{var inst_11968 = (state_11972[(2)]);var state_11972__$1 = state_11972;var statearr_11974_11990 = state_11972__$1;(statearr_11974_11990[(2)] = inst_11968);
(statearr_11974_11990[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11973 === (6)))
{var inst_11961 = (state_11972[(7)]);var inst_11958 = (state_11972[(8)]);var inst_11965 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11958,inst_11961) : f.call(null,inst_11958,inst_11961));var inst_11958__$1 = inst_11965;var state_11972__$1 = (function (){var statearr_11975 = state_11972;(statearr_11975[(8)] = inst_11958__$1);
return statearr_11975;
})();var statearr_11976_11991 = state_11972__$1;(statearr_11976_11991[(2)] = null);
(statearr_11976_11991[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11973 === (5)))
{var inst_11958 = (state_11972[(8)]);var state_11972__$1 = state_11972;var statearr_11977_11992 = state_11972__$1;(statearr_11977_11992[(2)] = inst_11958);
(statearr_11977_11992[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_11973 === (4)))
{var inst_11961 = (state_11972[(7)]);var inst_11961__$1 = (state_11972[(2)]);var inst_11962 = (inst_11961__$1 == null);var state_11972__$1 = (function (){var statearr_11978 = state_11972;(statearr_11978[(7)] = inst_11961__$1);
return statearr_11978;
})();if(cljs.core.truth_(inst_11962))
{var statearr_11979_11993 = state_11972__$1;(statearr_11979_11993[(1)] = (5));
} else
{var statearr_11980_11994 = state_11972__$1;(statearr_11980_11994[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_11973 === (3)))
{var inst_11970 = (state_11972[(2)]);var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.return_chan(state_11972__$1,inst_11970);
} else
{if((state_val_11973 === (2)))
{var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11972__$1,(4),ch);
} else
{if((state_val_11973 === (1)))
{var inst_11958 = init;var state_11972__$1 = (function (){var statearr_11981 = state_11972;(statearr_11981[(8)] = inst_11958);
return statearr_11981;
})();var statearr_11982_11995 = state_11972__$1;(statearr_11982_11995[(2)] = null);
(statearr_11982_11995[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6273__auto__))
;return ((function (switch__6208__auto__,c__6273__auto__){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_11986 = [null,null,null,null,null,null,null,null,null];(statearr_11986[(0)] = state_machine__6209__auto__);
(statearr_11986[(1)] = (1));
return statearr_11986;
});
var state_machine__6209__auto____1 = (function (state_11972){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_11972);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e11987){if((e11987 instanceof Object))
{var ex__6212__auto__ = e11987;var statearr_11988_11996 = state_11972;(statearr_11988_11996[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11972);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e11987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__11997 = state_11972;
state_11972 = G__11997;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_11972){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_11972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__))
})();var state__6275__auto__ = (function (){var statearr_11989 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_11989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_11989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__))
);
return c__6273__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto__){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto__){
return (function (state_12071){var state_val_12072 = (state_12071[(1)]);if((state_val_12072 === (7)))
{var inst_12053 = (state_12071[(2)]);var state_12071__$1 = state_12071;var statearr_12073_12096 = state_12071__$1;(statearr_12073_12096[(2)] = inst_12053);
(statearr_12073_12096[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (1)))
{var inst_12047 = cljs.core.seq(coll);var inst_12048 = inst_12047;var state_12071__$1 = (function (){var statearr_12074 = state_12071;(statearr_12074[(7)] = inst_12048);
return statearr_12074;
})();var statearr_12075_12097 = state_12071__$1;(statearr_12075_12097[(2)] = null);
(statearr_12075_12097[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (4)))
{var inst_12048 = (state_12071[(7)]);var inst_12051 = cljs.core.first(inst_12048);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12071__$1,(7),ch,inst_12051);
} else
{if((state_val_12072 === (13)))
{var inst_12065 = (state_12071[(2)]);var state_12071__$1 = state_12071;var statearr_12076_12098 = state_12071__$1;(statearr_12076_12098[(2)] = inst_12065);
(statearr_12076_12098[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (6)))
{var inst_12056 = (state_12071[(2)]);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12056))
{var statearr_12077_12099 = state_12071__$1;(statearr_12077_12099[(1)] = (8));
} else
{var statearr_12078_12100 = state_12071__$1;(statearr_12078_12100[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (3)))
{var inst_12069 = (state_12071[(2)]);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.return_chan(state_12071__$1,inst_12069);
} else
{if((state_val_12072 === (12)))
{var state_12071__$1 = state_12071;var statearr_12079_12101 = state_12071__$1;(statearr_12079_12101[(2)] = null);
(statearr_12079_12101[(1)] = (13));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (2)))
{var inst_12048 = (state_12071[(7)]);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12048))
{var statearr_12080_12102 = state_12071__$1;(statearr_12080_12102[(1)] = (4));
} else
{var statearr_12081_12103 = state_12071__$1;(statearr_12081_12103[(1)] = (5));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (11)))
{var inst_12062 = cljs.core.async.close_BANG_(ch);var state_12071__$1 = state_12071;var statearr_12082_12104 = state_12071__$1;(statearr_12082_12104[(2)] = inst_12062);
(statearr_12082_12104[(1)] = (13));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (9)))
{var state_12071__$1 = state_12071;if(cljs.core.truth_(close_QMARK_))
{var statearr_12083_12105 = state_12071__$1;(statearr_12083_12105[(1)] = (11));
} else
{var statearr_12084_12106 = state_12071__$1;(statearr_12084_12106[(1)] = (12));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (5)))
{var inst_12048 = (state_12071[(7)]);var state_12071__$1 = state_12071;var statearr_12085_12107 = state_12071__$1;(statearr_12085_12107[(2)] = inst_12048);
(statearr_12085_12107[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (10)))
{var inst_12067 = (state_12071[(2)]);var state_12071__$1 = state_12071;var statearr_12086_12108 = state_12071__$1;(statearr_12086_12108[(2)] = inst_12067);
(statearr_12086_12108[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12072 === (8)))
{var inst_12048 = (state_12071[(7)]);var inst_12058 = cljs.core.next(inst_12048);var inst_12048__$1 = inst_12058;var state_12071__$1 = (function (){var statearr_12087 = state_12071;(statearr_12087[(7)] = inst_12048__$1);
return statearr_12087;
})();var statearr_12088_12109 = state_12071__$1;(statearr_12088_12109[(2)] = null);
(statearr_12088_12109[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto__))
;return ((function (switch__6208__auto__,c__6273__auto__){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_12092 = [null,null,null,null,null,null,null,null];(statearr_12092[(0)] = state_machine__6209__auto__);
(statearr_12092[(1)] = (1));
return statearr_12092;
});
var state_machine__6209__auto____1 = (function (state_12071){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_12071);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object))
{var ex__6212__auto__ = e12093;var statearr_12094_12110 = state_12071;(statearr_12094_12110[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12071);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e12093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__12111 = state_12071;
state_12071 = G__12111;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto__))
})();var state__6275__auto__ = (function (){var statearr_12095 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_12095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto__);
return statearr_12095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto__))
);
return c__6273__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12113 = {};return obj12113;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12115 = {};return obj12115;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12337 = (function (cs,ch,mult,meta12338){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12338 = meta12338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12337.cljs$lang$type = true;
cljs.core.async.t12337.cljs$lang$ctorStr = "cljs.core.async/t12337";
cljs.core.async.t12337.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t12337");
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12337.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12339){var self__ = this;
var _12339__$1 = this;return self__.meta12338;
});})(cs))
;
cljs.core.async.t12337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12339,meta12338__$1){var self__ = this;
var _12339__$1 = this;return (new cljs.core.async.t12337(self__.cs,self__.ch,self__.mult,meta12338__$1));
});})(cs))
;
cljs.core.async.__GT_t12337 = ((function (cs){
return (function __GT_t12337(cs__$1,ch__$1,mult__$1,meta12338){return (new cljs.core.async.t12337(cs__$1,ch__$1,mult__$1,meta12338));
});})(cs))
;
}
return (new cljs.core.async.t12337(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6273__auto___12558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___12558,cs,m,dchan,dctr,done){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___12558,cs,m,dchan,dctr,done){
return (function (state_12470){var state_val_12471 = (state_12470[(1)]);if((state_val_12471 === (7)))
{var inst_12466 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12472_12559 = state_12470__$1;(statearr_12472_12559[(2)] = inst_12466);
(statearr_12472_12559[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (20)))
{var inst_12371 = (state_12470[(7)]);var inst_12381 = cljs.core.first(inst_12371);var inst_12382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12381,(0),null);var inst_12383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12381,(1),null);var state_12470__$1 = (function (){var statearr_12473 = state_12470;(statearr_12473[(8)] = inst_12382);
return statearr_12473;
})();if(cljs.core.truth_(inst_12383))
{var statearr_12474_12560 = state_12470__$1;(statearr_12474_12560[(1)] = (22));
} else
{var statearr_12475_12561 = state_12470__$1;(statearr_12475_12561[(1)] = (23));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (27)))
{var inst_12413 = (state_12470[(9)]);var inst_12342 = (state_12470[(10)]);var inst_12418 = (state_12470[(11)]);var inst_12411 = (state_12470[(12)]);var inst_12418__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12411,inst_12413);var inst_12419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12418__$1,inst_12342,done);var state_12470__$1 = (function (){var statearr_12476 = state_12470;(statearr_12476[(11)] = inst_12418__$1);
return statearr_12476;
})();if(cljs.core.truth_(inst_12419))
{var statearr_12477_12562 = state_12470__$1;(statearr_12477_12562[(1)] = (30));
} else
{var statearr_12478_12563 = state_12470__$1;(statearr_12478_12563[(1)] = (31));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (1)))
{var state_12470__$1 = state_12470;var statearr_12479_12564 = state_12470__$1;(statearr_12479_12564[(2)] = null);
(statearr_12479_12564[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (24)))
{var inst_12371 = (state_12470[(7)]);var inst_12388 = (state_12470[(2)]);var inst_12389 = cljs.core.next(inst_12371);var inst_12351 = inst_12389;var inst_12352 = null;var inst_12353 = (0);var inst_12354 = (0);var state_12470__$1 = (function (){var statearr_12480 = state_12470;(statearr_12480[(13)] = inst_12354);
(statearr_12480[(14)] = inst_12388);
(statearr_12480[(15)] = inst_12352);
(statearr_12480[(16)] = inst_12351);
(statearr_12480[(17)] = inst_12353);
return statearr_12480;
})();var statearr_12481_12565 = state_12470__$1;(statearr_12481_12565[(2)] = null);
(statearr_12481_12565[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (39)))
{var state_12470__$1 = state_12470;var statearr_12485_12566 = state_12470__$1;(statearr_12485_12566[(2)] = null);
(statearr_12485_12566[(1)] = (41));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (4)))
{var inst_12342 = (state_12470[(10)]);var inst_12342__$1 = (state_12470[(2)]);var inst_12343 = (inst_12342__$1 == null);var state_12470__$1 = (function (){var statearr_12486 = state_12470;(statearr_12486[(10)] = inst_12342__$1);
return statearr_12486;
})();if(cljs.core.truth_(inst_12343))
{var statearr_12487_12567 = state_12470__$1;(statearr_12487_12567[(1)] = (5));
} else
{var statearr_12488_12568 = state_12470__$1;(statearr_12488_12568[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (15)))
{var inst_12354 = (state_12470[(13)]);var inst_12352 = (state_12470[(15)]);var inst_12351 = (state_12470[(16)]);var inst_12353 = (state_12470[(17)]);var inst_12367 = (state_12470[(2)]);var inst_12368 = (inst_12354 + (1));var tmp12482 = inst_12352;var tmp12483 = inst_12351;var tmp12484 = inst_12353;var inst_12351__$1 = tmp12483;var inst_12352__$1 = tmp12482;var inst_12353__$1 = tmp12484;var inst_12354__$1 = inst_12368;var state_12470__$1 = (function (){var statearr_12489 = state_12470;(statearr_12489[(13)] = inst_12354__$1);
(statearr_12489[(15)] = inst_12352__$1);
(statearr_12489[(16)] = inst_12351__$1);
(statearr_12489[(18)] = inst_12367);
(statearr_12489[(17)] = inst_12353__$1);
return statearr_12489;
})();var statearr_12490_12569 = state_12470__$1;(statearr_12490_12569[(2)] = null);
(statearr_12490_12569[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (21)))
{var inst_12392 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12494_12570 = state_12470__$1;(statearr_12494_12570[(2)] = inst_12392);
(statearr_12494_12570[(1)] = (18));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (31)))
{var inst_12418 = (state_12470[(11)]);var inst_12422 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_12423 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12418);var state_12470__$1 = (function (){var statearr_12495 = state_12470;(statearr_12495[(19)] = inst_12422);
return statearr_12495;
})();var statearr_12496_12571 = state_12470__$1;(statearr_12496_12571[(2)] = inst_12423);
(statearr_12496_12571[(1)] = (32));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (32)))
{var inst_12412 = (state_12470[(20)]);var inst_12413 = (state_12470[(9)]);var inst_12410 = (state_12470[(21)]);var inst_12411 = (state_12470[(12)]);var inst_12425 = (state_12470[(2)]);var inst_12426 = (inst_12413 + (1));var tmp12491 = inst_12412;var tmp12492 = inst_12410;var tmp12493 = inst_12411;var inst_12410__$1 = tmp12492;var inst_12411__$1 = tmp12493;var inst_12412__$1 = tmp12491;var inst_12413__$1 = inst_12426;var state_12470__$1 = (function (){var statearr_12497 = state_12470;(statearr_12497[(22)] = inst_12425);
(statearr_12497[(20)] = inst_12412__$1);
(statearr_12497[(9)] = inst_12413__$1);
(statearr_12497[(21)] = inst_12410__$1);
(statearr_12497[(12)] = inst_12411__$1);
return statearr_12497;
})();var statearr_12498_12572 = state_12470__$1;(statearr_12498_12572[(2)] = null);
(statearr_12498_12572[(1)] = (25));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (40)))
{var inst_12438 = (state_12470[(23)]);var inst_12442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_12443 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12438);var state_12470__$1 = (function (){var statearr_12499 = state_12470;(statearr_12499[(24)] = inst_12442);
return statearr_12499;
})();var statearr_12500_12573 = state_12470__$1;(statearr_12500_12573[(2)] = inst_12443);
(statearr_12500_12573[(1)] = (41));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (33)))
{var inst_12429 = (state_12470[(25)]);var inst_12431 = cljs.core.chunked_seq_QMARK_(inst_12429);var state_12470__$1 = state_12470;if(inst_12431)
{var statearr_12501_12574 = state_12470__$1;(statearr_12501_12574[(1)] = (36));
} else
{var statearr_12502_12575 = state_12470__$1;(statearr_12502_12575[(1)] = (37));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (13)))
{var inst_12361 = (state_12470[(26)]);var inst_12364 = cljs.core.async.close_BANG_(inst_12361);var state_12470__$1 = state_12470;var statearr_12503_12576 = state_12470__$1;(statearr_12503_12576[(2)] = inst_12364);
(statearr_12503_12576[(1)] = (15));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (22)))
{var inst_12382 = (state_12470[(8)]);var inst_12385 = cljs.core.async.close_BANG_(inst_12382);var state_12470__$1 = state_12470;var statearr_12504_12577 = state_12470__$1;(statearr_12504_12577[(2)] = inst_12385);
(statearr_12504_12577[(1)] = (24));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (36)))
{var inst_12429 = (state_12470[(25)]);var inst_12433 = cljs.core.chunk_first(inst_12429);var inst_12434 = cljs.core.chunk_rest(inst_12429);var inst_12435 = cljs.core.count(inst_12433);var inst_12410 = inst_12434;var inst_12411 = inst_12433;var inst_12412 = inst_12435;var inst_12413 = (0);var state_12470__$1 = (function (){var statearr_12505 = state_12470;(statearr_12505[(20)] = inst_12412);
(statearr_12505[(9)] = inst_12413);
(statearr_12505[(21)] = inst_12410);
(statearr_12505[(12)] = inst_12411);
return statearr_12505;
})();var statearr_12506_12578 = state_12470__$1;(statearr_12506_12578[(2)] = null);
(statearr_12506_12578[(1)] = (25));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (41)))
{var inst_12429 = (state_12470[(25)]);var inst_12445 = (state_12470[(2)]);var inst_12446 = cljs.core.next(inst_12429);var inst_12410 = inst_12446;var inst_12411 = null;var inst_12412 = (0);var inst_12413 = (0);var state_12470__$1 = (function (){var statearr_12507 = state_12470;(statearr_12507[(20)] = inst_12412);
(statearr_12507[(9)] = inst_12413);
(statearr_12507[(27)] = inst_12445);
(statearr_12507[(21)] = inst_12410);
(statearr_12507[(12)] = inst_12411);
return statearr_12507;
})();var statearr_12508_12579 = state_12470__$1;(statearr_12508_12579[(2)] = null);
(statearr_12508_12579[(1)] = (25));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (43)))
{var state_12470__$1 = state_12470;var statearr_12509_12580 = state_12470__$1;(statearr_12509_12580[(2)] = null);
(statearr_12509_12580[(1)] = (44));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (29)))
{var inst_12454 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12510_12581 = state_12470__$1;(statearr_12510_12581[(2)] = inst_12454);
(statearr_12510_12581[(1)] = (26));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (44)))
{var inst_12463 = (state_12470[(2)]);var state_12470__$1 = (function (){var statearr_12511 = state_12470;(statearr_12511[(28)] = inst_12463);
return statearr_12511;
})();var statearr_12512_12582 = state_12470__$1;(statearr_12512_12582[(2)] = null);
(statearr_12512_12582[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (6)))
{var inst_12402 = (state_12470[(29)]);var inst_12401 = cljs.core.deref(cs);var inst_12402__$1 = cljs.core.keys(inst_12401);var inst_12403 = cljs.core.count(inst_12402__$1);var inst_12404 = cljs.core.reset_BANG_(dctr,inst_12403);var inst_12409 = cljs.core.seq(inst_12402__$1);var inst_12410 = inst_12409;var inst_12411 = null;var inst_12412 = (0);var inst_12413 = (0);var state_12470__$1 = (function (){var statearr_12513 = state_12470;(statearr_12513[(20)] = inst_12412);
(statearr_12513[(30)] = inst_12404);
(statearr_12513[(9)] = inst_12413);
(statearr_12513[(29)] = inst_12402__$1);
(statearr_12513[(21)] = inst_12410);
(statearr_12513[(12)] = inst_12411);
return statearr_12513;
})();var statearr_12514_12583 = state_12470__$1;(statearr_12514_12583[(2)] = null);
(statearr_12514_12583[(1)] = (25));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (28)))
{var inst_12410 = (state_12470[(21)]);var inst_12429 = (state_12470[(25)]);var inst_12429__$1 = cljs.core.seq(inst_12410);var state_12470__$1 = (function (){var statearr_12515 = state_12470;(statearr_12515[(25)] = inst_12429__$1);
return statearr_12515;
})();if(inst_12429__$1)
{var statearr_12516_12584 = state_12470__$1;(statearr_12516_12584[(1)] = (33));
} else
{var statearr_12517_12585 = state_12470__$1;(statearr_12517_12585[(1)] = (34));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (25)))
{var inst_12412 = (state_12470[(20)]);var inst_12413 = (state_12470[(9)]);var inst_12415 = (inst_12413 < inst_12412);var inst_12416 = inst_12415;var state_12470__$1 = state_12470;if(cljs.core.truth_(inst_12416))
{var statearr_12518_12586 = state_12470__$1;(statearr_12518_12586[(1)] = (27));
} else
{var statearr_12519_12587 = state_12470__$1;(statearr_12519_12587[(1)] = (28));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (34)))
{var state_12470__$1 = state_12470;var statearr_12520_12588 = state_12470__$1;(statearr_12520_12588[(2)] = null);
(statearr_12520_12588[(1)] = (35));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (17)))
{var state_12470__$1 = state_12470;var statearr_12521_12589 = state_12470__$1;(statearr_12521_12589[(2)] = null);
(statearr_12521_12589[(1)] = (18));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (3)))
{var inst_12468 = (state_12470[(2)]);var state_12470__$1 = state_12470;return cljs.core.async.impl.ioc_helpers.return_chan(state_12470__$1,inst_12468);
} else
{if((state_val_12471 === (12)))
{var inst_12397 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12522_12590 = state_12470__$1;(statearr_12522_12590[(2)] = inst_12397);
(statearr_12522_12590[(1)] = (9));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (2)))
{var state_12470__$1 = state_12470;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12470__$1,(4),ch);
} else
{if((state_val_12471 === (23)))
{var state_12470__$1 = state_12470;var statearr_12523_12591 = state_12470__$1;(statearr_12523_12591[(2)] = null);
(statearr_12523_12591[(1)] = (24));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (35)))
{var inst_12452 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12524_12592 = state_12470__$1;(statearr_12524_12592[(2)] = inst_12452);
(statearr_12524_12592[(1)] = (29));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (19)))
{var inst_12371 = (state_12470[(7)]);var inst_12375 = cljs.core.chunk_first(inst_12371);var inst_12376 = cljs.core.chunk_rest(inst_12371);var inst_12377 = cljs.core.count(inst_12375);var inst_12351 = inst_12376;var inst_12352 = inst_12375;var inst_12353 = inst_12377;var inst_12354 = (0);var state_12470__$1 = (function (){var statearr_12525 = state_12470;(statearr_12525[(13)] = inst_12354);
(statearr_12525[(15)] = inst_12352);
(statearr_12525[(16)] = inst_12351);
(statearr_12525[(17)] = inst_12353);
return statearr_12525;
})();var statearr_12526_12593 = state_12470__$1;(statearr_12526_12593[(2)] = null);
(statearr_12526_12593[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (11)))
{var inst_12351 = (state_12470[(16)]);var inst_12371 = (state_12470[(7)]);var inst_12371__$1 = cljs.core.seq(inst_12351);var state_12470__$1 = (function (){var statearr_12527 = state_12470;(statearr_12527[(7)] = inst_12371__$1);
return statearr_12527;
})();if(inst_12371__$1)
{var statearr_12528_12594 = state_12470__$1;(statearr_12528_12594[(1)] = (16));
} else
{var statearr_12529_12595 = state_12470__$1;(statearr_12529_12595[(1)] = (17));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (9)))
{var inst_12399 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12530_12596 = state_12470__$1;(statearr_12530_12596[(2)] = inst_12399);
(statearr_12530_12596[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (5)))
{var inst_12349 = cljs.core.deref(cs);var inst_12350 = cljs.core.seq(inst_12349);var inst_12351 = inst_12350;var inst_12352 = null;var inst_12353 = (0);var inst_12354 = (0);var state_12470__$1 = (function (){var statearr_12531 = state_12470;(statearr_12531[(13)] = inst_12354);
(statearr_12531[(15)] = inst_12352);
(statearr_12531[(16)] = inst_12351);
(statearr_12531[(17)] = inst_12353);
return statearr_12531;
})();var statearr_12532_12597 = state_12470__$1;(statearr_12532_12597[(2)] = null);
(statearr_12532_12597[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (14)))
{var state_12470__$1 = state_12470;var statearr_12533_12598 = state_12470__$1;(statearr_12533_12598[(2)] = null);
(statearr_12533_12598[(1)] = (15));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (45)))
{var inst_12460 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12534_12599 = state_12470__$1;(statearr_12534_12599[(2)] = inst_12460);
(statearr_12534_12599[(1)] = (44));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (26)))
{var inst_12402 = (state_12470[(29)]);var inst_12456 = (state_12470[(2)]);var inst_12457 = cljs.core.seq(inst_12402);var state_12470__$1 = (function (){var statearr_12535 = state_12470;(statearr_12535[(31)] = inst_12456);
return statearr_12535;
})();if(inst_12457)
{var statearr_12536_12600 = state_12470__$1;(statearr_12536_12600[(1)] = (42));
} else
{var statearr_12537_12601 = state_12470__$1;(statearr_12537_12601[(1)] = (43));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (16)))
{var inst_12371 = (state_12470[(7)]);var inst_12373 = cljs.core.chunked_seq_QMARK_(inst_12371);var state_12470__$1 = state_12470;if(inst_12373)
{var statearr_12538_12602 = state_12470__$1;(statearr_12538_12602[(1)] = (19));
} else
{var statearr_12539_12603 = state_12470__$1;(statearr_12539_12603[(1)] = (20));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (38)))
{var inst_12449 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12540_12604 = state_12470__$1;(statearr_12540_12604[(2)] = inst_12449);
(statearr_12540_12604[(1)] = (35));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (30)))
{var state_12470__$1 = state_12470;var statearr_12541_12605 = state_12470__$1;(statearr_12541_12605[(2)] = null);
(statearr_12541_12605[(1)] = (32));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (10)))
{var inst_12354 = (state_12470[(13)]);var inst_12352 = (state_12470[(15)]);var inst_12360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12352,inst_12354);var inst_12361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12360,(0),null);var inst_12362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12360,(1),null);var state_12470__$1 = (function (){var statearr_12542 = state_12470;(statearr_12542[(26)] = inst_12361);
return statearr_12542;
})();if(cljs.core.truth_(inst_12362))
{var statearr_12543_12606 = state_12470__$1;(statearr_12543_12606[(1)] = (13));
} else
{var statearr_12544_12607 = state_12470__$1;(statearr_12544_12607[(1)] = (14));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (18)))
{var inst_12395 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12545_12608 = state_12470__$1;(statearr_12545_12608[(2)] = inst_12395);
(statearr_12545_12608[(1)] = (12));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (42)))
{var state_12470__$1 = state_12470;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12470__$1,(45),dchan);
} else
{if((state_val_12471 === (37)))
{var inst_12342 = (state_12470[(10)]);var inst_12429 = (state_12470[(25)]);var inst_12438 = (state_12470[(23)]);var inst_12438__$1 = cljs.core.first(inst_12429);var inst_12439 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12438__$1,inst_12342,done);var state_12470__$1 = (function (){var statearr_12546 = state_12470;(statearr_12546[(23)] = inst_12438__$1);
return statearr_12546;
})();if(cljs.core.truth_(inst_12439))
{var statearr_12547_12609 = state_12470__$1;(statearr_12547_12609[(1)] = (39));
} else
{var statearr_12548_12610 = state_12470__$1;(statearr_12548_12610[(1)] = (40));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12471 === (8)))
{var inst_12354 = (state_12470[(13)]);var inst_12353 = (state_12470[(17)]);var inst_12356 = (inst_12354 < inst_12353);var inst_12357 = inst_12356;var state_12470__$1 = state_12470;if(cljs.core.truth_(inst_12357))
{var statearr_12549_12611 = state_12470__$1;(statearr_12549_12611[(1)] = (10));
} else
{var statearr_12550_12612 = state_12470__$1;(statearr_12550_12612[(1)] = (11));
}
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___12558,cs,m,dchan,dctr,done))
;return ((function (switch__6208__auto__,c__6273__auto___12558,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_12554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12554[(0)] = state_machine__6209__auto__);
(statearr_12554[(1)] = (1));
return statearr_12554;
});
var state_machine__6209__auto____1 = (function (state_12470){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_12470);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e12555){if((e12555 instanceof Object))
{var ex__6212__auto__ = e12555;var statearr_12556_12613 = state_12470;(statearr_12556_12613[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12470);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e12555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__12614 = state_12470;
state_12470 = G__12614;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_12470){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_12470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___12558,cs,m,dchan,dctr,done))
})();var state__6275__auto__ = (function (){var statearr_12557 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_12557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___12558);
return statearr_12557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___12558,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj12616 = {};return obj12616;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$37,null,cljs.core.constant$keyword$38,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$39);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$39,chs);var pauses = pick(cljs.core.constant$keyword$37,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$40,solos,cljs.core.constant$keyword$41,pick(cljs.core.constant$keyword$38,chs),cljs.core.constant$keyword$42,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$37)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12736 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12737){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12737 = meta12737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12736.cljs$lang$type = true;
cljs.core.async.t12736.cljs$lang$ctorStr = "cljs.core.async/t12736";
cljs.core.async.t12736.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t12736");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12738){var self__ = this;
var _12738__$1 = this;return self__.meta12737;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12738,meta12737__$1){var self__ = this;
var _12738__$1 = this;return (new cljs.core.async.t12736(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12737__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12736 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12736(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12737){return (new cljs.core.async.t12736(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12737));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12736(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6273__auto___12855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12808){var state_val_12809 = (state_12808[(1)]);if((state_val_12809 === (7)))
{var inst_12752 = (state_12808[(7)]);var inst_12757 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12752);var state_12808__$1 = state_12808;var statearr_12810_12856 = state_12808__$1;(statearr_12810_12856[(2)] = inst_12757);
(statearr_12810_12856[(1)] = (9));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (20)))
{var inst_12767 = (state_12808[(8)]);var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12808__$1,(23),out,inst_12767);
} else
{if((state_val_12809 === (1)))
{var inst_12742 = (state_12808[(9)]);var inst_12742__$1 = calc_state();var inst_12743 = cljs.core.seq_QMARK_(inst_12742__$1);var state_12808__$1 = (function (){var statearr_12811 = state_12808;(statearr_12811[(9)] = inst_12742__$1);
return statearr_12811;
})();if(inst_12743)
{var statearr_12812_12857 = state_12808__$1;(statearr_12812_12857[(1)] = (2));
} else
{var statearr_12813_12858 = state_12808__$1;(statearr_12813_12858[(1)] = (3));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (24)))
{var inst_12760 = (state_12808[(10)]);var inst_12752 = inst_12760;var state_12808__$1 = (function (){var statearr_12814 = state_12808;(statearr_12814[(7)] = inst_12752);
return statearr_12814;
})();var statearr_12815_12859 = state_12808__$1;(statearr_12815_12859[(2)] = null);
(statearr_12815_12859[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (4)))
{var inst_12742 = (state_12808[(9)]);var inst_12748 = (state_12808[(2)]);var inst_12749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12748,cljs.core.constant$keyword$42);var inst_12750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12748,cljs.core.constant$keyword$41);var inst_12751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12748,cljs.core.constant$keyword$40);var inst_12752 = inst_12742;var state_12808__$1 = (function (){var statearr_12816 = state_12808;(statearr_12816[(11)] = inst_12750);
(statearr_12816[(7)] = inst_12752);
(statearr_12816[(12)] = inst_12751);
(statearr_12816[(13)] = inst_12749);
return statearr_12816;
})();var statearr_12817_12860 = state_12808__$1;(statearr_12817_12860[(2)] = null);
(statearr_12817_12860[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (15)))
{var state_12808__$1 = state_12808;var statearr_12818_12861 = state_12808__$1;(statearr_12818_12861[(2)] = null);
(statearr_12818_12861[(1)] = (16));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (21)))
{var inst_12760 = (state_12808[(10)]);var inst_12752 = inst_12760;var state_12808__$1 = (function (){var statearr_12819 = state_12808;(statearr_12819[(7)] = inst_12752);
return statearr_12819;
})();var statearr_12820_12862 = state_12808__$1;(statearr_12820_12862[(2)] = null);
(statearr_12820_12862[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (13)))
{var inst_12804 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12821_12863 = state_12808__$1;(statearr_12821_12863[(2)] = inst_12804);
(statearr_12821_12863[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (22)))
{var inst_12802 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12822_12864 = state_12808__$1;(statearr_12822_12864[(2)] = inst_12802);
(statearr_12822_12864[(1)] = (13));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (6)))
{var inst_12806 = (state_12808[(2)]);var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.return_chan(state_12808__$1,inst_12806);
} else
{if((state_val_12809 === (25)))
{var state_12808__$1 = state_12808;var statearr_12823_12865 = state_12808__$1;(statearr_12823_12865[(2)] = null);
(statearr_12823_12865[(1)] = (26));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (17)))
{var inst_12782 = (state_12808[(14)]);var state_12808__$1 = state_12808;var statearr_12824_12866 = state_12808__$1;(statearr_12824_12866[(2)] = inst_12782);
(statearr_12824_12866[(1)] = (19));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (3)))
{var inst_12742 = (state_12808[(9)]);var state_12808__$1 = state_12808;var statearr_12825_12867 = state_12808__$1;(statearr_12825_12867[(2)] = inst_12742);
(statearr_12825_12867[(1)] = (4));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (12)))
{var inst_12768 = (state_12808[(15)]);var inst_12763 = (state_12808[(16)]);var inst_12782 = (state_12808[(14)]);var inst_12782__$1 = (inst_12763.cljs$core$IFn$_invoke$arity$1 ? inst_12763.cljs$core$IFn$_invoke$arity$1(inst_12768) : inst_12763.call(null,inst_12768));var state_12808__$1 = (function (){var statearr_12826 = state_12808;(statearr_12826[(14)] = inst_12782__$1);
return statearr_12826;
})();if(cljs.core.truth_(inst_12782__$1))
{var statearr_12827_12868 = state_12808__$1;(statearr_12827_12868[(1)] = (17));
} else
{var statearr_12828_12869 = state_12808__$1;(statearr_12828_12869[(1)] = (18));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (2)))
{var inst_12742 = (state_12808[(9)]);var inst_12745 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12742);var state_12808__$1 = state_12808;var statearr_12829_12870 = state_12808__$1;(statearr_12829_12870[(2)] = inst_12745);
(statearr_12829_12870[(1)] = (4));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (23)))
{var inst_12793 = (state_12808[(2)]);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12793))
{var statearr_12830_12871 = state_12808__$1;(statearr_12830_12871[(1)] = (24));
} else
{var statearr_12831_12872 = state_12808__$1;(statearr_12831_12872[(1)] = (25));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (19)))
{var inst_12790 = (state_12808[(2)]);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12790))
{var statearr_12832_12873 = state_12808__$1;(statearr_12832_12873[(1)] = (20));
} else
{var statearr_12833_12874 = state_12808__$1;(statearr_12833_12874[(1)] = (21));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (11)))
{var inst_12767 = (state_12808[(8)]);var inst_12773 = (inst_12767 == null);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12773))
{var statearr_12834_12875 = state_12808__$1;(statearr_12834_12875[(1)] = (14));
} else
{var statearr_12835_12876 = state_12808__$1;(statearr_12835_12876[(1)] = (15));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (9)))
{var inst_12760 = (state_12808[(10)]);var inst_12760__$1 = (state_12808[(2)]);var inst_12761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12760__$1,cljs.core.constant$keyword$42);var inst_12762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12760__$1,cljs.core.constant$keyword$41);var inst_12763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12760__$1,cljs.core.constant$keyword$40);var state_12808__$1 = (function (){var statearr_12836 = state_12808;(statearr_12836[(17)] = inst_12762);
(statearr_12836[(16)] = inst_12763);
(statearr_12836[(10)] = inst_12760__$1);
return statearr_12836;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12808__$1,(10),inst_12761);
} else
{if((state_val_12809 === (5)))
{var inst_12752 = (state_12808[(7)]);var inst_12755 = cljs.core.seq_QMARK_(inst_12752);var state_12808__$1 = state_12808;if(inst_12755)
{var statearr_12837_12877 = state_12808__$1;(statearr_12837_12877[(1)] = (7));
} else
{var statearr_12838_12878 = state_12808__$1;(statearr_12838_12878[(1)] = (8));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (14)))
{var inst_12768 = (state_12808[(15)]);var inst_12775 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12768);var state_12808__$1 = state_12808;var statearr_12839_12879 = state_12808__$1;(statearr_12839_12879[(2)] = inst_12775);
(statearr_12839_12879[(1)] = (16));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (26)))
{var inst_12798 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12840_12880 = state_12808__$1;(statearr_12840_12880[(2)] = inst_12798);
(statearr_12840_12880[(1)] = (22));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (16)))
{var inst_12778 = (state_12808[(2)]);var inst_12779 = calc_state();var inst_12752 = inst_12779;var state_12808__$1 = (function (){var statearr_12841 = state_12808;(statearr_12841[(18)] = inst_12778);
(statearr_12841[(7)] = inst_12752);
return statearr_12841;
})();var statearr_12842_12881 = state_12808__$1;(statearr_12842_12881[(2)] = null);
(statearr_12842_12881[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (10)))
{var inst_12768 = (state_12808[(15)]);var inst_12767 = (state_12808[(8)]);var inst_12766 = (state_12808[(2)]);var inst_12767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12766,(0),null);var inst_12768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12766,(1),null);var inst_12769 = (inst_12767__$1 == null);var inst_12770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12768__$1,change);var inst_12771 = (inst_12769) || (inst_12770);var state_12808__$1 = (function (){var statearr_12843 = state_12808;(statearr_12843[(15)] = inst_12768__$1);
(statearr_12843[(8)] = inst_12767__$1);
return statearr_12843;
})();if(cljs.core.truth_(inst_12771))
{var statearr_12844_12882 = state_12808__$1;(statearr_12844_12882[(1)] = (11));
} else
{var statearr_12845_12883 = state_12808__$1;(statearr_12845_12883[(1)] = (12));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (18)))
{var inst_12768 = (state_12808[(15)]);var inst_12762 = (state_12808[(17)]);var inst_12763 = (state_12808[(16)]);var inst_12785 = cljs.core.empty_QMARK_(inst_12763);var inst_12786 = (inst_12762.cljs$core$IFn$_invoke$arity$1 ? inst_12762.cljs$core$IFn$_invoke$arity$1(inst_12768) : inst_12762.call(null,inst_12768));var inst_12787 = cljs.core.not(inst_12786);var inst_12788 = (inst_12785) && (inst_12787);var state_12808__$1 = state_12808;var statearr_12846_12884 = state_12808__$1;(statearr_12846_12884[(2)] = inst_12788);
(statearr_12846_12884[(1)] = (19));
return cljs.core.constant$keyword$30;
} else
{if((state_val_12809 === (8)))
{var inst_12752 = (state_12808[(7)]);var state_12808__$1 = state_12808;var statearr_12847_12885 = state_12808__$1;(statearr_12847_12885[(2)] = inst_12752);
(statearr_12847_12885[(1)] = (9));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6208__auto__,c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_12851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12851[(0)] = state_machine__6209__auto__);
(statearr_12851[(1)] = (1));
return statearr_12851;
});
var state_machine__6209__auto____1 = (function (state_12808){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_12808);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e12852){if((e12852 instanceof Object))
{var ex__6212__auto__ = e12852;var statearr_12853_12886 = state_12808;(statearr_12853_12886[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12808);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e12852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__12887 = state_12808;
state_12808 = G__12887;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_12808){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_12808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6275__auto__ = (function (){var statearr_12854 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_12854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___12855);
return statearr_12854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___12855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj12889 = {};return obj12889;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3543__auto__,mults){
return (function (p1__12890_SHARP_){if(cljs.core.truth_((p1__12890_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12890_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12890_SHARP_.call(null,topic))))
{return p1__12890_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12890_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13005 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13006){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13006 = meta13006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13005.cljs$lang$type = true;
cljs.core.async.t13005.cljs$lang$ctorStr = "cljs.core.async/t13005";
cljs.core.async.t13005.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t13005");
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13005.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13007){var self__ = this;
var _13007__$1 = this;return self__.meta13006;
});})(mults,ensure_mult))
;
cljs.core.async.t13005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13007,meta13006__$1){var self__ = this;
var _13007__$1 = this;return (new cljs.core.async.t13005(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13006__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13005 = ((function (mults,ensure_mult){
return (function __GT_t13005(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13006){return (new cljs.core.async.t13005(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13006));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13005(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6273__auto___13119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13119,mults,ensure_mult,p){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13119,mults,ensure_mult,p){
return (function (state_13075){var state_val_13076 = (state_13075[(1)]);if((state_val_13076 === (7)))
{var inst_13071 = (state_13075[(2)]);var state_13075__$1 = state_13075;var statearr_13077_13120 = state_13075__$1;(statearr_13077_13120[(2)] = inst_13071);
(statearr_13077_13120[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (20)))
{var state_13075__$1 = state_13075;var statearr_13078_13121 = state_13075__$1;(statearr_13078_13121[(2)] = null);
(statearr_13078_13121[(1)] = (22));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (1)))
{var state_13075__$1 = state_13075;var statearr_13079_13122 = state_13075__$1;(statearr_13079_13122[(2)] = null);
(statearr_13079_13122[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (4)))
{var inst_13010 = (state_13075[(7)]);var inst_13010__$1 = (state_13075[(2)]);var inst_13011 = (inst_13010__$1 == null);var state_13075__$1 = (function (){var statearr_13080 = state_13075;(statearr_13080[(7)] = inst_13010__$1);
return statearr_13080;
})();if(cljs.core.truth_(inst_13011))
{var statearr_13081_13123 = state_13075__$1;(statearr_13081_13123[(1)] = (5));
} else
{var statearr_13082_13124 = state_13075__$1;(statearr_13082_13124[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (15)))
{var inst_13052 = (state_13075[(2)]);var state_13075__$1 = state_13075;var statearr_13083_13125 = state_13075__$1;(statearr_13083_13125[(2)] = inst_13052);
(statearr_13083_13125[(1)] = (12));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (21)))
{var inst_13058 = (state_13075[(8)]);var inst_13066 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13058);var state_13075__$1 = state_13075;var statearr_13084_13126 = state_13075__$1;(statearr_13084_13126[(2)] = inst_13066);
(statearr_13084_13126[(1)] = (22));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (13)))
{var inst_13034 = (state_13075[(9)]);var inst_13036 = cljs.core.chunked_seq_QMARK_(inst_13034);var state_13075__$1 = state_13075;if(inst_13036)
{var statearr_13085_13127 = state_13075__$1;(statearr_13085_13127[(1)] = (16));
} else
{var statearr_13086_13128 = state_13075__$1;(statearr_13086_13128[(1)] = (17));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (22)))
{var inst_13068 = (state_13075[(2)]);var state_13075__$1 = (function (){var statearr_13087 = state_13075;(statearr_13087[(10)] = inst_13068);
return statearr_13087;
})();var statearr_13088_13129 = state_13075__$1;(statearr_13088_13129[(2)] = null);
(statearr_13088_13129[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (6)))
{var inst_13058 = (state_13075[(8)]);var inst_13010 = (state_13075[(7)]);var inst_13058__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13010) : topic_fn.call(null,inst_13010));var inst_13059 = cljs.core.deref(mults);var inst_13060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13059,inst_13058__$1);var inst_13061 = cljs.core.async.muxch_STAR_(inst_13060);var state_13075__$1 = (function (){var statearr_13089 = state_13075;(statearr_13089[(8)] = inst_13058__$1);
return statearr_13089;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13075__$1,(19),inst_13061,inst_13010);
} else
{if((state_val_13076 === (17)))
{var inst_13034 = (state_13075[(9)]);var inst_13043 = cljs.core.first(inst_13034);var inst_13044 = cljs.core.async.muxch_STAR_(inst_13043);var inst_13045 = cljs.core.async.close_BANG_(inst_13044);var inst_13046 = cljs.core.next(inst_13034);var inst_13020 = inst_13046;var inst_13021 = null;var inst_13022 = (0);var inst_13023 = (0);var state_13075__$1 = (function (){var statearr_13090 = state_13075;(statearr_13090[(11)] = inst_13020);
(statearr_13090[(12)] = inst_13023);
(statearr_13090[(13)] = inst_13022);
(statearr_13090[(14)] = inst_13045);
(statearr_13090[(15)] = inst_13021);
return statearr_13090;
})();var statearr_13091_13130 = state_13075__$1;(statearr_13091_13130[(2)] = null);
(statearr_13091_13130[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (3)))
{var inst_13073 = (state_13075[(2)]);var state_13075__$1 = state_13075;return cljs.core.async.impl.ioc_helpers.return_chan(state_13075__$1,inst_13073);
} else
{if((state_val_13076 === (12)))
{var inst_13054 = (state_13075[(2)]);var state_13075__$1 = state_13075;var statearr_13092_13131 = state_13075__$1;(statearr_13092_13131[(2)] = inst_13054);
(statearr_13092_13131[(1)] = (9));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (2)))
{var state_13075__$1 = state_13075;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13075__$1,(4),ch);
} else
{if((state_val_13076 === (19)))
{var inst_13063 = (state_13075[(2)]);var state_13075__$1 = state_13075;if(cljs.core.truth_(inst_13063))
{var statearr_13093_13132 = state_13075__$1;(statearr_13093_13132[(1)] = (20));
} else
{var statearr_13094_13133 = state_13075__$1;(statearr_13094_13133[(1)] = (21));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (11)))
{var inst_13020 = (state_13075[(11)]);var inst_13034 = (state_13075[(9)]);var inst_13034__$1 = cljs.core.seq(inst_13020);var state_13075__$1 = (function (){var statearr_13095 = state_13075;(statearr_13095[(9)] = inst_13034__$1);
return statearr_13095;
})();if(inst_13034__$1)
{var statearr_13096_13134 = state_13075__$1;(statearr_13096_13134[(1)] = (13));
} else
{var statearr_13097_13135 = state_13075__$1;(statearr_13097_13135[(1)] = (14));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (9)))
{var inst_13056 = (state_13075[(2)]);var state_13075__$1 = state_13075;var statearr_13098_13136 = state_13075__$1;(statearr_13098_13136[(2)] = inst_13056);
(statearr_13098_13136[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (5)))
{var inst_13017 = cljs.core.deref(mults);var inst_13018 = cljs.core.vals(inst_13017);var inst_13019 = cljs.core.seq(inst_13018);var inst_13020 = inst_13019;var inst_13021 = null;var inst_13022 = (0);var inst_13023 = (0);var state_13075__$1 = (function (){var statearr_13099 = state_13075;(statearr_13099[(11)] = inst_13020);
(statearr_13099[(12)] = inst_13023);
(statearr_13099[(13)] = inst_13022);
(statearr_13099[(15)] = inst_13021);
return statearr_13099;
})();var statearr_13100_13137 = state_13075__$1;(statearr_13100_13137[(2)] = null);
(statearr_13100_13137[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (14)))
{var state_13075__$1 = state_13075;var statearr_13104_13138 = state_13075__$1;(statearr_13104_13138[(2)] = null);
(statearr_13104_13138[(1)] = (15));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (16)))
{var inst_13034 = (state_13075[(9)]);var inst_13038 = cljs.core.chunk_first(inst_13034);var inst_13039 = cljs.core.chunk_rest(inst_13034);var inst_13040 = cljs.core.count(inst_13038);var inst_13020 = inst_13039;var inst_13021 = inst_13038;var inst_13022 = inst_13040;var inst_13023 = (0);var state_13075__$1 = (function (){var statearr_13105 = state_13075;(statearr_13105[(11)] = inst_13020);
(statearr_13105[(12)] = inst_13023);
(statearr_13105[(13)] = inst_13022);
(statearr_13105[(15)] = inst_13021);
return statearr_13105;
})();var statearr_13106_13139 = state_13075__$1;(statearr_13106_13139[(2)] = null);
(statearr_13106_13139[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (10)))
{var inst_13020 = (state_13075[(11)]);var inst_13023 = (state_13075[(12)]);var inst_13022 = (state_13075[(13)]);var inst_13021 = (state_13075[(15)]);var inst_13028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13021,inst_13023);var inst_13029 = cljs.core.async.muxch_STAR_(inst_13028);var inst_13030 = cljs.core.async.close_BANG_(inst_13029);var inst_13031 = (inst_13023 + (1));var tmp13101 = inst_13020;var tmp13102 = inst_13022;var tmp13103 = inst_13021;var inst_13020__$1 = tmp13101;var inst_13021__$1 = tmp13103;var inst_13022__$1 = tmp13102;var inst_13023__$1 = inst_13031;var state_13075__$1 = (function (){var statearr_13107 = state_13075;(statearr_13107[(11)] = inst_13020__$1);
(statearr_13107[(12)] = inst_13023__$1);
(statearr_13107[(13)] = inst_13022__$1);
(statearr_13107[(16)] = inst_13030);
(statearr_13107[(15)] = inst_13021__$1);
return statearr_13107;
})();var statearr_13108_13140 = state_13075__$1;(statearr_13108_13140[(2)] = null);
(statearr_13108_13140[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (18)))
{var inst_13049 = (state_13075[(2)]);var state_13075__$1 = state_13075;var statearr_13109_13141 = state_13075__$1;(statearr_13109_13141[(2)] = inst_13049);
(statearr_13109_13141[(1)] = (15));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13076 === (8)))
{var inst_13023 = (state_13075[(12)]);var inst_13022 = (state_13075[(13)]);var inst_13025 = (inst_13023 < inst_13022);var inst_13026 = inst_13025;var state_13075__$1 = state_13075;if(cljs.core.truth_(inst_13026))
{var statearr_13110_13142 = state_13075__$1;(statearr_13110_13142[(1)] = (10));
} else
{var statearr_13111_13143 = state_13075__$1;(statearr_13111_13143[(1)] = (11));
}
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13119,mults,ensure_mult,p))
;return ((function (switch__6208__auto__,c__6273__auto___13119,mults,ensure_mult,p){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13115[(0)] = state_machine__6209__auto__);
(statearr_13115[(1)] = (1));
return statearr_13115;
});
var state_machine__6209__auto____1 = (function (state_13075){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13075);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13116){if((e13116 instanceof Object))
{var ex__6212__auto__ = e13116;var statearr_13117_13144 = state_13075;(statearr_13117_13144[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13075);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13145 = state_13075;
state_13075 = G__13145;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13075){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13119,mults,ensure_mult,p))
})();var state__6275__auto__ = (function (){var statearr_13118 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13119);
return statearr_13118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13119,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6273__auto___13282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13252){var state_val_13253 = (state_13252[(1)]);if((state_val_13253 === (7)))
{var state_13252__$1 = state_13252;var statearr_13254_13283 = state_13252__$1;(statearr_13254_13283[(2)] = null);
(statearr_13254_13283[(1)] = (8));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (1)))
{var state_13252__$1 = state_13252;var statearr_13255_13284 = state_13252__$1;(statearr_13255_13284[(2)] = null);
(statearr_13255_13284[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (4)))
{var inst_13216 = (state_13252[(7)]);var inst_13218 = (inst_13216 < cnt);var state_13252__$1 = state_13252;if(cljs.core.truth_(inst_13218))
{var statearr_13256_13285 = state_13252__$1;(statearr_13256_13285[(1)] = (6));
} else
{var statearr_13257_13286 = state_13252__$1;(statearr_13257_13286[(1)] = (7));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (15)))
{var inst_13248 = (state_13252[(2)]);var state_13252__$1 = state_13252;var statearr_13258_13287 = state_13252__$1;(statearr_13258_13287[(2)] = inst_13248);
(statearr_13258_13287[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (13)))
{var inst_13241 = cljs.core.async.close_BANG_(out);var state_13252__$1 = state_13252;var statearr_13259_13288 = state_13252__$1;(statearr_13259_13288[(2)] = inst_13241);
(statearr_13259_13288[(1)] = (15));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (6)))
{var state_13252__$1 = state_13252;var statearr_13260_13289 = state_13252__$1;(statearr_13260_13289[(2)] = null);
(statearr_13260_13289[(1)] = (11));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (3)))
{var inst_13250 = (state_13252[(2)]);var state_13252__$1 = state_13252;return cljs.core.async.impl.ioc_helpers.return_chan(state_13252__$1,inst_13250);
} else
{if((state_val_13253 === (12)))
{var inst_13238 = (state_13252[(8)]);var inst_13238__$1 = (state_13252[(2)]);var inst_13239 = cljs.core.some(cljs.core.nil_QMARK_,inst_13238__$1);var state_13252__$1 = (function (){var statearr_13261 = state_13252;(statearr_13261[(8)] = inst_13238__$1);
return statearr_13261;
})();if(cljs.core.truth_(inst_13239))
{var statearr_13262_13290 = state_13252__$1;(statearr_13262_13290[(1)] = (13));
} else
{var statearr_13263_13291 = state_13252__$1;(statearr_13263_13291[(1)] = (14));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (2)))
{var inst_13215 = cljs.core.reset_BANG_(dctr,cnt);var inst_13216 = (0);var state_13252__$1 = (function (){var statearr_13264 = state_13252;(statearr_13264[(7)] = inst_13216);
(statearr_13264[(9)] = inst_13215);
return statearr_13264;
})();var statearr_13265_13292 = state_13252__$1;(statearr_13265_13292[(2)] = null);
(statearr_13265_13292[(1)] = (4));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (11)))
{var inst_13216 = (state_13252[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13252,(10),Object,null,(9));var inst_13225 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13216) : chs__$1.call(null,inst_13216));var inst_13226 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13216) : done.call(null,inst_13216));var inst_13227 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13225,inst_13226);var state_13252__$1 = state_13252;var statearr_13266_13293 = state_13252__$1;(statearr_13266_13293[(2)] = inst_13227);
cljs.core.async.impl.ioc_helpers.process_exception(state_13252__$1);
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (9)))
{var inst_13216 = (state_13252[(7)]);var inst_13229 = (state_13252[(2)]);var inst_13230 = (inst_13216 + (1));var inst_13216__$1 = inst_13230;var state_13252__$1 = (function (){var statearr_13267 = state_13252;(statearr_13267[(7)] = inst_13216__$1);
(statearr_13267[(10)] = inst_13229);
return statearr_13267;
})();var statearr_13268_13294 = state_13252__$1;(statearr_13268_13294[(2)] = null);
(statearr_13268_13294[(1)] = (4));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (5)))
{var inst_13236 = (state_13252[(2)]);var state_13252__$1 = (function (){var statearr_13269 = state_13252;(statearr_13269[(11)] = inst_13236);
return statearr_13269;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13252__$1,(12),dchan);
} else
{if((state_val_13253 === (14)))
{var inst_13238 = (state_13252[(8)]);var inst_13243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13238);var state_13252__$1 = state_13252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13252__$1,(16),out,inst_13243);
} else
{if((state_val_13253 === (16)))
{var inst_13245 = (state_13252[(2)]);var state_13252__$1 = (function (){var statearr_13270 = state_13252;(statearr_13270[(12)] = inst_13245);
return statearr_13270;
})();var statearr_13271_13295 = state_13252__$1;(statearr_13271_13295[(2)] = null);
(statearr_13271_13295[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (10)))
{var inst_13220 = (state_13252[(2)]);var inst_13221 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_13252__$1 = (function (){var statearr_13272 = state_13252;(statearr_13272[(13)] = inst_13220);
return statearr_13272;
})();var statearr_13273_13296 = state_13252__$1;(statearr_13273_13296[(2)] = inst_13221);
cljs.core.async.impl.ioc_helpers.process_exception(state_13252__$1);
return cljs.core.constant$keyword$30;
} else
{if((state_val_13253 === (8)))
{var inst_13234 = (state_13252[(2)]);var state_13252__$1 = state_13252;var statearr_13274_13297 = state_13252__$1;(statearr_13274_13297[(2)] = inst_13234);
(statearr_13274_13297[(1)] = (5));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6208__auto__,c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13278[(0)] = state_machine__6209__auto__);
(statearr_13278[(1)] = (1));
return statearr_13278;
});
var state_machine__6209__auto____1 = (function (state_13252){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13252);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13279){if((e13279 instanceof Object))
{var ex__6212__auto__ = e13279;var statearr_13280_13298 = state_13252;(statearr_13280_13298[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13252);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13299 = state_13252;
state_13252 = G__13299;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13252){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6275__auto__ = (function (){var statearr_13281 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13282);
return statearr_13281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13282,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___13407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13407,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13407,out){
return (function (state_13383){var state_val_13384 = (state_13383[(1)]);if((state_val_13384 === (7)))
{var inst_13363 = (state_13383[(7)]);var inst_13362 = (state_13383[(8)]);var inst_13362__$1 = (state_13383[(2)]);var inst_13363__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13362__$1,(0),null);var inst_13364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13362__$1,(1),null);var inst_13365 = (inst_13363__$1 == null);var state_13383__$1 = (function (){var statearr_13385 = state_13383;(statearr_13385[(7)] = inst_13363__$1);
(statearr_13385[(8)] = inst_13362__$1);
(statearr_13385[(9)] = inst_13364);
return statearr_13385;
})();if(cljs.core.truth_(inst_13365))
{var statearr_13386_13408 = state_13383__$1;(statearr_13386_13408[(1)] = (8));
} else
{var statearr_13387_13409 = state_13383__$1;(statearr_13387_13409[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (1)))
{var inst_13354 = cljs.core.vec(chs);var inst_13355 = inst_13354;var state_13383__$1 = (function (){var statearr_13388 = state_13383;(statearr_13388[(10)] = inst_13355);
return statearr_13388;
})();var statearr_13389_13410 = state_13383__$1;(statearr_13389_13410[(2)] = null);
(statearr_13389_13410[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (4)))
{var inst_13355 = (state_13383[(10)]);var state_13383__$1 = state_13383;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_13383__$1,(7),inst_13355);
} else
{if((state_val_13384 === (6)))
{var inst_13379 = (state_13383[(2)]);var state_13383__$1 = state_13383;var statearr_13390_13411 = state_13383__$1;(statearr_13390_13411[(2)] = inst_13379);
(statearr_13390_13411[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (3)))
{var inst_13381 = (state_13383[(2)]);var state_13383__$1 = state_13383;return cljs.core.async.impl.ioc_helpers.return_chan(state_13383__$1,inst_13381);
} else
{if((state_val_13384 === (2)))
{var inst_13355 = (state_13383[(10)]);var inst_13357 = cljs.core.count(inst_13355);var inst_13358 = (inst_13357 > (0));var state_13383__$1 = state_13383;if(cljs.core.truth_(inst_13358))
{var statearr_13392_13412 = state_13383__$1;(statearr_13392_13412[(1)] = (4));
} else
{var statearr_13393_13413 = state_13383__$1;(statearr_13393_13413[(1)] = (5));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (11)))
{var inst_13355 = (state_13383[(10)]);var inst_13372 = (state_13383[(2)]);var tmp13391 = inst_13355;var inst_13355__$1 = tmp13391;var state_13383__$1 = (function (){var statearr_13394 = state_13383;(statearr_13394[(11)] = inst_13372);
(statearr_13394[(10)] = inst_13355__$1);
return statearr_13394;
})();var statearr_13395_13414 = state_13383__$1;(statearr_13395_13414[(2)] = null);
(statearr_13395_13414[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (9)))
{var inst_13363 = (state_13383[(7)]);var state_13383__$1 = state_13383;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13383__$1,(11),out,inst_13363);
} else
{if((state_val_13384 === (5)))
{var inst_13377 = cljs.core.async.close_BANG_(out);var state_13383__$1 = state_13383;var statearr_13396_13415 = state_13383__$1;(statearr_13396_13415[(2)] = inst_13377);
(statearr_13396_13415[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (10)))
{var inst_13375 = (state_13383[(2)]);var state_13383__$1 = state_13383;var statearr_13397_13416 = state_13383__$1;(statearr_13397_13416[(2)] = inst_13375);
(statearr_13397_13416[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13384 === (8)))
{var inst_13363 = (state_13383[(7)]);var inst_13362 = (state_13383[(8)]);var inst_13364 = (state_13383[(9)]);var inst_13355 = (state_13383[(10)]);var inst_13367 = (function (){var c = inst_13364;var v = inst_13363;var vec__13360 = inst_13362;var cs = inst_13355;return ((function (c,v,vec__13360,cs,inst_13363,inst_13362,inst_13364,inst_13355,state_val_13384,c__6273__auto___13407,out){
return (function (p1__13300_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13300_SHARP_);
});
;})(c,v,vec__13360,cs,inst_13363,inst_13362,inst_13364,inst_13355,state_val_13384,c__6273__auto___13407,out))
})();var inst_13368 = cljs.core.filterv(inst_13367,inst_13355);var inst_13355__$1 = inst_13368;var state_13383__$1 = (function (){var statearr_13398 = state_13383;(statearr_13398[(10)] = inst_13355__$1);
return statearr_13398;
})();var statearr_13399_13417 = state_13383__$1;(statearr_13399_13417[(2)] = null);
(statearr_13399_13417[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13407,out))
;return ((function (switch__6208__auto__,c__6273__auto___13407,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13403 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13403[(0)] = state_machine__6209__auto__);
(statearr_13403[(1)] = (1));
return statearr_13403;
});
var state_machine__6209__auto____1 = (function (state_13383){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13383);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13404){if((e13404 instanceof Object))
{var ex__6212__auto__ = e13404;var statearr_13405_13418 = state_13383;(statearr_13405_13418[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13383);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13419 = state_13383;
state_13383 = G__13419;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13383){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13407,out))
})();var state__6275__auto__ = (function (){var statearr_13406 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13407);
return statearr_13406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13407,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___13512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13512,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13512,out){
return (function (state_13489){var state_val_13490 = (state_13489[(1)]);if((state_val_13490 === (7)))
{var inst_13471 = (state_13489[(7)]);var inst_13471__$1 = (state_13489[(2)]);var inst_13472 = (inst_13471__$1 == null);var inst_13473 = cljs.core.not(inst_13472);var state_13489__$1 = (function (){var statearr_13491 = state_13489;(statearr_13491[(7)] = inst_13471__$1);
return statearr_13491;
})();if(inst_13473)
{var statearr_13492_13513 = state_13489__$1;(statearr_13492_13513[(1)] = (8));
} else
{var statearr_13493_13514 = state_13489__$1;(statearr_13493_13514[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (1)))
{var inst_13466 = (0);var state_13489__$1 = (function (){var statearr_13494 = state_13489;(statearr_13494[(8)] = inst_13466);
return statearr_13494;
})();var statearr_13495_13515 = state_13489__$1;(statearr_13495_13515[(2)] = null);
(statearr_13495_13515[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (4)))
{var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13489__$1,(7),ch);
} else
{if((state_val_13490 === (6)))
{var inst_13484 = (state_13489[(2)]);var state_13489__$1 = state_13489;var statearr_13496_13516 = state_13489__$1;(statearr_13496_13516[(2)] = inst_13484);
(statearr_13496_13516[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (3)))
{var inst_13486 = (state_13489[(2)]);var inst_13487 = cljs.core.async.close_BANG_(out);var state_13489__$1 = (function (){var statearr_13497 = state_13489;(statearr_13497[(9)] = inst_13486);
return statearr_13497;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_13489__$1,inst_13487);
} else
{if((state_val_13490 === (2)))
{var inst_13466 = (state_13489[(8)]);var inst_13468 = (inst_13466 < n);var state_13489__$1 = state_13489;if(cljs.core.truth_(inst_13468))
{var statearr_13498_13517 = state_13489__$1;(statearr_13498_13517[(1)] = (4));
} else
{var statearr_13499_13518 = state_13489__$1;(statearr_13499_13518[(1)] = (5));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (11)))
{var inst_13466 = (state_13489[(8)]);var inst_13476 = (state_13489[(2)]);var inst_13477 = (inst_13466 + (1));var inst_13466__$1 = inst_13477;var state_13489__$1 = (function (){var statearr_13500 = state_13489;(statearr_13500[(8)] = inst_13466__$1);
(statearr_13500[(10)] = inst_13476);
return statearr_13500;
})();var statearr_13501_13519 = state_13489__$1;(statearr_13501_13519[(2)] = null);
(statearr_13501_13519[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (9)))
{var state_13489__$1 = state_13489;var statearr_13502_13520 = state_13489__$1;(statearr_13502_13520[(2)] = null);
(statearr_13502_13520[(1)] = (10));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (5)))
{var state_13489__$1 = state_13489;var statearr_13503_13521 = state_13489__$1;(statearr_13503_13521[(2)] = null);
(statearr_13503_13521[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (10)))
{var inst_13481 = (state_13489[(2)]);var state_13489__$1 = state_13489;var statearr_13504_13522 = state_13489__$1;(statearr_13504_13522[(2)] = inst_13481);
(statearr_13504_13522[(1)] = (6));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13490 === (8)))
{var inst_13471 = (state_13489[(7)]);var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13489__$1,(11),out,inst_13471);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13512,out))
;return ((function (switch__6208__auto__,c__6273__auto___13512,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13508 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13508[(0)] = state_machine__6209__auto__);
(statearr_13508[(1)] = (1));
return statearr_13508;
});
var state_machine__6209__auto____1 = (function (state_13489){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13489);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13509){if((e13509 instanceof Object))
{var ex__6212__auto__ = e13509;var statearr_13510_13523 = state_13489;(statearr_13510_13523[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13489);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13524 = state_13489;
state_13489 = G__13524;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13489){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13512,out))
})();var state__6275__auto__ = (function (){var statearr_13511 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13512);
return statearr_13511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13512,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___13621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13621,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13621,out){
return (function (state_13596){var state_val_13597 = (state_13596[(1)]);if((state_val_13597 === (7)))
{var inst_13591 = (state_13596[(2)]);var state_13596__$1 = state_13596;var statearr_13598_13622 = state_13596__$1;(statearr_13598_13622[(2)] = inst_13591);
(statearr_13598_13622[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (1)))
{var inst_13573 = null;var state_13596__$1 = (function (){var statearr_13599 = state_13596;(statearr_13599[(7)] = inst_13573);
return statearr_13599;
})();var statearr_13600_13623 = state_13596__$1;(statearr_13600_13623[(2)] = null);
(statearr_13600_13623[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (4)))
{var inst_13576 = (state_13596[(8)]);var inst_13576__$1 = (state_13596[(2)]);var inst_13577 = (inst_13576__$1 == null);var inst_13578 = cljs.core.not(inst_13577);var state_13596__$1 = (function (){var statearr_13601 = state_13596;(statearr_13601[(8)] = inst_13576__$1);
return statearr_13601;
})();if(inst_13578)
{var statearr_13602_13624 = state_13596__$1;(statearr_13602_13624[(1)] = (5));
} else
{var statearr_13603_13625 = state_13596__$1;(statearr_13603_13625[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (6)))
{var state_13596__$1 = state_13596;var statearr_13604_13626 = state_13596__$1;(statearr_13604_13626[(2)] = null);
(statearr_13604_13626[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (3)))
{var inst_13593 = (state_13596[(2)]);var inst_13594 = cljs.core.async.close_BANG_(out);var state_13596__$1 = (function (){var statearr_13605 = state_13596;(statearr_13605[(9)] = inst_13593);
return statearr_13605;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_13596__$1,inst_13594);
} else
{if((state_val_13597 === (2)))
{var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13596__$1,(4),ch);
} else
{if((state_val_13597 === (11)))
{var inst_13576 = (state_13596[(8)]);var inst_13585 = (state_13596[(2)]);var inst_13573 = inst_13576;var state_13596__$1 = (function (){var statearr_13606 = state_13596;(statearr_13606[(7)] = inst_13573);
(statearr_13606[(10)] = inst_13585);
return statearr_13606;
})();var statearr_13607_13627 = state_13596__$1;(statearr_13607_13627[(2)] = null);
(statearr_13607_13627[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (9)))
{var inst_13576 = (state_13596[(8)]);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13596__$1,(11),out,inst_13576);
} else
{if((state_val_13597 === (5)))
{var inst_13573 = (state_13596[(7)]);var inst_13576 = (state_13596[(8)]);var inst_13580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13576,inst_13573);var state_13596__$1 = state_13596;if(inst_13580)
{var statearr_13609_13628 = state_13596__$1;(statearr_13609_13628[(1)] = (8));
} else
{var statearr_13610_13629 = state_13596__$1;(statearr_13610_13629[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (10)))
{var inst_13588 = (state_13596[(2)]);var state_13596__$1 = state_13596;var statearr_13611_13630 = state_13596__$1;(statearr_13611_13630[(2)] = inst_13588);
(statearr_13611_13630[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13597 === (8)))
{var inst_13573 = (state_13596[(7)]);var tmp13608 = inst_13573;var inst_13573__$1 = tmp13608;var state_13596__$1 = (function (){var statearr_13612 = state_13596;(statearr_13612[(7)] = inst_13573__$1);
return statearr_13612;
})();var statearr_13613_13631 = state_13596__$1;(statearr_13613_13631[(2)] = null);
(statearr_13613_13631[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13621,out))
;return ((function (switch__6208__auto__,c__6273__auto___13621,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13617 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13617[(0)] = state_machine__6209__auto__);
(statearr_13617[(1)] = (1));
return statearr_13617;
});
var state_machine__6209__auto____1 = (function (state_13596){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13596);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13618){if((e13618 instanceof Object))
{var ex__6212__auto__ = e13618;var statearr_13619_13632 = state_13596;(statearr_13619_13632[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13596);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13633 = state_13596;
state_13596 = G__13633;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13596){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13621,out))
})();var state__6275__auto__ = (function (){var statearr_13620 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13621);
return statearr_13620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13621,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___13768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13768,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13768,out){
return (function (state_13738){var state_val_13739 = (state_13738[(1)]);if((state_val_13739 === (7)))
{var inst_13734 = (state_13738[(2)]);var state_13738__$1 = state_13738;var statearr_13740_13769 = state_13738__$1;(statearr_13740_13769[(2)] = inst_13734);
(statearr_13740_13769[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (1)))
{var inst_13701 = (new Array(n));var inst_13702 = inst_13701;var inst_13703 = (0);var state_13738__$1 = (function (){var statearr_13741 = state_13738;(statearr_13741[(7)] = inst_13702);
(statearr_13741[(8)] = inst_13703);
return statearr_13741;
})();var statearr_13742_13770 = state_13738__$1;(statearr_13742_13770[(2)] = null);
(statearr_13742_13770[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (4)))
{var inst_13706 = (state_13738[(9)]);var inst_13706__$1 = (state_13738[(2)]);var inst_13707 = (inst_13706__$1 == null);var inst_13708 = cljs.core.not(inst_13707);var state_13738__$1 = (function (){var statearr_13743 = state_13738;(statearr_13743[(9)] = inst_13706__$1);
return statearr_13743;
})();if(inst_13708)
{var statearr_13744_13771 = state_13738__$1;(statearr_13744_13771[(1)] = (5));
} else
{var statearr_13745_13772 = state_13738__$1;(statearr_13745_13772[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (15)))
{var inst_13728 = (state_13738[(2)]);var state_13738__$1 = state_13738;var statearr_13746_13773 = state_13738__$1;(statearr_13746_13773[(2)] = inst_13728);
(statearr_13746_13773[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (13)))
{var state_13738__$1 = state_13738;var statearr_13747_13774 = state_13738__$1;(statearr_13747_13774[(2)] = null);
(statearr_13747_13774[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (6)))
{var inst_13703 = (state_13738[(8)]);var inst_13724 = (inst_13703 > (0));var state_13738__$1 = state_13738;if(cljs.core.truth_(inst_13724))
{var statearr_13748_13775 = state_13738__$1;(statearr_13748_13775[(1)] = (12));
} else
{var statearr_13749_13776 = state_13738__$1;(statearr_13749_13776[(1)] = (13));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (3)))
{var inst_13736 = (state_13738[(2)]);var state_13738__$1 = state_13738;return cljs.core.async.impl.ioc_helpers.return_chan(state_13738__$1,inst_13736);
} else
{if((state_val_13739 === (12)))
{var inst_13702 = (state_13738[(7)]);var inst_13726 = cljs.core.vec(inst_13702);var state_13738__$1 = state_13738;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13738__$1,(15),out,inst_13726);
} else
{if((state_val_13739 === (2)))
{var state_13738__$1 = state_13738;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13738__$1,(4),ch);
} else
{if((state_val_13739 === (11)))
{var inst_13718 = (state_13738[(2)]);var inst_13719 = (new Array(n));var inst_13702 = inst_13719;var inst_13703 = (0);var state_13738__$1 = (function (){var statearr_13750 = state_13738;(statearr_13750[(7)] = inst_13702);
(statearr_13750[(10)] = inst_13718);
(statearr_13750[(8)] = inst_13703);
return statearr_13750;
})();var statearr_13751_13777 = state_13738__$1;(statearr_13751_13777[(2)] = null);
(statearr_13751_13777[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (9)))
{var inst_13702 = (state_13738[(7)]);var inst_13716 = cljs.core.vec(inst_13702);var state_13738__$1 = state_13738;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13738__$1,(11),out,inst_13716);
} else
{if((state_val_13739 === (5)))
{var inst_13702 = (state_13738[(7)]);var inst_13706 = (state_13738[(9)]);var inst_13711 = (state_13738[(11)]);var inst_13703 = (state_13738[(8)]);var inst_13710 = (inst_13702[inst_13703] = inst_13706);var inst_13711__$1 = (inst_13703 + (1));var inst_13712 = (inst_13711__$1 < n);var state_13738__$1 = (function (){var statearr_13752 = state_13738;(statearr_13752[(11)] = inst_13711__$1);
(statearr_13752[(12)] = inst_13710);
return statearr_13752;
})();if(cljs.core.truth_(inst_13712))
{var statearr_13753_13778 = state_13738__$1;(statearr_13753_13778[(1)] = (8));
} else
{var statearr_13754_13779 = state_13738__$1;(statearr_13754_13779[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (14)))
{var inst_13731 = (state_13738[(2)]);var inst_13732 = cljs.core.async.close_BANG_(out);var state_13738__$1 = (function (){var statearr_13756 = state_13738;(statearr_13756[(13)] = inst_13731);
return statearr_13756;
})();var statearr_13757_13780 = state_13738__$1;(statearr_13757_13780[(2)] = inst_13732);
(statearr_13757_13780[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (10)))
{var inst_13722 = (state_13738[(2)]);var state_13738__$1 = state_13738;var statearr_13758_13781 = state_13738__$1;(statearr_13758_13781[(2)] = inst_13722);
(statearr_13758_13781[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13739 === (8)))
{var inst_13702 = (state_13738[(7)]);var inst_13711 = (state_13738[(11)]);var tmp13755 = inst_13702;var inst_13702__$1 = tmp13755;var inst_13703 = inst_13711;var state_13738__$1 = (function (){var statearr_13759 = state_13738;(statearr_13759[(7)] = inst_13702__$1);
(statearr_13759[(8)] = inst_13703);
return statearr_13759;
})();var statearr_13760_13782 = state_13738__$1;(statearr_13760_13782[(2)] = null);
(statearr_13760_13782[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13768,out))
;return ((function (switch__6208__auto__,c__6273__auto___13768,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13764[(0)] = state_machine__6209__auto__);
(statearr_13764[(1)] = (1));
return statearr_13764;
});
var state_machine__6209__auto____1 = (function (state_13738){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13738);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13765){if((e13765 instanceof Object))
{var ex__6212__auto__ = e13765;var statearr_13766_13783 = state_13738;(statearr_13766_13783[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13738);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13784 = state_13738;
state_13738 = G__13784;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13738){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13768,out))
})();var state__6275__auto__ = (function (){var statearr_13767 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13768);
return statearr_13767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13768,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6273__auto___13927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6273__auto___13927,out){
return (function (){var f__6274__auto__ = (function (){var switch__6208__auto__ = ((function (c__6273__auto___13927,out){
return (function (state_13897){var state_val_13898 = (state_13897[(1)]);if((state_val_13898 === (7)))
{var inst_13893 = (state_13897[(2)]);var state_13897__$1 = state_13897;var statearr_13899_13928 = state_13897__$1;(statearr_13899_13928[(2)] = inst_13893);
(statearr_13899_13928[(1)] = (3));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (1)))
{var inst_13856 = [];var inst_13857 = inst_13856;var inst_13858 = cljs.core.constant$keyword$43;var state_13897__$1 = (function (){var statearr_13900 = state_13897;(statearr_13900[(7)] = inst_13857);
(statearr_13900[(8)] = inst_13858);
return statearr_13900;
})();var statearr_13901_13929 = state_13897__$1;(statearr_13901_13929[(2)] = null);
(statearr_13901_13929[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (4)))
{var inst_13861 = (state_13897[(9)]);var inst_13861__$1 = (state_13897[(2)]);var inst_13862 = (inst_13861__$1 == null);var inst_13863 = cljs.core.not(inst_13862);var state_13897__$1 = (function (){var statearr_13902 = state_13897;(statearr_13902[(9)] = inst_13861__$1);
return statearr_13902;
})();if(inst_13863)
{var statearr_13903_13930 = state_13897__$1;(statearr_13903_13930[(1)] = (5));
} else
{var statearr_13904_13931 = state_13897__$1;(statearr_13904_13931[(1)] = (6));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (15)))
{var inst_13887 = (state_13897[(2)]);var state_13897__$1 = state_13897;var statearr_13905_13932 = state_13897__$1;(statearr_13905_13932[(2)] = inst_13887);
(statearr_13905_13932[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (13)))
{var state_13897__$1 = state_13897;var statearr_13906_13933 = state_13897__$1;(statearr_13906_13933[(2)] = null);
(statearr_13906_13933[(1)] = (14));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (6)))
{var inst_13857 = (state_13897[(7)]);var inst_13882 = inst_13857.length;var inst_13883 = (inst_13882 > (0));var state_13897__$1 = state_13897;if(cljs.core.truth_(inst_13883))
{var statearr_13907_13934 = state_13897__$1;(statearr_13907_13934[(1)] = (12));
} else
{var statearr_13908_13935 = state_13897__$1;(statearr_13908_13935[(1)] = (13));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (3)))
{var inst_13895 = (state_13897[(2)]);var state_13897__$1 = state_13897;return cljs.core.async.impl.ioc_helpers.return_chan(state_13897__$1,inst_13895);
} else
{if((state_val_13898 === (12)))
{var inst_13857 = (state_13897[(7)]);var inst_13885 = cljs.core.vec(inst_13857);var state_13897__$1 = state_13897;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13897__$1,(15),out,inst_13885);
} else
{if((state_val_13898 === (2)))
{var state_13897__$1 = state_13897;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13897__$1,(4),ch);
} else
{if((state_val_13898 === (11)))
{var inst_13865 = (state_13897[(10)]);var inst_13861 = (state_13897[(9)]);var inst_13875 = (state_13897[(2)]);var inst_13876 = [];var inst_13877 = inst_13876.push(inst_13861);var inst_13857 = inst_13876;var inst_13858 = inst_13865;var state_13897__$1 = (function (){var statearr_13909 = state_13897;(statearr_13909[(7)] = inst_13857);
(statearr_13909[(11)] = inst_13877);
(statearr_13909[(12)] = inst_13875);
(statearr_13909[(8)] = inst_13858);
return statearr_13909;
})();var statearr_13910_13936 = state_13897__$1;(statearr_13910_13936[(2)] = null);
(statearr_13910_13936[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (9)))
{var inst_13857 = (state_13897[(7)]);var inst_13873 = cljs.core.vec(inst_13857);var state_13897__$1 = state_13897;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13897__$1,(11),out,inst_13873);
} else
{if((state_val_13898 === (5)))
{var inst_13865 = (state_13897[(10)]);var inst_13861 = (state_13897[(9)]);var inst_13858 = (state_13897[(8)]);var inst_13865__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13861) : f.call(null,inst_13861));var inst_13866 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13865__$1,inst_13858);var inst_13867 = cljs.core.keyword_identical_QMARK_(inst_13858,cljs.core.constant$keyword$43);var inst_13868 = (inst_13866) || (inst_13867);var state_13897__$1 = (function (){var statearr_13911 = state_13897;(statearr_13911[(10)] = inst_13865__$1);
return statearr_13911;
})();if(cljs.core.truth_(inst_13868))
{var statearr_13912_13937 = state_13897__$1;(statearr_13912_13937[(1)] = (8));
} else
{var statearr_13913_13938 = state_13897__$1;(statearr_13913_13938[(1)] = (9));
}
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (14)))
{var inst_13890 = (state_13897[(2)]);var inst_13891 = cljs.core.async.close_BANG_(out);var state_13897__$1 = (function (){var statearr_13915 = state_13897;(statearr_13915[(13)] = inst_13890);
return statearr_13915;
})();var statearr_13916_13939 = state_13897__$1;(statearr_13916_13939[(2)] = inst_13891);
(statearr_13916_13939[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (10)))
{var inst_13880 = (state_13897[(2)]);var state_13897__$1 = state_13897;var statearr_13917_13940 = state_13897__$1;(statearr_13917_13940[(2)] = inst_13880);
(statearr_13917_13940[(1)] = (7));
return cljs.core.constant$keyword$30;
} else
{if((state_val_13898 === (8)))
{var inst_13857 = (state_13897[(7)]);var inst_13865 = (state_13897[(10)]);var inst_13861 = (state_13897[(9)]);var inst_13870 = inst_13857.push(inst_13861);var tmp13914 = inst_13857;var inst_13857__$1 = tmp13914;var inst_13858 = inst_13865;var state_13897__$1 = (function (){var statearr_13918 = state_13897;(statearr_13918[(7)] = inst_13857__$1);
(statearr_13918[(14)] = inst_13870);
(statearr_13918[(8)] = inst_13858);
return statearr_13918;
})();var statearr_13919_13941 = state_13897__$1;(statearr_13919_13941[(2)] = null);
(statearr_13919_13941[(1)] = (2));
return cljs.core.constant$keyword$30;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6273__auto___13927,out))
;return ((function (switch__6208__auto__,c__6273__auto___13927,out){
return (function() {
var state_machine__6209__auto__ = null;
var state_machine__6209__auto____0 = (function (){var statearr_13923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13923[(0)] = state_machine__6209__auto__);
(statearr_13923[(1)] = (1));
return statearr_13923;
});
var state_machine__6209__auto____1 = (function (state_13897){while(true){
var ret_value__6210__auto__ = (function (){try{while(true){
var result__6211__auto__ = switch__6208__auto__(state_13897);if(cljs.core.keyword_identical_QMARK_(result__6211__auto__,cljs.core.constant$keyword$30))
{{
continue;
}
} else
{return result__6211__auto__;
}
break;
}
}catch (e13924){if((e13924 instanceof Object))
{var ex__6212__auto__ = e13924;var statearr_13925_13942 = state_13897;(statearr_13925_13942[(5)] = ex__6212__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13897);
return cljs.core.constant$keyword$30;
} else
{if(cljs.core.constant$keyword$6)
{throw e13924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6210__auto__,cljs.core.constant$keyword$30))
{{
var G__13943 = state_13897;
state_13897 = G__13943;
continue;
}
} else
{return ret_value__6210__auto__;
}
break;
}
});
state_machine__6209__auto__ = function(state_13897){
switch(arguments.length){
case 0:
return state_machine__6209__auto____0.call(this);
case 1:
return state_machine__6209__auto____1.call(this,state_13897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6209__auto____0;
state_machine__6209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6209__auto____1;
return state_machine__6209__auto__;
})()
;})(switch__6208__auto__,c__6273__auto___13927,out))
})();var state__6275__auto__ = (function (){var statearr_13926 = (f__6274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6274__auto__.cljs$core$IFn$_invoke$arity$0() : f__6274__auto__.call(null));(statearr_13926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6273__auto___13927);
return statearr_13926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6275__auto__);
});})(c__6273__auto___13927,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
