(self.webpackChunk=self.webpackChunk||[]).push([[413],{51897:(e,t,s)=>{var i=s(25682),o="chrome-extension://__MSG_@@extension_id__/",r="moz-extension://__MSG_@@extension_id__/",n=self.GR_RESOURCE_ROOT||o,l=self.GR_RESOURCE_ROOT||r;e.exports={__css:i.toString().replace(new RegExp(o,"g"),n).replace(new RegExp(r,"g"),l),...i.locals}},95062:(e,t,s)=>{s.r(t),s.d(t,{AutocompleteFeature:()=>ge});var i=s(49708),o=s(83401),r=s(41398),n=s(16118),l=s(85985),a=s(77176),c=s(75420),d=s(74850),h=s(38983),u=s(44253);class g{constructor(e,t,s,m,p,f){this._mode=e,this._textField=t,this._textObserver=s,this._caretService=m,this._service=p,this._log=d.Y.create(g.name),this._competingSuggestion=h.h.create(null),this._subs=[this._service.suggestionBehavior.subscribe((e=>{var t,s;if(this._mode.get()===u.mv.disabled)return;const i=this._caretService.getCaretPos();if(null===i)return this._competingSuggestion.set(null);const o=null===(t=this._textObserver.getCurrentTextMap().getFragmentAtOrBeforeOffset(i))||void 0===t?void 0:t.node.parentElement;if(!o)return this._log.error(`Failed to find a parent element of the text node at position ${i}`);const r=o.querySelector('span[contenteditable="false"]'),n=null===(s=null==r?void 0:r.querySelector("span"))||void 0===s?void 0:s.innerText,l=e&&this._modelProxy.model.getAlertById(e.alertId);if(e&&!l)return this._log.error(`Failed to find ${e.alertSource} alert #${e.alertId} for display`);if(!r||!n)return(null==l?void 0:l.source)===u.w.external&&l.state===u.PU.preferred&&this._modelProxy.model.updateAlertState(l.id,{state:u.PU.initial}),this._competingSuggestion.set(null);this._competingSuggestion.set(n);const a=this._modelProxy.checkForDuplicateAlert(i,n);(null==l?void 0:l.source)===u.w.external?(r.style.display="initial",a&&a.id===l.id||this._modelProxy.updateAlertCompletion(l.id,i,n),l.state!==u.PU.suggested&&this._modelProxy.model.updateAlertState(l.id,{state:u.PU.suggested,suggestion:n})):(r.style.display="none",a||this._mode.get()===u.mv.enabledSolitary||this._modelProxy.addAlert(i,n,this._mode.get()===u.mv.benchmarking||!this._caretService.isEligible(i)))})),this._service.suggestionBehavior.pipe((0,r.M)(this._competingSuggestion),(0,n.G)(),(0,l.h)((([e,t])=>{var s,i;return(null===(s=e[0])||void 0===s?void 0:s.alertSource)===u.w.external&&(null===(i=t[0])||void 0===i?void 0:i.alertSource)!==u.w.external})),(0,a.U)((([e,t])=>e))).subscribe((([e,t])=>{if(null===t)return this._log.warn("Can't update alert state to ignored - suggestion text is equal to null");const s=this._modelProxy.model.getAlertById(e.alertId);(null==s?void 0:s.state)===u.PU.suggested&&this._modelProxy.model.updateAlertState(s.id,{state:u.PU.ignored,suggestion:t})})),(this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"keydown",{capture:!0}):o.C).pipe((0,r.M)(this._service.suggestionBehavior)).subscribe((([e,t])=>{const s=this._competingSuggestion.get();if(this._mode.get()===u.mv.disabled||!s)return;const i=!(e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey);!i&&e.keyCode!==c.VD.Escape||t&&t.alertSource===u.w.external?i&&(null==t?void 0:t.alertSource)===u.w.external?this._modelProxy.model.updateAlertState(t.alertId,{state:u.PU.applied,suggestion:s}):e.keyCode===c.VD.Escape&&(null==t?void 0:t.alertSource)===u.w.external&&this._modelProxy.model.updateAlertState(t.alertId,{state:u.PU.discarded,suggestion:s}):(e.preventDefault(),e.stopPropagation())}))],this._modelProxy=new _(this._textObserver,f)}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}class _{constructor(e,t){this._textObserver=e,this.model=t,this._log=d.Y.create(_.name)}checkForDuplicateAlert(e,t){const s=this._textObserver.getCurrentTextMap().getPlainText();for(const i of this.model.getAll())if(i.source===u.w.external&&i.transformRange.end<=e&&i.transformRange.end+i.longestCompletion>e){const o=s.slice(i.transformRange.end,e)+t;if(i.completions.some((e=>e.text===o)))return i}return null}updateAlertCompletion(e,t,s){const i=this.model.getAlertById(e);if(!i||i.source!==u.w.external||i.state===u.PU.initial){const t=i?`has unsuitable alert source ${i.source} or state ${i.state}`:"does not exist";return this._log.error(`Can't update alert #${e} - ${t}`)}const o=this._textObserver.getCurrentTextMap().getPlainText().slice(i.transformRange.end,t);if(o.length!==t-i.transformRange.end)return this._log.error(`Request to change alert #${e} and actual text are out of sync`);const r={id:u.iH.getNextCompletionId(),text:o+s,patternName:"unknown",confidenceCurve:[[0,0],[t-i.transformRange.end,1]]};this.model.updateAlert({...i,completions:[r,...i.completions],completion:r})}addAlert(e,t,s=!1){const i=this._textObserver.getCurrentTextMap().getPlainText(),o=Math.max(0,e-5),r=i.slice(o,e),n={start:o,end:e};if(!s&&t.length<5)return;const l={text:r+t,patternName:"unknown",textBegin:n.start,prefixBegin:n.start,prefixEnd:n.end,textEnd:n.end+t.length,confidence:1,confidenceCurve:{}};u.iH.create({threshold:1,completions:[l]},u.w.external,"unreg",void 0,s?0:3).forEach((e=>this.model.addAlert(e)))}}var m=s(24209),p=s(93508);class f{constructor(e,t,s,n){this._mode=e,this._textField=t,this._textObserver=s,this._caretService=n,this._suggestionSelector="span.suggestedCompletion",this._styleElement=this._textField.ownerDocument.createElement("style"),this._hasCompetingSuggestion=this._textObserver.contentChanges.async.pipe((0,a.U)((e=>{if(this._mode.get()===u.mv.disabled)return!1;if(null===this._caretService.getCaretPos())return!1;const t=this._textField.querySelector(this._suggestionSelector);return t&&"none"!==t.style.display&&(t.style.display="none",t.textContent=""),!!t})),(0,p.O)(!1)),this._subs=[this._mode.subscribe((e=>{this._styleElement.innerHTML=e===u.mv.disabled?"":`${this._suggestionSelector}{display: none !important;}`})),(this._textField.ownerDocument?(0,m.T)((0,i.R)(this._textField.ownerDocument,"keyup",{capture:!0}),(0,i.R)(this._textField.ownerDocument,"keydown",{capture:!0})):o.C).pipe((0,r.M)(this._mode,this._hasCompetingSuggestion)).subscribe((([e,t,s])=>{if(t===u.mv.disabled||!s)return;(!(e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)||e.keyCode===c.VD.Escape)&&(e.preventDefault(),e.stopPropagation())}))],this._textField.ownerDocument.head.appendChild(this._styleElement)}dispose(){this._subs.forEach((e=>e.unsubscribe())),this._styleElement.remove()}}var v=s(32952),x=s(28043);class b{constructor(e,t,s){this._mode=e,this._disableFeature=t,this._openFeedbackForm=s,this._hovered=new v.xQ,this.onHover=e=>this._hovered.next(e),this._dismissed=new v.xQ,this.onDismiss=e=>this._dismissed.next(e),this.cardHovered=this._hovered.pipe((0,p.O)(!1),(0,x.x)()),this.cardDismissed=this._dismissed.pipe((0,x.x)()),this.isDisabled=this._mode.view((e=>e===u.mv.disabled)),this.onDisable=()=>{this._disableFeature()},this.onFeedback=(e,t)=>{this._openFeedbackForm(e,t),this.onDismiss(null)}}}var w=s(27378),y=s(2844),S=s(25691),P=s(37985);class C{constructor(e,t,s){this._textField=e,this._controller=t,this._hoverProvider=s,this.view=(0,y.aj)(this._hoverProvider.hoveredBehavior,this._hoverProvider.anchorRect,this._controller.isDisabled).pipe((0,a.U)((([e,t,s])=>e&&t?w.createElement(S.W,{anchorRect:t,anchorMargin:{bottom:5,top:5},onHover:this._controller.onHover,onClickAway:this._controller.onDismiss,partName:"autocomplete-card",fieldOwnerDoc:this._textField.ownerDocument||void 0,style:{minWidth:"initial"}},s?w.createElement(A,null):w.createElement(E,{onDisable:this._controller.onDisable,onFeedback:()=>this._controller.onFeedback(e.alertId,e.text)})):null)))}}const E=e=>w.createElement("div",{className:P.menu},w.createElement("div",{className:P.item,onClick:e.onFeedback},"Feedback"),w.createElement("div",{className:P.item,onClick:e.onDisable},"Disable")),A=()=>w.createElement("div",{className:P.disable},w.createElement("div",{className:P.heading},"Phrasal predictions disabled."),w.createElement("div",{className:P.text},"To re-enable go to Grammarly menu in the browser toolbar."));class F{constructor(e,t){this._textObserver=e,this._selectionService=t,this._log=d.Y.create(F.name)}_getCaretPos(){const e=this._selectionService.getCurrentSelection();return e&&e.start===e.end?e.start:null}_isEligible(e){const t=this._textObserver.getCurrentTextMap().getPlainText();if(e<0||e>t.length)return this._log.warn(`Received unexpected value for caret position {${e}}`),!1;const s=/^[ \t]*/g,i=t.slice(e).replace(s,"");if(!i)return!0;if("\n"!==i[0])return!1;const o=i.slice(1).replace(s,"");return!o||"\n"===o[0]}getCaretPos(){return this._getCaretPos()}isEligible(e){return this._isEligible(e)}getCaretPosIfEligible(){const e=this._getCaretPos();return e&&this._isEligible(e)?e:null}}var U=s(90361),R=s(16105);class k{constructor(e,t,s,i,o,r){this._mode=e,this._textObserver=t,this._alertProcessor=s,this._rpcClient=i,this._caretService=o,this._model=r,this._uidPrefix=U.iy.create().slice(0,6),this._nextRevision=0,this._subs=[this._textObserver.contentChanges.async.subscribe((async({changes:e,newText:t})=>{if(!u.mv.nativeEnabled(this._mode.get())||!this._rpcClient.hasValue)return;if(1!==e.length||!R.q.isIns(e[0]))return;const s=this._caretService.getCaretPosIfEligible();if(null===s)return;this._nextRevision+=1,this._alertProcessor.registerRemoteRevision(`${this._uidPrefix}-${this._nextRevision.toString()}`);const i=await this._rpcClient.get().autocomplete(t.slice(0,s));if(i){const{threshold:e,...t}=i;u.iH.create({completions:[{...t,confidenceCurve:{}}],threshold:e},u.w.client,this._uidPrefix,this._nextRevision).forEach((e=>this._model.addAlert(e)))}}))]}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var O,D=s(40151),N=s(95300),T=s(24755),I=s(95343),$=s(62337),B=s(92783),H=s(86400);!function(e){e.isNative=function(e){return u.w.isNative(e.alertSource)}}(O||(O={}));class M{constructor(e,t,s,o,r,n,c){this._mode=e,this._textField=t,this._textObserver=s,this._geometryLayout=o,this._geometryProvider=r,this._caretService=n,this._model=c,this._log=d.Y.create(M.name),this.suggestionBehavior=(0,m.T)(this._textObserver.contentChanges.async,this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"selectionchange"):D.E,this._model.changes.pipe((0,l.h)((e=>e.addedAlerts.length>0||e.updatedAlerts.some((e=>e.state===u.PU.discarded)))))).pipe((0,a.U)((e=>{var t,s,i;if(this._mode.get()===u.mv.disabled)return null;const o=this._caretService.getCaretPos();if(null===o)return null;const r=this._textObserver.getCurrentTextMap(),n=r.getPlainText().slice(0,o),l=this._getCompletion(o,n);if(!l)return null;const[a,c,d]=l;if(a.source===u.w.external)return a.state===u.PU.initial&&this._model.updateAlertState(a.id,{state:u.PU.preferred,completion:c}),{alertId:a.id,alertSource:a.source};if(!this._caretService.isEligible(o))return null;const h=null===(t=r.getFragmentAtOrBeforeOffset(o))||void 0===t?void 0:t.node.parentElement;if(!h)return this._log.error(`Failed to find a parent element of the text node at position ${o}`),null;const g={start:o-1,end:o},_=this._geometryProvider.create(g,r),m=Boolean(_)&&this._geometryProvider.getClientRects(_),p=m&&this._geometryLayout.getApproximateConversionContext(),f=m&&p&&Array.from(m).map((e=>$.UL.setPosition(p.clientToRelative(e),e)));if(!m||!f||!f[0])return this._log.error(`Failed to get bounding rectangle for the caret at position ${o}`),null;const v=m[0],x=f[0];if((0,B.pZ)()&&(0,H.F)(n[g.start])&&0===x.width){const e=4,t=n.slice(0,-1).indexOf(n[g.start]);let s=e;if(-1!==t){const e=this._geometryProvider.create({start:t,end:t+1},r),i=this._geometryProvider.getClientRects(e);i&&i.length&&i[0].width&&(s=i[0].width)}[x,v].forEach((e=>e.width=s))}const b=null===(i=null===(s=h.ownerDocument)||void 0===s?void 0:s.defaultView)||void 0===i?void 0:i.getComputedStyle(h);return b?((a.state===u.PU.initial||a.state===u.PU.ignored&&a.completion.text!==c.text)&&this._model.updateAlertState(a.id,{state:u.PU.preferred,completion:c}),{alertId:a.id,alertSource:a.source,clientRect:v,offsetRect:x,text:c.text.slice(d),styles:{font:b.font,fontFamily:b.fontFamily,fontStyle:b.fontStyle,fontVariant:b.fontVariant,fontWeight:b.fontWeight,fontStretch:b.fontStretch,fontKerning:b.fontKerning,fontSize:b.fontSize,fontSizeAdjust:b.fontSizeAdjust,lineHeight:b.lineHeight,letterSpacing:b.letterSpacing,wordSpacing:b.wordSpacing,textTransform:b.textTransform}}):(this._log.error(`Failed to get computed styles for the text node at position ${o}`),null)})),(0,T.O)(new N.X(null)),(0,I.x)())}_getCompletion(e,t){const s=[];for(const t of this._model.getAll()){const i=t.state===u.PU.initial?t.transformRange.end+t.longestCompletion:t.transformRange.end+t.completion.text.length;if(t.state===u.PU.applied&&i===e)return null;const o=t.transformRange.end<=e&&i>e;if(o&&t.state===u.PU.discarded)return null;o&&s.push(t)}const i=(e,t,s)=>{const i=t.filter((e=>e.text.startsWith(s)&&e.text.length>s.length)).map((e=>[e,u.iH.getConfidenceAt(e,s.length)])).filter((t=>t[1]>=e));return i.length>0?i.reduce(((e,t)=>t[1]>e[1]?t:e)):null},o=e=>{const t=e.completion.text.slice(e.completionPosition+1),[s]=t.split(" ");return e.transformRange.end+e.completionPosition+1+s.length},r=[];for(const n of s){const s=t.slice(n.transformRange.end),l=s.length;if(n.state===u.PU.preferred||n.state===u.PU.suggested||n.state===u.PU.applied||n.state===u.PU.ignored&&o(n)>=e){const e=i(n.threshold,[n.completion],s);return e?[n,e[0],l]:null}{const e=i(n.threshold,n.completions,s);e&&r.push([n,e[0],e[1],l])}}if(0===r.length)return null;const n=r.filter((([e])=>e.source===u.w.default)),l=(n.length>0?n:r).reduce(((e,t)=>t[2]>e[2]?t:e));return l[1].text.slice(l[3]).length<4?null:[l[0],l[1],l[3]]}}class L{constructor(e,t,s,o,a,h,g,_=(e.ownerDocument?(0,i.R)(e.ownerDocument,"keydown",{capture:!0}):D.E)){this._selectionService=t,this._replacementService=s,this._model=o,this._service=a,this._showOnboardingHint=h,this._onOnboardingHintShown=g,this._keyDown=_,this._log=d.Y.create(L.name),this._subs=[this._keyDown.pipe((0,r.M)(this._service.suggestionBehavior),(0,l.h)((e=>null!==e[1]&&O.isNative(e[1])))).subscribe((([e,t])=>{e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?e.keyCode===c.VD.Escape&&this._handleRejectEvent(e,t):this._handleAcceptEvent(e,t)})),this._service.suggestionBehavior.pipe((0,l.h)((e=>null===e||O.isNative(e))),(0,n.G)(),(0,l.h)((e=>!!e[0]!=!!e[1]))).subscribe((e=>{const t=e[0]||e[1],s=!e[1],i=this._model.getAlertById(t.alertId);if(!i){const e=s?"was shown moments ago":"should be shown";return this._log.warn(`Failed to find alert #${t.alertId} that ${e}`)}s&&i.state===u.PU.suggested?this._model.updateAlertState(i.id,{state:u.PU.ignored,suggestion:t.text}):s||i.state===u.PU.suggested||this._model.updateAlertState(i.id,{state:u.PU.suggested,suggestion:t.text})})),...this._showOnboardingHint.get()?[this._model.alertStateUpdate.pipe((0,l.h)((e=>u.w.isNative(e.alert.source)&&e.alert.state===u.PU.suggested)),(0,r.M)(this._showOnboardingHint)).subscribe((([e,t])=>t&&this._onOnboardingHintShown()))]:[]]}async _handleAcceptEvent(e,t){e.stopPropagation(),e.preventDefault();const s=this._selectionService.getCurrentSelection();if(!s)return this._log.error(`Failed to perform a replacement for alert ${t.alertId} - selection service didn't find TextRange`);this._model.updateAlertState(t.alertId,{state:u.PU.applied,suggestion:t.text})||this._log.error(`Failed to update #${t.alertId} with {${u.PU.applied}} state, still trying to apply suggestion`);try{await this._replacementService.performReplacement(s,t.text,!1)}catch(e){return this._log.error(`Failed to perform a replacement for alert ${t.alertId}`,e)}}_handleRejectEvent(e,t){this._model.updateAlertState(t.alertId,{state:u.PU.discarded,suggestion:t.text})||this._log.error(`Failed to update #${t.alertId} with {${u.PU.discarded}} state`),e.stopPropagation(),e.preventDefault()}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var V=s(66310);class j{constructor(e,t,s,o=(e.ownerDocument?(0,i.R)(e.ownerDocument,"keydown",{capture:!0}):D.E)){this._textField=e,this._autocompleteModel=t,this._gnar=s,this._keyDown=o,this._log=d.Y.create(j.name),this.model=h.h.create(null),this.close=e=>{this.model.set(null),this._gnar.autocompleteFeedbackFormCloseButtonClick(e)},this.submit=(e,t,s)=>{const i=this.model.get();if(!i)return this._log.error("Failed to submit form feedback - empty state");const{alertId:o,suggestion:r}=i;this._autocompleteModel.updateAlertState(o,{state:u.PU.discarded,suggestion:r,reason:e}),this.model.set(null),this._gnar.autocompleteFeedbackFormSubmitButtonClick(o,e,t,s)},this._subs=[this.model.pipe((0,V.w)((e=>e?this._keyDown:D.E))).subscribe((e=>e.stopPropagation()))]}open(e,t){const s=this._autocompleteModel.getAlertById(e);if(!s||!u.iH.isInteractive(s)){const t=s?`has improper state {${s.state}}`:"not found";return this._log.error(`Failed to open feedback form for alert #${e} - ${t}`)}const i=s.completion.text;if(!i.endsWith(t))return this._log.error(`Failed to open feedback form for alert #${e} - found inconsistency between completion {${i}} and suggestion {${t}} texts`);const o=i.slice(1,-t.length),r=s.context+o;this.model.set({alertId:e,suggestion:t,context:r}),this._textField.blur()}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var G=s(22679),W=s(47422),K=s(12187),z=s(29382);class Y{constructor(e){this._controller=e,this.view=this._controller.model.view((e=>e&&w.createElement(J,{onSumbit:this._controller.submit,onClose:this._controller.close,contextText:e.context,suggestionText:e.suggestion})))}}const q=[["NOT_RELEVANT","Not relevant in the context of the email"],["WRONG_TONE","Not matching my style or tone"],["INCORRECT","Factually incorrect"],["WRONG_GRAMMAR","Wrong grammar or spelling"],["OFFENSIVE","Offensive or inappropriate"],["OTHER","Other"]];const J=e=>{const[t,s]=w.useState(null),[i,o]=w.useState(null);return w.createElement("div",{className:z.container,style:{zIndex:G.oJ}},w.createElement("div",{className:z.box},w.createElement("div",{className:z.close,onClick:()=>e.onClose("topRight")}),w.createElement("div",{className:z.form},w.createElement("div",{className:z.heading},"Feedback"),w.createElement("div",{className:z.explanation},"Select an issue from the list below to submit feedback."),w.createElement("div",{className:z.section},w.createElement("div",{className:z.subheading},"Recent suggestion"),w.createElement("div",{className:z.subject},w.createElement("span",null,"“",e.contextText),w.createElement("span",{className:z.suggestion},e.suggestionText,"”"))),w.createElement("div",{className:z.section},w.createElement("div",{className:z.subheading},"Issue"),w.createElement("div",{className:z.optionGroup},q.map((([e,i])=>w.createElement("div",Object.assign({key:e},(0,K.Sh)(z.option,t===e&&z.checked),{onClick:()=>s(e)}),i))))),w.createElement(W.z,{onChange:e=>o(e),ariaLabel:"Tell us a bit more...",placeholder:"Tell us a bit more...",className:z.textfield})),w.createElement("div",{className:z.footer},w.createElement("div",Object.assign({},(0,K.Sh)(z.button,z.secondary),{onClick:()=>e.onClose("footer")}),"Cancel"),w.createElement("div",Object.assign({},(0,K.Sh)(z.button,z.primary,!t&&z.disable),{onClick:()=>{return t&&e.onSumbit(t,(s=t,q.filter((e=>e[0]===s))[0][1]),null!=i?i:void 0);var s}}),"Submit"))))};var Q=s(76974),Z=s(17343),X=s(2834),ee=s(78674);class te{constructor(e,t,s,o,r){this._textField=e,this._textFieldLayout=t,this._cardController=s,this._suggestionController=o,this._suggestionBehavior=r,this._offByScrollChange=(0,m.T)(this._textFieldLayout.scroll.changes,this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"scroll"):D.E).pipe((0,Z.h)(null)),this._hoverDelayMs=200,this._hovered=(0,m.T)(this._offByScrollChange,this._cardController.cardDismissed).pipe((0,p.O)(null),(0,V.w)((e=>(0,y.aj)(this._suggestionController.rawHoveredSuggestion.pipe((0,X.b)((e=>e&&this.anchorRect.set(e))),(0,a.U)((e=>!!e))),this._cardController.cardHovered).pipe((0,a.U)((([e,t])=>e||t)),(0,x.x)(),(0,ee.b)(this._hoverDelayMs),(0,x.x)(),(0,p.O)(!1))))),this.anchorRect=h.h.create(null),this.hoveredBehavior=this._suggestionBehavior.pipe((0,l.h)((e=>null===e||O.isNative(e))),(0,x.x)(((e,t)=>e&&t?e.alertId===t.alertId&&e.text===t.text:e===t)),(0,V.w)((e=>null===e?(0,Q.of)(null):this._hovered.pipe((0,a.U)((t=>t?{alertId:e.alertId,text:e.text}:null))))),(0,T.O)(new N.X(null)),(0,I.x)())}}var se=s(38194),ie=s(24448),oe=s(17404);class re{constructor(e){this._alertProcessor=e,this._log=d.Y.create(re.name),this._alertsBufferLimit=40,this._alertsBuffer=new ie.P(this._alertsBufferLimit),this._alertStateUpdateSubject=new v.xQ,this.alertStateUpdate=this._alertStateUpdateSubject.asObservable(),this.changes=this._alertProcessor.alerts.changes.pipe((0,l.h)((e=>[e.addedAlerts,e.removedAlerts.map((e=>e.alert)),e.updatedAlerts].some((e=>e.some((e=>oe.S.isAutocompleteAlert(e))))))),(0,a.U)((e=>({addedAlerts:e.addedAlerts.filter(oe.S.isAutocompleteAlert),updatedAlerts:e.updatedAlerts.filter(oe.S.isAutocompleteAlert),removedAlerts:e.removedAlerts.filter((e=>oe.S.isAutocompleteAlert(e.alert)))}))),(0,se.B)()),this._subs=[this.changes.subscribe((e=>{e.removedAlerts.forEach((e=>{this._alertsBuffer.delete(e.id)||this._log.warn(`Failed to delete autocomplete alert #${e.id} from the circular buffer on alert removal`,e.reason)}))}))]}_addAlert(e){const t=this._alertsBuffer.enqueue(e.id);return t&&this._alertProcessor.removeAlert(t),this._alertProcessor.addAlert(e)}addAlert(e){return this._addAlert(e)}updateAlert(e){this._alertsBuffer.delete(e.id)||this._log.warn(`Failed to delete autocomplete alert #${e.id} from the circular buffer while updating it, alert may not exist`),this._addAlert(e)}updateAlertState(e,t){const s=this._alertProcessor.alerts.getAlertById(e);if(!s||s._tag!==oe.b.autocomplete){const t=s?`has unexpected alert type {${s._tag}}`:"doesn't exist";return this._log.error(`Can't update alert #${e} - ${t}`),!1}if([[u.PU.initial,u.PU.preferred],[u.PU.preferred,u.PU.initial],[u.PU.preferred,u.PU.suggested],[u.PU.suggested,u.PU.ignored],[u.PU.ignored,u.PU.suggested],[u.PU.ignored,u.PU.preferred],[u.PU.ignored,u.PU.discarded],[u.PU.suggested,u.PU.applied],[u.PU.suggested,u.PU.discarded],[u.PU.applied,u.PU.suggested]].some((([e,i])=>e===s.state&&i===t.state))){if(this._alertsBuffer.delete(s.id)||this._log.warn(`Failed to delete autocomplete alert #${s.id} from the circular buffer while updating its state`),t.state===u.PU.initial||t.state===u.PU.preferred)this._addAlert({...s,...t});else if(t.state===u.PU.suggested||t.state===u.PU.ignored||t.state===u.PU.applied){const{suggestion:e,...i}=t;if(!("completion"in s)||!s.completion.text.endsWith(e)){const t="completion"in s?`completion text {${s.completion.text}} and suggestion {${e}} mismatch`:"completion field does not exist";return this._log.error(`Can't update alert #${s.id} - ${t}`),!1}const o={...s,...i,completionPosition:s.completion.text.length-e.length};this._addAlert(o),this._alertStateUpdateSubject.next({alert:o,suggestion:e})}else if(t.state===u.PU.discarded){const{suggestion:e,reason:i,...o}=t,r={...s,...o};this._addAlert(r),this._alertStateUpdateSubject.next({alert:r,suggestion:e,reason:i})}}else{if(s.state!==t.state)return this._log.warn(`Ran into inconsistent state changes while updating alert #${s.id} with state {${s.state}} to state {${t.state}}`),!1;this._log.warn(`Tried to update alert #${s.id} with the current alert state {${t.state}}`)}return!0}getAlertById(e){const t=this._alertProcessor.alerts.getAlertById(e);return t&&oe.S.isAutocompleteAlert(t)?t:null}*getAll(){for(const e of this._alertProcessor.alerts.getAll())oe.S.isAutocompleteAlert(e)&&(yield e)}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}class ne{constructor(e,t,s,i){this._mode=e,this._model=t,this._gnar=s,this._onAutocompleteFeedback=i,this._log=d.Y.create(ne.name),this._reporterId=U.iy.create(),this._subs=[this._model.alertStateUpdate.pipe((0,l.h)((e=>u.w.isNative(e.alert.source)))).subscribe((({alert:e,suggestion:t,...s})=>{const i=this._properties(e,t);switch(e.state){case u.PU.applied:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_ACCEPTED",e,t)),e.source===u.w.default?this._gnar.autocompleteSherlockSuggestionAccepted(...i):this._gnar.autocompleteWatsonSuggestionAccepted(...i);case u.PU.discarded:return this._onAutocompleteFeedback({...this._createFeedback("COMPLETION_REJECTED",e,t),...s}),e.source===u.w.default?this._gnar.autocompleteSherlockSuggestionRejected(...i):this._gnar.autocompleteWatsonSuggestionRejected(...i);case u.PU.suggested:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_SHOWN",e,t)),e.source===u.w.default?this._gnar.autocompleteSherlockSuggestionShown(...i):this._gnar.autocompleteWatsonSuggestionShown(...i);case u.PU.ignored:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_IGNORED",e,t)),e.source===u.w.default?this._gnar.autocompleteSherlockSuggestionIgnored(...i):this._gnar.autocompleteWatsonSuggestionIgnored(...i);default:(0,U.vE)(e)}})),this._model.alertStateUpdate.pipe((0,l.h)((e=>e.alert.source===u.w.external))).subscribe((({alert:e,suggestion:t})=>{switch(e.state){case u.PU.applied:return this._gnar.autocompleteLestradeSuggestionAccepted(...this._properties(e,t));case u.PU.discarded:return this._gnar.autocompleteLestradeSuggestionRejected(...this._properties(e,t));case u.PU.suggested:return this._gnar.autocompleteLestradeSuggestionShown(...this._properties(e,t));case u.PU.ignored:return this._gnar.autocompleteLestradeSuggestionIgnored(...this._properties(e,t));default:(0,U.vE)(e)}}))]}_createFeedback(e,t,s){if(!u.w.isNative(t.source)){const e=`Unexpected alert source ${t.source}`;throw this._log.error(e),new Error(e)}const i=t.transformText+t.completion.text.slice(0,1),o=t.completion.text.slice(1);return o.endsWith(s)||this._log.error(`Completion text {${t.completion.text}} and suggestion {${s}} mismatch, still trying to build a feedback for alert #${t.id}`),{type:e,alertId:t.completion.id.toString(),begin:t.transformRange.start,end:t.transformRange.end+1+o.length,context:i,before:o.slice(0,-s.length),after:s,text:t.context,pname:t.completion.patternName}}_properties(e,t){const[s,...i]=t.split(" "),[o]=(e.transformText+e.completion.text).slice(0,-t.length).split(" ").reverse(),r=i.filter((e=>0!==e.length)).length+s.length/Math.max(s.length+o.length,1);return[this._reporterId,this._mode.get()===u.mv.enabledSolitary||this._mode.get()===u.mv.benchmarking?"solitary":"mixed",e.completion.patternName,`${this._reporterId.slice(0,8)}-${e.completion.id}`,t.length,r]}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}class le{constructor(e,t){this._textField=e,this._mouseData=t,this._suggestionElement=h.h.create(null),this.onSuggestionTextRefUpdate=e=>this._suggestionElement.set(e),this.rawHoveredSuggestion=this._mouseData.pipe((0,r.M)(this._suggestionElement),(0,a.U)((([{client:e},t])=>{if(t&&e&&this._onTopOfElement(e)){const s=Array.from(t.getClientRects()).map((e=>$.Pf.create(e)));return s.find((t=>$.UL.contains(e,t)))||null}return null})))}_onTopOfElement(e){const{ownerDocument:t}=this._textField,s=t&&t.elementFromPoint(e.left,e.top);return this._textField.contains(s)}}var ae=s(5739),ce=s(59070);class de{constructor(e,t,s,i,o){this._controller=e,this._textFieldLayout=t,this._hoverProvider=s,this._suggestionBehavior=i,this._showOnboardingHint=o,this._isHovered=this._hoverProvider.hoveredBehavior.pipe((0,a.U)((e=>!!e))),this.view=this._suggestionBehavior.pipe((0,p.O)(null),(0,r.M)(this._showOnboardingHint),(0,a.U)((([e,t])=>e&&O.isNative(e)?w.createElement(he,{key:"autocomplete-suggestion",spec:e,rect:this._textFieldLayout.rect.getCurrent(),tabHint:t,isHovered:this._isHovered,onTextRefUpdate:this._controller.onSuggestionTextRefUpdate}):null)))}}const he=({spec:e,rect:t,tabHint:s,isHovered:i,onTextRefUpdate:o})=>{const r=e.offsetRect.left+e.offsetRect.width,n=e.styles.lineHeight,l=n.endsWith("px")?parseFloat(n):null,c=l&&l<e.offsetRect.height?l:"normal";return w.createElement("div",{className:ce.container,style:{top:e.offsetRect.top,width:t.size.width,...e.styles,lineHeight:c}},w.createElement("div",{className:ce.offset,style:{width:r}},"|"),w.createElement("span",{className:ce.completion,"data-grammarly-part":"completion",style:{lineHeight:c}},w.createElement(ae.F.span,Object.assign({},(0,K.Sh)(ce.text,i.pipe((0,a.U)((e=>e&&ce.hovered)))),{mount:o}),e.text),w.createElement("span",{className:s?ce.tab:ce.logo},"|")))};var ue;!function(e){e.gmail="mail.google.com",e.yahoo="mail.yahoo.com",e.outlook="^outlook.(live|office|office365).com$"}(ue||(ue={}));class ge{constructor(e,t,s,i,o,r,n,l,a,c,d,h,u,_,m,p,v){this._domain=e,this._mode=t,this._showOnboardingHint=s,this._textField=i,this._gnar=o,this._textObserver=r,this._mouseData=n,this._textFieldLayout=l,this._geometryLayout=a,this._geometryProvider=c,this._alertProcessor=d,this._selectionService=h,this._replacementService=u,this._rpcClient=_,this._disableAutocomplete=m,this._onAutocompleteFeedback=p,this._onOnboardingHintShown=v,this._caretService=new F(this._textObserver,this._selectionService),this._model=new re(this._alertProcessor),this._service=new M(this._mode,this._textField,this._textObserver,this._geometryLayout,this._geometryProvider,this._caretService,this._model),this._controller=new L(this._textField,this._selectionService,this._replacementService,this._model,this._service,this._showOnboardingHint,this._onOnboardingHintShown),this._formController=new j(this._textField,this._model,this._gnar),this._cardController=new b(this._mode,(()=>{this._disableAutocomplete(),this._gnar.autocompleteFeatureToggleClick("inline","off")}),((e,t)=>{this._formController.open(e,t),this._gnar.autocompleteFeedbackButtonClick()})),this._suggestionController=new le(this._textField,this._mouseData),this._hoverProvider=new te(this._textField,this._textFieldLayout,this._cardController,this._suggestionController,this._service.suggestionBehavior),this._disposables=[new k(this._mode,this._textObserver,this._alertProcessor,this._rpcClient,this._caretService,this._model),new ne(this._mode,this._model,this._gnar,this._onAutocompleteFeedback),...this._domain===ue.gmail?[new g(this._mode,this._textField,this._textObserver,this._caretService,this._service,this._model)]:[],...null!==this._domain.match(ue.outlook)?[new f(this._mode,this._textField,this._textObserver,this._caretService)]:[]],this.formView=new Y(this._formController),this.suggestionView=new de(this._suggestionController,this._textFieldLayout,this._hoverProvider,this._service.suggestionBehavior,this._showOnboardingHint),this.cardView=new C(this._textField,this._cardController,this._hoverProvider)}onAutocompleteMessage(e,t,s){u.mv.nativeEnabled(this._mode.get())&&u.iH.create(e,u.w.default,s,t).forEach((e=>this._model.addAlert(e)))}initRpcClient(){this._rpcClient.get()}dispose(){this._disposables.forEach((e=>e.dispose())),this._model.dispose(),this._controller.dispose(),this._formController.dispose()}}},47422:(e,t,s)=>{s.d(t,{z:()=>a});var i=s(27378),o=s(84488),r=s(68370),n=s(51897),l=s.n(n);const a=({placeholder:e,onChange:t,ariaLabel:s,className:n})=>{const[a,c]=i.useState("");return i.useEffect((()=>{t(a)}),[a]),i.createElement(o.G,{"data-grammarly-part":"ui-kit-textbox",className:n,style:{width:"100%",height:"100%"}},i.createElement(r.b,null,l().__css),i.createElement("div",{role:"textbox",className:l().textBox,contentEditable:!0,onInput:e=>c(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":s}))}},25682:(e,t,s)=>{var i=s(93476)((function(e){return e[1]}));i.push([e.id,"._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),i.locals={textBox:"_380Y1-textBox"},e.exports=i},37985:e=>{e.exports={card:"_2VdJK",menu:"_10J2s",disable:"_2rVWc",item:"_339gh",heading:"_1cNHI",text:"rMO28"}},29382:e=>{e.exports={container:"_3xLrc",box:"oYLSM",close:"_3ollb",form:"_3pZDT",heading:"ZuV4J",subheading:"_3CwIH",explanation:"t3LG6",section:"_1g3CN",subject:"_2gQ1e",suggestion:"_2AivM",optionGroup:"_1G8rc",option:"_1ldhU",checked:"jSBR5",textfield:"_2MCi",footer:"_1-sdI",button:"dbgfG",primary:"_28oJG",disabled:"_2uHvH",secondary:"PBqex"}},59070:e=>{e.exports={container:"_2_UaD",offset:"_1TRbW",completion:"_2ODCa",text:"DtLNE",hovered:"_3aVja",tab:"_2lbdR",logo:"_3RieT"}},16118:(e,t,s)=>{s.d(t,{G:()=>r});var i=s(59312),o=s(98036);function r(){return function(e){return e.lift(new n)}}var n=function(){function e(){}return e.prototype.call=function(e,t){return t.subscribe(new l(e))},e}(),l=function(e){function t(t){var s=e.call(this,t)||this;return s.hasPrev=!1,s}return i.__extends(t,e),t.prototype._next=function(e){var t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)},t}(o.L)}}]);