(self.webpackChunk=self.webpackChunk||[]).push([[450],{7417:(e,t,s)=>{s.d(t,{z:()=>l});var o=s(5872),n=s(88326),i=s(27378),a=s(61007);s(54817);const r=({className:e})=>i.createElement("div",{className:`gr_-spinner ${e}`},i.createElement("div",{className:"gr_-bounce1"}),i.createElement("div",{className:"gr_-bounce2"}),i.createElement("div",{className:"gr_-bounce3"}));class l extends i.Component{constructor(){super(...arguments),this.onClick=e=>{e.preventDefault(),this.props.loading||this.props.onClick&&this.props.onClick(e)}}render(){const{loading:e,cls:t}=this.props,s=e?"":this.props.text,l=this.props.styles||{width:290},c=(0,o.cs)({[a.buttonContainer]:!0,[a[t]]:void 0!==t,[a.loading]:e});return i.createElement("div",{className:c,style:l},e&&i.createElement(r,{className:a.buttonSpinner}),i.createElement(n.M,{clickHandler:this.onClick,dataGrammarlyPart:this.props.dataGrammarlyPart},i.createElement("button",{type:"button",style:l,className:a.button},s)))}}},55171:(e,t,s)=>{s.r(t),s.d(t,{UnsupportedPopupDialog:()=>v});var o=s(44577),n=s(26273),i=s(57271),a=s(64408),r=s(37896),l=s(27378),c=s(41263),d=s(6318),p=s(2780),m=s(68383),h=s(5872),u=s(7417),g=s(92783),C=s(31542),_=s(73392);class w extends l.Component{constructor(){super(...arguments),this.state={hide:!1},this.onClick=()=>{this.props.createDocument(this.props.text),this.onClose()},this.onComponentClick=e=>{(0,h.Ku)(e.target,`.${_.content}, .${_.content} *`)||this.onClose(e)},this.onClose=e=>{e&&e.stopPropagation(),this.setState({hide:!0});const t=(0,C.findDOMNode)(this.refs["dialog-el"]);t&&t.addEventListener("animationend",(()=>this.props.onClose()))}}render(){const e=(0,h.cs)({[_.dialog]:!0,[_.hide]:this.state.hide,[_.windows]:(0,g.ED)()}),t=`Grammarly’s pop-up editor\nisn’t available on ${this.props.domain}`,s=this.props.errorMessage?this.props.errorMessage:t;let o=0;const n=s.split("\n").reduce(((e,t,s)=>(0!==s&&e.push(l.createElement("br",{key:o++})),e.push(l.createElement("span",{key:o++},t)),e)),[]);return l.createElement("div",{onClick:this.onComponentClick,"data-grammarly-part":"unsupported-dialog",ref:"dialog-el",className:e},l.createElement("div",{className:_.content},l.createElement("div",{className:_.viewContainer},l.createElement("div",{className:_.title},n),l.createElement(u.z,{onClick:this.onClick,text:"Open on grammarly.com"}),l.createElement("div",{className:_.text},"This will open a new tab."))),l.createElement("div",{className:_.btnClose,onClick:this.onClose}))}}class v extends((0,r.qH)(o.u)){constructor({doc:e,text:t,errorMessage:s}){super(),this.view=null,this.onKey=e=>{(0,r.rw)(e)===r.DG&&this.onClose()},this.createDocument=e=>{a.emitBackground("create-document",e)},this.onClose=()=>{this.emit("hide"),this.remove()},this.component=()=>(l.useEffect((()=>((0,n.o)(this.doc.defaultView,"keydown",this.onKey,!1),()=>(0,n.E)(this.doc.defaultView,"keydown",this.onKey,!1))),[]),l.createElement(c.L,{chunkName:"unsupportedPopupDialog"},l.createElement(w,{onClose:this.onClose,createDocument:this.createDocument,domain:(0,i.ge)(),text:this.text,errorMessage:this.errorMessage}))),this.doc=e,this.text=t,s&&(this.errorMessage=s),this.createView()}createView(){if(!this.view){const e=this.component;this.view=d.VB.get({monitorAs:"unsupported-dialog"}).inject(p.EM.fromDocument(this.doc,"grammarly-unsupported"),p.zs.appendChild(this.doc.documentElement),m.G7.showWhenLoaded(l.createElement(e,null)))}}remove(){this.view&&(this.view.dispose(),this.view=null)}}},61007:e=>{e.exports={buttonContainer:"zh9NK",form:"_1Fp6z",buttonSpinner:"_2ox-M",button:"w4BE8",loading:"II5Au",onboarding:"_3f6zz",disable:"_26Laa"}},73392:e=>{e.exports={dialog:"_1pv0d",gr__dialog_appear:"_9MtYZ",viewContainer:"_3VKX8",view:"qxHt4",windows:"_2Zb-H",footer:"_2wggs",hide:"_20zm8",gr__dialog_disappear:"YhuP6",content:"KmdgA",gr__dialog_content_disappear:"_1xlTD",gr__dialog_content_appear:"_2NwYV",title:"_1ikwu",text:"_2kmPa",label:"oV96x",btnClose:"_25Iy8"}},54817:()=>{}}]);