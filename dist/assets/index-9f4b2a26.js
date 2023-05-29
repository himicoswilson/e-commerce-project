import{G as b,d as W,r as m,H as F,c as X,I as Y,z as Z,J as ee,e as s,o as U,f as w,g as t,w as l,j as C,h as d,m as N,t as z,K as V,x as ae,L as p,S as te,_ as le}from"./index-bb7417ef.js";const oe=(i,r)=>b.get(`/admin/product/baseTrademark/${i}/${r}`),re=i=>i.id?b.put("/admin/product/baseTrademark/update",i):b.post("/admin/product/baseTrademark/save",i),ne=i=>b.delete(`/admin/product/baseTrademark/remove/${i}`),se={style:{height:"100px",display:"flex","align-items":"center","justify-content":"center"}},de=["src"],ie=["src"],ce=W({__name:"index",setup(i){let r=m(parseInt(F("trademarkPageNo"))),u=m(3),y=m([]),k=m(0),c=m(!1),n=X({tmName:"",logoUrl:""}),_=m();const g=async(e=1)=>{r.value=e;let o=await oe(r.value,u.value);o.code==200&&(y.value=o.data.records,k.value=o.data.total)},A=()=>{g()},x=Y(()=>n.id?"修改品牌":"添加品牌"),P=()=>{var e;c.value=!0,n.tmName="",n.logoUrl="",delete n.id,(e=_.value)==null||e.clearValidate()},S=e=>{var o;(o=_.value)==null||o.clearValidate(),c.value=!0,Object.assign(n,e)},h=()=>{c.value=!1},j=e=>e.type!=="image/jpeg"&&e.type!=="image/png"&&e.type!=="image/jif"?(p.error("品牌标识必须是JPG/PNG/GIF格式"),!1):e.size/1024/1024>2?(p.error("品牌标识大小不能超过2MB"),!1):!0,q=e=>{n.logoUrl=e.data,_.value.clearValidate("logoUrl")},B=async()=>{try{await _.value.validate(),(await re(n)).code==200?(h(),p.success(x.value+"成功"),g(n.id?r.value:Math.floor(k.value/u.value)+1)):(h(),p.error(x.value+"失败"))}catch{}};Z(r,e=>{te("trademarkPageNo",e)}),ee(()=>{g(r.value)});const G={tmName:[{min:2,max:15,message:"品牌名称至少两个字符",trigger:"blur"},{required:!0,message:"请输入品牌名称",trigger:"blur"}],logoUrl:[{required:!0,message:"请上传品牌标识",trigger:"blur"}]},H=async e=>{(await ne(e.id)).code==200?(p.success("删除成功"),g(y.value.length>1?r.value:r.value-1)):p.error("删除失败")};return(e,o)=>{const f=s("el-button"),v=s("el-table-column"),M=s("el-popconfirm"),O=s("el-table"),D=s("el-pagination"),I=s("el-card"),E=s("el-input"),T=s("el-form-item"),R=s("Plus"),$=s("el-icon"),J=s("el-upload"),K=s("el-form"),L=s("el-dialog");return U(),w("div",null,[t(I,{class:"box-card",shadow:"hover"},{default:l(()=>[t(f,{type:"primary",icon:"Plus",onClick:P},{default:l(()=>[C(" 添加品牌 ")]),_:1}),t(O,{style:{margin:"20px 0"},border:"",data:d(y)},{default:l(()=>[t(v,{label:"序号",width:"80px",align:"center"},{default:l(({row:a})=>[N("div",null,z(a.id),1)]),_:1}),t(v,{label:"品牌名称",align:"center"},{default:l(({row:a})=>[N("div",se,z(a.tmName),1)]),_:1}),t(v,{label:"品牌LOGO",align:"center"},{default:l(({row:a})=>[N("img",{src:a.logoUrl,style:{width:"100px"},onerror:"this.src='http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKC6AQ-j2AAAb72A3EO0942.jpg'"},null,8,de)]),_:1}),t(v,{label:"品牌操作",align:"center"},{default:l(({row:a})=>[t(f,{type:"warning",icon:"edit",onClick:Q=>S(a)},null,8,["onClick"]),t(M,{title:`是否要删除${a.tmName}品牌呢？`,width:"230px",icon:"Warning",onConfirm:Q=>H(a)},{reference:l(()=>[t(f,{type:"danger",icon:"delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),t(D,{"current-page":d(r),"onUpdate:currentPage":o[0]||(o[0]=a=>V(r)?r.value=a:r=a),"page-size":d(u),"onUpdate:pageSize":o[1]||(o[1]=a=>V(u)?u.value=a:u=a),"page-sizes":[3,5,7,9],background:!0,layout:"prev, pager, next, jumper, ->, sizes, total",total:d(k),onCurrentChange:g,onSizeChange:A},null,8,["current-page","page-size","total"])]),_:1}),t(L,{modelValue:d(c),"onUpdate:modelValue":o[3]||(o[3]=a=>V(c)?c.value=a:c=a),title:d(x),style:{width:"450px","border-radius":"10px"}},{footer:l(()=>[t(f,{onClick:h},{default:l(()=>[C("取消")]),_:1}),t(f,{type:"primary",onClick:B},{default:l(()=>[C("确定")]),_:1})]),default:l(()=>[t(K,{style:{"margin-left":"50px"},model:d(n),rules:G,ref_key:"formRef",ref:_},{default:l(()=>[t(T,{label:"品牌名称",style:{width:"216px"},prop:"tmName"},{default:l(()=>[t(E,{placeholder:"请输入品牌的名称",modelValue:d(n).tmName,"onUpdate:modelValue":o[2]||(o[2]=a=>d(n).tmName=a)},null,8,["modelValue"])]),_:1}),t(T,{label:"品牌标识",prop:"logoUrl"},{default:l(()=>[t(J,{class:"avatar-uploader",action:"/api/admin/product/fileUpload","show-file-list":!1,"on-success":q,"before-upload":j},{default:l(()=>[d(n).logoUrl?(U(),w("img",{key:0,src:d(n).logoUrl,class:"avatar"},null,8,ie)):(U(),ae($,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[t(R)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const me=le(ce,[["__scopeId","data-v-44b948ac"]]);export{me as default};
