(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e,a,t){e.exports={profile:"Profile_profile__1jRf4",description:"Profile_description__1Rh96",avatar:"Profile_avatar__1FSD-",name:"Profile_name__1_Kmw",tag:"Profile_tag__2tlnH",location:"Profile_location__uVXlF",stats:"Profile_stats__3b4mJ",statsItem:"Profile_statsItem__3K5Bm",label:"Profile_label__3slvl",quantity:"Profile_quantity__1cF4v"}},function(e,a,t){e.exports={table:"TransactionHistory_table__3Vc6f",thead:"TransactionHistory_thead__cLEgF",th:"TransactionHistory_th__6urP8",td:"TransactionHistory_td__oY8rH",itemTr:"TransactionHistory_itemTr__3vOjB"}},function(e,a,t){e.exports={stats:"Stats_stats__3RI-O",title:"Stats_title__i9iL6",list:"Stats_list__sQsLU",item:"Stats_item__2b5vp",label:"Stats_label__Zk1PB",percentage:"Stats_percentage__3rltf"}},function(e,a,t){e.exports={status:"FriendListItem_status__YJRDj",statusOnline:"FriendListItem_statusOnline__2Yvyn",friendAvatar:"FriendListItem_friendAvatar__1aWS7"}},function(e,a,t){e.exports={friendlist:"FriendList_friendlist__7pwQt",item:"FriendList_item__3QodU"}},,,function(e,a,t){e.exports={app:"App_app__c9PFr"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(20)},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(8),i=t.n(r),c=t(9),l=t.n(c),m=t(10),o=t(11),d=t(1),u=t.n(d),p=t(2),f=t.n(p),_=function(e){var a=e.user,t=a.name,n=a.tag,r=a.location,i=a.avatar,c=a.stats,l=c.followers,m=c.views,o=c.likes;return s.a.createElement("div",{className:f.a.profile},s.a.createElement("div",{className:f.a.description},s.a.createElement("img",{src:i,alt:"user avatar",className:f.a.avatar}),s.a.createElement("p",{className:f.a.name},t),s.a.createElement("p",{className:f.a.tag},"@",n),s.a.createElement("p",{className:f.a.location},r)),s.a.createElement("ul",{className:f.a.stats},s.a.createElement("li",{className:f.a.statsItem},s.a.createElement("span",{className:f.a.label},"Followers"),s.a.createElement("span",{className:f.a.quantity},l)),s.a.createElement("li",{className:f.a.statsItem},s.a.createElement("span",{className:f.a.label},"Views"),s.a.createElement("span",{className:f.a.quantity},m)),s.a.createElement("li",{className:f.a.statsItem},s.a.createElement("span",{className:f.a.label},"Likes"),s.a.createElement("span",{className:f.a.quantity},o))))};_.T={user:u.a.shape({name:u.a.string.isRequired,tag:u.a.string.isRequired,location:u.a.string.isRequired,avatar:u.a.string.isRequired,stats:u.a.shape({followers:u.a.number.isRequired,views:u.a.number.isRequired,likes:u.a.number.isRequired}).isRequired}).isRequired};var b=_,y=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],v=t(4),E=t.n(v),g=function(e){var a=e.title,t=e.stats.map((function(e){var a=e.id,t=e.label,n=e.percentage;return s.a.createElement("li",{key:a,className:E.a.item},s.a.createElement("span",{className:E.a.label},t),s.a.createElement("span",{className:E.a.percentage},"".concat(n,"%")))}));return s.a.createElement("section",{className:E.a.stats},s.a.createElement("h2",{className:E.a.title},a),s.a.createElement("ul",{className:E.a.list},t))};g.defaultProps={title:""},g.T={title:u.a.string,stats:u.a.arrayOf(u.a.shape({id:u.a.string.isRequired,label:u.a.string.isRequired,percentage:u.a.number.isRequired}).isRequired).isRequired};var w=g,N=t(12),h=t(6),R=t.n(h),q=t(5),O=t.n(q),P=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:n?O.a.statusOnline:O.a.status}),s.a.createElement("img",{src:a,className:O.a.friendAvatar,alt:t}),s.a.createElement("p",null,t))};P.defaultProps={alt:"avatar image"},P.T={avatar:u.a.string,isOnline:u.a.string.isRequired,name:u.a.string.isRequired};var T=P,L=function(e){var a=e.friends.map((function(e){var a=e.avatar,t=e.name,n=e.status,r=e.id,i=e.isOnline;return s.a.createElement("li",{key:r,className:R.a.item},s.a.createElement(T,{status:n,avatar:a,name:t,id:r,isOnline:i}))}));return s.a.createElement("ul",{className:R.a.friendlist},a)},j=t(3),k=t.n(j),F=function(e){var a=e.items.map((function(e){var a=e.id,t=e.type,n=e.amount,r=e.currency;return s.a.createElement("tr",{key:a,className:k.a.itemTr},s.a.createElement("td",{className:k.a.td},t),s.a.createElement("td",{className:k.a.td},n),s.a.createElement("td",{className:k.a.td},r))}));return s.a.createElement("table",{className:k.a.table},s.a.createElement("thead",{className:k.a.thead},s.a.createElement("tr",null,s.a.createElement("th",{className:k.a.th},"Type"),s.a.createElement("th",null,"Amount"),s.a.createElement("th",null,"Currency"))),s.a.createElement("tbody",null,a))},S=function(){return s.a.createElement("div",{className:l.a.app},s.a.createElement(b,{user:m}),s.a.createElement(w,{title:"Upload stats",stats:y}),s.a.createElement(L,{friends:o}),s.a.createElement(F,{items:N}))};i.a.render(s.a.createElement(S,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.a4c5fbf9.chunk.js.map