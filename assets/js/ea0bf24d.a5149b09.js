"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5644],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=o,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},p="Integration",l={unversionedId:"integration",id:"integration",title:"Integration",description:"If you want to use Wasm in your own app, here is how you can get this working",source:"@site/docs/02-integration.md",sourceDirName:".",slug:"/integration",permalink:"/docs/1.0/integration",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-integration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Sudo Execution",permalink:"/docs/1.0/smart-contracts/sudo"},next:{title:"Idea behind an Actor Model",permalink:"/docs/1.0/actor-model/idea"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Trial",id:"quick-trial",level:2},{value:"Integrating wasmd",id:"integrating-wasmd",level:2},{value:"As an external module",id:"as-an-external-module",level:3},{value:"Copied into your app",id:"copied-into-your-app",level:3},{value:"Adding custom hooks",id:"adding-custom-hooks",level:2},{value:"Calling contracts from native code",id:"calling-contracts-from-native-code",level:3},{value:"Extending the Contract Interface",id:"extending-the-contract-interface",level:3},{value:"Calling into the SDK",id:"calling-into-the-sdk",level:3},{value:"Wiring it all together",id:"wiring-it-all-together",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration"},"Integration"),(0,r.kt)("p",null,"If you want to use Wasm in your own app, here is how you can get this working\nquickly and easily. First, check to make sure you fit the pre-requisites,\nthen integrate the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," module as described below, and finally, you\ncan add custom messages and queries to your custom Go/SDK modules, exposing\nthem to any chain-specific contract."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The pre-requisites of integrating ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," into your custom app is to be using\na compatible version of the Cosmos SDK, and to accept some limits to the hardware it runs on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"wasmd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Cosmos SDK"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.24"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.45.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.23"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.45.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.22"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.45.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.21"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.19"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.18"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.17"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.42.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.15"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.41.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.14"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.40.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.13"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.40.0-rc3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.40.0-rc3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.11"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.39.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.39.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.38.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.38.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.38.3")))),(0,r.kt)("p",null,"We currently only support Intel/AMD64 CPUs and OSX or Linux. For Linux, the standard build\ncommands work for ",(0,r.kt)("inlineCode",{parentName:"p"},"glibc")," systems (Ubuntu, Debian, CentOS, etc). If you wish to compile\nfor a ",(0,r.kt)("inlineCode",{parentName:"p"},"muslc")," based system (like alpine), you need to compile a static library wasmvm locally\nand compile go with the ",(0,r.kt)("inlineCode",{parentName:"p"},"muslc")," build tag. Or just use the ",(0,r.kt)("a",{parentName:"p",href:"./Dockerfile"},"Dockerfile"),",\nwhich builds a static go binary in an alpine system."),(0,r.kt)("p",null,"This limit comes from the Rust dll we use to run the wasm code, which comes\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmvm")),". There are open issues\nfor adding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm/issues/53"},"ARM support"),", and\nadding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm/issues/28"},"Windows support"),".\nHowever, these issues are not high on the roadmap and unless you are championing\nthem, please count on the current limits for the near future."),(0,r.kt)("h2",{id:"quick-trial"},"Quick Trial"),(0,r.kt)("p",null,"The simplest way to try out CosmWasm is simply to run ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," out of the box,\nand focus on writing, uploading, and using your custom contracts. There is\nplenty that can be done there, and lots to learn."),(0,r.kt)("p",null,"Once you are happy with it and want to use a custom Cosmos SDK app,\nyou may consider simply forking ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),". ",(0,r.kt)("em",{parentName:"p"},"I highly advise against this"),".\nYou should try one of the methods below."),(0,r.kt)("h2",{id:"integrating-wasmd"},"Integrating wasmd"),(0,r.kt)("h3",{id:"as-an-external-module"},"As an external module"),(0,r.kt)("p",null,"The simplest way to use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," is just to import ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," and wire it up\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),".  You now have access to the whole module and your custom modules\nrunning side by side. (But the CosmWasm contracts will only have access\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"bank")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"staking"),"... more below on ",(0,r.kt)("a",{parentName:"p",href:"#Adding-Custom-Hooks"},"customization"),")."),(0,r.kt)("p",null,"The requirement here is that you have imported the standard SDK modules\nfrom the Cosmos SDK, and enabled them in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),". If so, you can just look\nat ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/master/app/app.go#"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmd/app/app.go")),"\nfor how to do so (just search there for lines with ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," also comes with a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"ante handler")," that adds the TX position in the block into the context\nand passes it to the contracts. In order to support this feature you would need to add our custom\nante handler into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ante handler chain")," as in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/master/app/ante.go"},(0,r.kt)("inlineCode",{parentName:"a"},"app/ante.go"))),(0,r.kt)("h3",{id:"copied-into-your-app"},"Copied into your app"),(0,r.kt)("p",null,"Sometimes, however, you will need to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," into your app. This should\nbe in limited cases and makes upgrading more difficult, so please take the\nabove path if possible. This is required if you have either disabled some key\nSDK modules in your app (eg. using PoA not staking and need to disable those\ncallbacks and feature support), or if you have copied in the core ",(0,r.kt)("inlineCode",{parentName:"p"},"x/*")," modules\nfrom the Cosmos SDK into your application and customized them somehow."),(0,r.kt)("p",null,"In either case, your best approach is to copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," module from the\nlatest release into your application. Your goal is to make ",(0,r.kt)("strong",{parentName:"p"},"minimal changes"),"\nin this module, and rather add your customizations in a separate module.\nThis is due to the fact that you will have to copy and customize ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm"),"\nfrom upstream on all future ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," releases, and this should be as simple\nas possible."),(0,r.kt)("p",null,"If, for example, you have forked the standard SDK libs, you just want to\nchange the imports (from eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/x/bank")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"github.com/YOUR/APP/x/bank"),"), and adjust any calls if there are compiler\nerrors due to differing APIs (maybe you use Decimals not Ints for currencies?)."),(0,r.kt)("p",null,"By the end of this, you should be able to run the standard CosmWasm contracts\nin your application, alongside all your custom logic."),(0,r.kt)("h2",{id:"adding-custom-hooks"},"Adding custom hooks"),(0,r.kt)("p",null,'Once you have gotten this integration working and are happy with the\nflexibility it offers you, you will probably start wishing for deeper\nintegration with your custom SDK modules. "It sure is nice to have custom\ntokens with a bonding curve from my native token, but I would love\nto trade them on the exchange I wrote as a Go module. Or maybe use them\nto add options to the exchange."'),(0,r.kt)("p",null,"At this point, you need to dig down deeper and see how you can add this\npower without forking either CosmWasm or ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),"."),(0,r.kt)("h3",{id:"calling-contracts-from-native-code"},"Calling contracts from native code"),(0,r.kt)("p",null,"This is perhaps the easiest part. Let's say your native exchange module\nwants to call into a token that lives as a CosmWasm module. You need to\npass the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm.Keeper")," into your ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange.Keeper"),". If you know the format\nfor sending messages and querying the contract (exported as JSON schema\nfrom each contract), and have a way of configuring addresses of supported\ntoken contracts, your exchange code can simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm.Keeper.Execute"),"\nwith a properly formatted message to move funds, or ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm.Keeper.SmartQuery"),"\nto check balances."),(0,r.kt)("p",null,"If you look at the unit tests in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm/keeper"},(0,r.kt)("inlineCode",{parentName:"a"},"x/wasm/keeper")),",\nit should be pretty straightforward."),(0,r.kt)("h3",{id:"extending-the-contract-interface"},"Extending the Contract Interface"),(0,r.kt)("p",null,"If you want to let the contracts access your native modules, the first\nstep is to define a set of Messages and Queries that you want to expose,\nand then add them as ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg::Custom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryRequest::Custom"),"\nvariants. You can see an example of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/terra-contracts/tree/master/packages/bindings"},"bindings for Terra"),"."),(0,r.kt)("p",null,"Once you have those bindings, use them to build a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/terra-contracts/tree/master/contracts/maker"},"simple contact using much of the API"),".\nDon't worry too much about the details, this should be usable, but mainly\nyou will want to upload it to your chain and use it for integration tests\nwith your native Cosmos SDK modules. Once that is solid, then add more\nand more complex contracts."),(0,r.kt)("p",null,"You will then likely want to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"mocks")," package so you can provide\nmocks for the functionality of your native modules when unit testing\nthe contracts (provide static data for exchange rates when your contracts\nquery it). You can see an example of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/terra-contracts/tree/master/packages/mocks"},"mocks for Terra contracts"),"."),(0,r.kt)("p",null,"What these three steps provide is basically a chain-specific extension to the CosmWasm contract SDK.\nAny CosmWasm contract can import your library (bindings and mocks) and easily get started using\nyour custom, chain-specific extensions just as easily as using the standard CosmWasm interfaces.\nWhat is left is actually wiring them up in your chain so they work as desired."),(0,r.kt)("p",null,"Note, in order to ensure that no one tries to run the contracts on an unsupported chain,\nyou will want to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"requires_XYZ")," directive in your ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings")," library, this will\nmean that only blockchain apps that explicitly declare their support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"XYZ")," extensions\n(please rename XYZ to your project name) will allow the contract to be uploaded, and others\nget error messages upon upload, not while running a critical feature later on.\nYou just need to add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/terra-contracts/blob/master/packages/bindings/src/lib.rs#L13-L16"},"a line like this"),"\nto your binding library to add the requirement to any contract that imports your ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings")," lib."),(0,r.kt)("h3",{id:"calling-into-the-sdk"},"Calling into the SDK"),(0,r.kt)("p",null,"Before I show how this works, I want to remind you, that if you have copied ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm"),",\nplease ",(0,r.kt)("strong",{parentName:"p"},"do not make these changes to ",(0,r.kt)("inlineCode",{parentName:"strong"},"x/wasm")),"."),(0,r.kt)("p",null,"We will add a new module, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"x/contracts"),", that will contain custom\nbindings between CosmWasm contracts and your native modules. There are two entry points\nfor you to use. The first is\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/query_plugins.go#L35"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomQuerier")),",\nwhich allows you to handle your custom queries. The second is\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/handler_plugin.go#L30"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomEncoder")),"\nwhich allows you to convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg::Custom(YourMessage)")," types to ",(0,r.kt)("inlineCode",{parentName:"p"},"[]sdk.Msg")," to be dispatched."),(0,r.kt)("p",null,"Writing stubs for these is rather simple. You can look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"reflect_test.go")," file to see this in action.\nIn particular, here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/reflect_test.go#L355-L385"},"we define a ",(0,r.kt)("inlineCode",{parentName:"a"},"CustomQuerier")),",\nand here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/reflect_test.go#L303-L353"},"we define a ",(0,r.kt)("inlineCode",{parentName:"a"},"CustomHandler")),".\nThis code is responsible to take ",(0,r.kt)("inlineCode",{parentName:"p"},"json.RawMessage")," from the raw bytes serialized from your custom types in rust and parsing it into\nGo structs. Then take these go structs and properly convert them for your custom SDK modules."),(0,r.kt)("p",null,"You can look at the implementations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking")," module to see how to build these for non-trivial\ncases, including passing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keeper")," via a closure. Here we\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/handler_plugin.go#L114-L192"},"encode staking messages"),".\nNote that withdraw returns 2 messages, which is an option you can use if needed to translate into native messages.\nWhen we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/x/wasm/internal/keeper/query_plugins.go#L109-L172"},"handle staking queries"),"\nwe take in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Keeper in the closure")," and dispatch the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryRequest")," from the contract to the native ",(0,r.kt)("inlineCode",{parentName:"p"},"Keeper")," interface,\nthen encodes a response. When defining the return types, note that for proper parsing in the Rust contract, you\nshould properly name the JSON fields and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"omitempty")," keyword if Rust expects ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<T>"),". You must also use\n",(0,r.kt)("inlineCode",{parentName:"p"},"omitempty")," and pointers for all fields that correspond to a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),", so exactly one field is serialized."),(0,r.kt)("h3",{id:"wiring-it-all-together"},"Wiring it all together"),(0,r.kt)("p",null,"Once you have written and tested these custom callbacks for your module, you need to enable them in your application.\nThe first step is to write an integration test with a contract compiled with your custom SDK to ensure it works properly,\nthen you need to configure this in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),"."),(0,r.kt)("p",null,"For the test cases, you must\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/ade03a1d39a9b8882e9a1ce80572d39d57bb9bc3/x/wasm/internal/keeper/reflect_test.go#L52"},"define the supported feature set"),"\nto include your custom name (remember ",(0,r.kt)("inlineCode",{parentName:"p"},"requires_XYZ")," above?). Then, when creating ",(0,r.kt)("inlineCode",{parentName:"p"},"TestInput"),",\nyou can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/ade03a1d39a9b8882e9a1ce80572d39d57bb9bc3/x/wasm/internal/keeper/reflect_test.go#L52"},"pass in your custom encoder and querier"),".\nRun a few tests with your compiled contract, ideally exercising the majority of the interfaces to ensure that all parsing between the contract and\nthe SDK is implemented properly."),(0,r.kt)("p",null,"Once you have tested this and are happy with the results, you can wire it up in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),".\nJust edit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.8.0-rc1/app/app.go#L257-L258"},"the default ",(0,r.kt)("inlineCode",{parentName:"a"},"NewKeeper")," constructor"),"\nto have the proper ",(0,r.kt)("inlineCode",{parentName:"p"},"supportedFeatures")," and pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEncoder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomQuerier")," as the last two arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper"),".\nNow you can compile your chain and upload your custom contracts on it."))}c.isMDXComponent=!0}}]);