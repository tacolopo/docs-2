"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4401],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(3117),o=n(102),s=(n(7294),n(3905)),r=["components"],i={sidebar_position:2},c="Contrat intelligent de DAO",l={unversionedId:"dao-governance/dao-contract",id:"dao-governance/dao-contract",title:"Contrat intelligent de DAO",description:"Les DAO sont des constructions sociales qui se composent de plus d'une entit\xe9. Collecting your friends' and colleagues' blockchain addresses to form a DAO for this section would be ideal. If that's not possible, we'll generate several new keys to emulate the participation of different parties for this section.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/dao-governance/02-dao-contract.md",sourceDirName:"dao-governance",slug:"/dao-governance/dao-contract",permalink:"/fr/dev-academy/dao-governance/dao-contract",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/fr/dev-academy/dao-governance/what-is-a-dao"}},p={},d=[{value:"Configuration de l&#39;environnement",id:"configuration-de-lenvironnement",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Configuration de cw4-group",id:"configuration-de-cw4-group",level:2},{value:"Configuration de cw3-flex-multisig",id:"configuration-de-cw3-flex-multisig",level:2},{value:"Govern other Smart Contracts",id:"govern-other-smart-contracts",level:2},{value:"Propose",id:"propose",level:2},{value:"Summary",id:"summary",level:2},{value:"Challenge",id:"challenge",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"contrat-intelligent-de-dao"},"Contrat intelligent de DAO"),(0,s.kt)("p",null,"Les DAO sont des constructions sociales qui se composent de plus d'une entit\xe9. Collecting your friends' and colleagues' blockchain addresses to form a DAO for this section would be ideal. If that's not possible, we'll generate several new keys to emulate the participation of different parties for this section."),(0,s.kt)("h2",{id:"configuration-de-lenvironnement"},"Configuration de l'environnement"),(0,s.kt)("p",null,"Open up two Terminal windows. The first one will be reserved for DAO admin actions; and the other window will contain 4 tabs, one for each DAO member."),(0,s.kt)("p",null,"On each of the 4 tabs of Terminal window #2, initialize a CosmJS CLI session and run the following commands to create 4 unique wallet addresses to act as DAO members:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.28.1 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/cw3-flex-multisig.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"# Tab 1\nconst [addr, client] = await useOptions(malagaOptions).setup('password', '.account1.key');\nconsole.log(addr);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"# Tab 2\nconst [addr, client] = await useOptions(malagaOptions).setup('password', '.account2.key');\nconsole.log(addr);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"# Tab 3\nconst [addr, client] = await useOptions(malagaOptions).setup('password', '.account3.key');\nconsole.log(addr);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"# Tab 4\nconst [addr, client] = await useOptions(malagaOptions).setup('password', '.account4.key');\nconsole.log(addr);\n")),(0,s.kt)("p",null,"Copy and note the wallet addresses down."),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"We will use ",(0,s.kt)("inlineCode",{parentName:"p"},"cw4-group")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contracts for the DAO. The advantage of having two separate governance contracts is the provided flexibility. The ",(0,s.kt)("inlineCode",{parentName:"p"},"cw4-group")," contract contains member details, while the ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contract contains the cw4-group address, the voting threshold and the voting period. With this architecture, one group can have multiple multisig accounts with different voting parameters."),(0,s.kt)("h2",{id:"configuration-de-cw4-group"},"Configuration de cw4-group"),(0,s.kt)("p",null,"On the first Terminal window, let us set up a wallet address to act as the group administrator and launch the DAO with the 4 member addresses generated earlier."),(0,s.kt)("p",null,"Initialize the CosmJS CLI session:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.28.1 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/cw4-group.ts\n")),(0,s.kt)("p",null,"Now set up a wallet address before deploying and instantiating the cw4-group contract:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const [addr, client] = await useOptions(malagaOptions).setup(\'password\', \'.main.key\');\nconst contract = CW4Group(client, malagaOptions);\nconst codeId = await contract.upload(addr, malagaOptions);\nconsole.log(codeId);\n\n//Preparing the instantiation message, make sure to \n//replace the member addresses with the ones generated earlier for each member\n.editor\n\nconst initMsg = {\n    admin: addr,\n    members: [\n        {\n            addr: "Member Address #1",\n            weight: 10, // weight is the voting power an address has\n        },\n        {\n            addr: "Member Address #2",\n            weight: 10,\n        },\n        {\n            addr: "Member Address #3",\n            weight: 10,\n        },\n        {\n            addr: "Member Address #4",\n            weight: 10,\n        },\n    ]\n};\n//Exit editor using `^D` to execute the code entered\n^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, \'Council\', malagaOptions);\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  contractAddress: 'wasm1vguuxez2h5ekltfj9gjd62fs5k4rl2zy5hfrncasykzw08rezpfskn7x0n',\n  admin: [AsyncFunction: admin],\n  totalWeight: [AsyncFunction: totalWeight],\n  member: [AsyncFunction: member],\n  listMembers: [AsyncFunction: listMembers],\n  hooks: [AsyncFunction: hooks],\n  updateAdmin: [AsyncFunction: updateAdmin],\n  updateMembers: [AsyncFunction: updateMembers],\n  _addHook: [AsyncFunction: _addHook],\n  _removeHook: [AsyncFunction: _removeHook]\n}\n")),(0,s.kt)("p",null,"Copy and save the ",(0,s.kt)("inlineCode",{parentName:"p"},"contractAddress")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"codeId"),"."),(0,s.kt)("h2",{id:"configuration-de-cw3-flex-multisig"},"Configuration de cw3-flex-multisig"),(0,s.kt)("p",null,"Now switch back to the second Terminal window and on the first tab run the following commands to set up and instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contract:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const contract = CW3Flex(client, malagaOptions);\nconst codeId = await contract.upload(addr, malagaOptions);\nconsole.log(codeId);\n\n.editor\n//The property "group_addr" holds the address of the cw4-group contract that was instantiated earlier\n//Make sure to replace the group address with address of the cw4-group contract instance\n//Make sure to replace the member addresses with the ones generated earlier for each member\n\nconst initMsg = {\n    group_addr: "wasm1vguuxez2h5ekltfj9gjd62fs5k4rl2zy5hfrncasykzw08rezpfskn7x0n",\n    threshold: { absolute_percentage: { percentage: "0.5" }},\n    max_voting_period: {time: 300},\n    members: [\n        {\n            addr: "Member Address #1",\n            weight: 10, // weight is the voting power an address has\n        },\n        {\n            addr: "Member Address #2",\n            weight: 10,\n        },\n        {\n            addr: "Member Address #3",\n            weight: 10,\n        },\n        {\n            addr: "Member Address #4",\n            weight: 10,\n        },\n    ]\n};\n//Exit editor using `^D` to execute the code entered\n^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, \'Council Flex Multisig\', malagaOptions);\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"threshold")," sets the total percentage of the votes that is required for a proposal to pass. There are ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/cw-utils/0.12.1/cw_utils/enum.Threshold.html"},"options")," other than ",(0,s.kt)("inlineCode",{parentName:"p"},"absolute_percentage")," in the contract for threshold type."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"max_voting_period")," defines the default voting period for a proposal in terms of time or block-height. The value was set to 300 seconds in this case for practical purposes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n{\n  contractAddress: 'wasm1vhndln95yd7rngslzvf6sax6axcshkxqpmpr886ntelh28p9ghuq0rxlxs',\n  threshold: [AsyncFunction: threshold],\n  proposal: [AsyncFunction: proposal],\n  query_vote: [AsyncFunction: query_vote],\n  listProposals: [AsyncFunction: listProposals],\n  reverseProposals: [AsyncFunction: reverseProposals],\n  voter: [AsyncFunction: voter],\n  listVoters: [AsyncFunction: listVoters],\n  listVotes: [AsyncFunction: listVotes],\n  propose: [AsyncFunction: propose],\n  vote: [AsyncFunction: vote],\n  execute: [AsyncFunction: execute],\n  close: [AsyncFunction: close],\n  _memberChangedHook: [AsyncFunction: _memberChangedHook]\n}\n")),(0,s.kt)("p",null,"Copy and save the cw3-flex-multisig ",(0,s.kt)("inlineCode",{parentName:"p"},"contractAddress"),". We will utilize the ",(0,s.kt)("inlineCode",{parentName:"p"},"propose()")," function of this contract instance later on."),(0,s.kt)("p",null,"Notice that the contract was instantiated on the Terminal window tab for the first member. Now let us prepare the other three member tabs to interact with the cw3-flex-multisig instance."),(0,s.kt)("p",null,"Run the following commands on each of the other three member tabs to define and use the ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contract instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'// Make sure to replace the cw3-flex-multisig contract address with the one you copied earlier\nconst contractAddress = "wasm1vhndln95yd7rngslzvf6sax6axcshkxqpmpr886ntelh28p9ghuq0rxlxs";\nconst contract = CW3Flex(client, malagaOptions);\nconst instance = contract.use(contractAddress);\n')),(0,s.kt)("h2",{id:"govern-other-smart-contracts"},"Govern other Smart Contracts"),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"/fr/dev-academy/develop-smart-contract/intro"},"Smart Contract Interaction")," section, we've learned how to set up and interact with a ",(0,s.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract instance."),(0,s.kt)("p",null,"Remember that the ",(0,s.kt)("inlineCode",{parentName:"p"},"minter")," of a cw20 contract is the address that is privileged to mint/create new tokens on the contract. As you no doubt will agree, a single user having the ability to mint an unlimited number of tokens is neither secure nor reasonable. Only multiple parties and organizations should be allowed to run mint operations and this is where setting up DAOs as smart contract administrators comes into play."),(0,s.kt)("p",null,"Let us open up a third Terminal window and set up a cw20 contract that grants our cw3-flex-multisig contract instance minter privileges."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.28.1 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/cw20-base.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'\nconst [addr, client] = await useOptions(malagaOptions).setup("password",".cw20.key");\nconst cw20 = CW20(client, malagaOptions);\nconst codeId = await cw20.upload(addr, malagaOptions);\nconsole.log(codeId);\n\n.editor\n//Define the cw20 instantiation message parameters\nconst initMsg = {\n  name: "Tokens",\n  symbol: "TKN",\n  decimals: 2,\n  // No initial balances\n  initial_balances: [],\n  //cw3-flex-multisig contract address has the minting rights\n  mint: {\n    minter: "wasm1vhndln95yd7rngslzvf6sax6axcshkxqpmpr886ntelh28p9ghuq0rxlxs"\n  },\n};\n\n//Exit editor using `^D` to execute the code entered\n^D\n\nconst contract = await cw20.instantiate(addr, codeId, initMsg, "TKN", malagaOptions);\nconsole.log(contract);\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  contractAddress: 'wasm13we0myxwzlpx8l5ark8elw5gj5d59dl6cjkzmt80c5q5cv5rt54qhmta7s',\n  balance: [AsyncFunction: balance],\n  allowance: [AsyncFunction: allowance],\n  allAllowances: [AsyncFunction: allAllowances],\n  allAccounts: [AsyncFunction: allAccounts],\n  tokenInfo: [AsyncFunction: tokenInfo],\n  minter: [AsyncFunction: minter],\n  mint: [AsyncFunction: mint],\n  transfer: [AsyncFunction: transfer],\n  burn: [AsyncFunction: burn],\n  increaseAllowance: [AsyncFunction: increaseAllowance],\n  decreaseAllowance: [AsyncFunction: decreaseAllowance],\n  transferFrom: [AsyncFunction: transferFrom],\n  send: [AsyncFunction: send],\n  sendFrom: [AsyncFunction: sendFrom]\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(await contract.minter())\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  minter: 'wasm1vhndln95yd7rngslzvf6sax6axcshkxqpmpr886ntelh28p9ghuq0rxlxs',\n  cap: null\n}\n")),(0,s.kt)("p",null,"We have successfully instantiated a cw20 contract with the ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contract instance assigned as the minter."),(0,s.kt)("h2",{id:"propose"},"Propose"),(0,s.kt)("p",null,"Now we will set up a proposal on the ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contract to mint 9999 TKNs to a random address. Switch to the first tab of the second terminal window (i.e., the tab for the first member of the cw3-flex-multisig contract."),(0,s.kt)("p",null,"Let us specify the proposal details first. Notice the contract address in the ",(0,s.kt)("inlineCode",{parentName:"p"},"msgs")," points to our cw20 contract instance and the message inside is the base64 encoded version of the following cw20 ",(0,s.kt)("inlineCode",{parentName:"p"},"mint{}")," message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'{"mint":{"recipient":"wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp","amount":"9999"}}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'.editor\n\nlet title = "Mint tokens"\nlet description = "Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp";\nlet msgs = [\n  {\n    wasm: {\n      execute: {\n        contract_addr: "wasm13we0myxwzlpx8l5ark8elw5gj5d59dl6cjkzmt80c5q5cv5rt54qhmta7s",\n        msg: "eyJtaW50Ijp7InJlY2lwaWVudCI6Indhc20xdzc0MGg1Nmo5bmh1ZHlra204MGo1cmY2bXMyNW5oZTlodXV2Z3AiLCJhbW91bnQiOiI5OTk5In19Cg==",\n        funds: []\n      }\n    }\n  }];\n\n//Exit editor using `^D` to execute the code entered\n^D\n')),(0,s.kt)("p",null,"Now that the proposal contents are set up, we can submit the proposal."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const fee = calculateFee(malagaOptions.fees.exec, malagaOptions.gasPrice)\nconst result = await client.execute(addr, instance.contractAddress, { propose: {title, description, msgs}}, fee)\n\ninstance.listProposals()\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  proposals: [\n    {\n      id: 1,\n      title: 'Mint tokens',\n      description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n      msgs: [Array],\n      status: 'open',\n      expires: [Object],\n      threshold: [Object]\n    }\n  ]\n}\n")),(0,s.kt)("p",null,"The proposal is created and is open for voting. Remember that the threshold for our cw3-flex-multisig contract instance was set to 50% meaning that only 2 of the 4 members should vote 'Yes' for the proposal to pass. The act of creating a proposal already counts a ",(0,s.kt)("inlineCode",{parentName:"p"},"Yes")," vote, so the proposal only needs another ",(0,s.kt)("inlineCode",{parentName:"p"},"Yes")," vote to pass."),(0,s.kt)("p",null,"Let us switch to the tab for the second member of the cw3-flex-multisig contract and cast a ",(0,s.kt)("inlineCode",{parentName:"p"},"Yes")," vote on the proposal."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'let proposalId = 1\ninstance.vote(addr, proposalId, "yes")\n')),(0,s.kt)("p",null,"Checking the list of proposals again, the proposal status should've been updated as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.listProposals()\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  proposals: [\n    {\n      id: 1,\n      title: 'Mint tokens',\n      description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n      msgs: [Array],\n      status: 'passed',\n      expires: [Object],\n      threshold: [Object]\n    }\n  ]\n}\n")),(0,s.kt)("p",null,"The proposal has passed, and is ready for execution. You may execute the action on any one of the member tabs at this point."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.execute(addr, proposalId)\n")),(0,s.kt)("p",null,"Now, let us switch to the cw20 terminal window and check the balance of the address that the tokens were minted to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'contract.balance("wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp")\n')),(0,s.kt)("p",null,"The result should be as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"'9999'\n")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"With that, we have successfully formed a DAO that is in control of a cw20 contract; before setting up, voting for and executing a proposal to mint tokens to a random address."),(0,s.kt)("p",null,"Throughout this brief entry to the CosmWasm DAO and Governance smart contracts, we've only covered a small portion of the functionalities of cw3 and cw4 DAO contracts. It is highly recommended that you go ahead and explore the related ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts"},"cw-plus")," repository to learn more about their capabilities."),(0,s.kt)("h2",{id:"challenge"},"Challenge"),(0,s.kt)("p",null,"As a challenge, you can create other instances of governance contracts and experiment on new proposals to explore different threshold parameters."))}m.isMDXComponent=!0}}]);