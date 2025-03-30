import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page2 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;background-attachment:fixed;padding:10px 10px;",
            id:"feature"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:400;padding:5px;text-align:center;text-shadow:2px 2px 0px rgba(255, 215, 0, 0.2);font-family:shine;`,
                    class:"headerMainGrad text_border_decoration"
                },
                [
                    'Core Features'
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;"
                },
                [
                    __SYD.page3_child1({content:[
                        {header:"User-Friendly Interface" , text:"An intuitive dApp that allows anyone to describe their AI needs and watch as it’s built in real-time." , i_class:"fa-solid fa-network-wired"},
                        {header:"Rapid Development" , text:"Leverage advanced tools and off-chain computation to generate custom AI models in minutes." , i_class:"fa-solid fa-shuttle-space"},
                    ] , title:'Democratized AI Creation' , align:'right' , img:'ai_create.png' , delay:'.3' , id:0}),

                    __SYD.page3_child1({content:[
                        {header:"Immutable On-Chain Logging" , text:"Every AI’s unique “DNA” is hashed and stored on the Base chain, ensuring transparency and verifiable ownership." , i_class:"fa-solid fa-link"},
                        {header:"Smart Contract Security" , text:"Proven on Ethereum’s robust framework, safeguarding your creations with tamper-proof smart contracts." , i_class:"fa-solid fa-file-shield"},
                    ] , title:'Blockchain-Backed Integrity' , align:'left' , img:'ai_custom.png' , delay:'.8' , summary:"" , id:1}),

                    __SYD.page3_child1({content:[
                        {header:"Staking & Governance" , text:"Stake $BUILD to actively participate in platform decision-making and steer future developments." , i_class:"fa-solid fa-handshake"},
                        {header:"Collaborative Ecosystem" , text:"Contribute datasets, optimize templates, and share innovations to earn rewards and shape the platform’s evolution." , i_class:"fa-solid fa-users-rays"},
                    ] , title:'Community-Driven Innovation' , align:'right' , img:'eth.jpg' , delay:'1.2' , summary:"" , id:2}),

                    __SYD.page3_child1({content:[
                        {header:"Tailored Solutions" , text:"From trading bots to creative AI for art and NFTs, customize models to suit diverse real-world needs." , i_class:"fa-solid fa-wrench"},
                        {header:"Adaptive Learning" , text:"Continually refine AI performance based on community feedback and evolving datasets." , i_class:"fa-solid fa-chart-pie"},
                    ] , title:'Versatile AI Applications' , align:'left' , img:'baseMind__.jpg' , delay:'1.6' , summary:"" , id:3}),

                    __SYD.page3_child1({content:[
                        {header:"Earn as You Build" , text:"Create, test, and share AI models to receive $BUILD tokens, fostering a cycle of creativity and incentive." , i_class:"fa-solid fa-comments-dollar"},
                        {header:"Cross-Platform Utility" , text:"$BUILD functions across a range of decentralized applications, enhancing its value and usability." , i_class:"fa-solid fa-arrows-rotate"},
                    ] , title:'Rewarding Ecosystem' , align:'left' , img:'baseMind__.jpg' , delay:'1.6' , summary:"" , id:4}),

                    // __SYD.page3_child1({content:'Access, manage, and swap assets across multiple blockchains with ease. ZeroChain supports Ethereum, Binance Smart Chain, Solana, and many more, offering you a true cross-chain experience. Swap tokens securely across chains without leaving the wallet.' , title:'Multi-Chain, Cross-Chain Freedom' , align:'left' , img:'free.png' , delay:'.8'}),
        
                    // __SYD.page3_child1({content:'ZeroChain integrates with the best multi-chain DEXs, ensuring deep liquidity and fast, cost-effective swaps across chains. Maximize your assets, minimize your fees, all in one place.' , title:'Decentralized Exchange (DEX)' , align:'right' , img:'dex.png' , delay:'1.2'}),
        
                    // __SYD.page3_child1({content:'Whether you’re swapping tokens or transferring assets, your privacy is our top priority. With built-in privacy protocols like **CoinJoin, **zk-SNARKs, and **Tornado Cash*, your transactions are anonymous and shielded from prying eyes.' , title:'Privacy by Default' , align:'left' , img:'privacy.png' , delay:'1.6'}),
                ]
            )
        ],
        {
            createState:{
                stateName:'page2',
                state:{
                        show:false,
                        animate:false,
                        init_count:() =>{
                            const state = __g('page2');
                            state.animate = true;
                            __u('page2' , {type:'a' , value:state})
                        },
                        del_count:() =>{
                            const state = __g('page2');
                            state.animate = false;
                            __u('page2' , {type:'a' , value:state})
                        }
                    }
            },
            mediaQuery:{
                query:[{size:'<750px' , prop:{show:true}}],
                defState:{show:false}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.page3_child1 = ({content,title,align,img = '',delay = '0' , id} = {}) =>{
    return __c(
        'div',
        {
            style:`animation-delay:${delay}s;display:flex;flex-wrap:wrap;flex-direction:${align === "left" ? "row-reverse" : "row"};height:fit-content;width:100%;max-width:900px;align-items:center;position:relative;row-gap:15px;padding:50px 10px;border-radius:15px;justify-content:center;perspective:500px;`,
            class:`tab_design_3d ${__p(['page2','animate'],false) ? `${align === 'left' ? 'left_incoming_css_animation' : 'right_incoming_css_animation_custom_slider'}` : ''} ${__p(['page2','animate'],false) ? "feature_animate" : ""}`,
            id:`feature__${id}`,
            // class:__p(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            __SYD.floatingText({content,title,align,delay}),
            // __SYD.broadImg({align:align , img:img , delay})
        ]
    )
}

__SYD.floatingText = ({content = [] , title = '' , align = 'left' , delay , summary = ""} = {}) =>{
    
    return __c(
        'div',
        {
            style:`z-index:10;min-height:${__p(['subContainer','scaled'],false) ? '100%' : '50%'};height:fit-content;width:${__p(['subContainer','scaled'],false) ? '50%' : '100%'};overflow-x:hidden;position:${__p(['subContainer','scaled'],false) ? 'static' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${__p(['subContainer','scaled'],false) ? '50%' : 'unset'};${align === 'left' ? 'border-top-right-radius:25px;border-bottom-left-radius:25px;' :'border-top-left-radius:25px;border-bottom-right-radius:25px;'}text-align:left;animation-delay:${delay}s;`+__sC.page3FloatText({method:"add" , style:{padding:__p(['subContainer','scaled'],false) ? "70px 20px" : "70px 5px"}}),//${__p(['subContainer','scaled'],false) ? "left" : "center"}//border-${align === 'left' ? 'right' : 'left'}:1px solid rgba(255,255,255,.2);
            class:`text miniTabs_3d`
        },
        [
            __c(
                "div",
                {
                    style:"position:absolute;height:100%;width:100%;z-index:10;border-radius:inherit;",
                    class:`${align === "left" ? "partition_left" : "partition_right"}`
                }
            ),
            __c(
                'div',
                {
                    style:'font-size:20px;font-weight:unset;padding:10px;width:100%;font-family:shine;margin-bottom:15px;z-index:15;color:#FFD700;',
                    class:"mainTitle_text spaceCharacters"
                },
                [
                    title
                ]
            ),
            __c(
                "p",
                {
                    style:`display:${summary.length === 0 ? "none" : "block"};font-size:18px;padding:10px;width:100%;font-weight:900;color:#b0b0b0;z-index:15;`,
                },
                [
                    summary
                ]
            ),
            __c(
                'div',
                {
                    style:`font-size:18px;padding${__p(['subContainer','scaled'],false) ? "-left" : ""}:10px;line-height:25px;color:#b0b0b0;font-weight:900;width:100%;display:flex;flex-direction:column;row-gap:20px;z-index:15;`,
                    // class:'floatingTxt'
                },
                [
                    // __c("p",{style:"display:inline;color:#b0b0b0"},[content]),
                    __SYD.icon_floatText(content[0]),
                    __SYD.icon_floatText(content[1]),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750px', prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

__SYD.icon_floatText = ({header , text , i_class} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:30px;width:100%;height:fit-content;align-items:center"
        },
        [
            // __c("i" , {style:"font-size:30px;color:#0066FF;font-weight:900;height:30px;min-width:30px;" , class:`${i_class}`}),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;flex-direction:column;row-gap:7px;"
                },
                [
                    __c("strong" , {style:"color:#fff;"} , [`${header}`]),
                    __c("p" , {style:"font-weight:500;border-radius:10px;background:#121212;padding:10px;"} , [`${text}`])
                ]
            )
        ]
    )
}

__SYD.broadImg = ({align = '' , img , delay} = {}) =>{
    return __c(
        'div',
        {
            style:`height:100%;min-height:400px;max-height:400px;min-width:300px;background-color:#0D1117;border-radius:25px;border-width:1px;animation-delay:${delay}s;display:flex;justify-content:center;align-items:center;`,//background-position:${__p(['subContainer','scaled'],false) ? (align == 'left' ? 'center' : 'center') : 'center'} center; //align-self:${align == 'left' ? "flex-end" : "none"};
            class:`thin_border about_page_child1 transparent_comp img`
        },
        [
            __c(
                "img",
                {
                    src:`./assets/${img}`,
                    style:"width:90%;height:auto;border-radius:15px;box-shadow:2px 0 5px #020202;",
                    // class:"smooth_hover"
                }
            )
        ],
        {
            events:{
                // onmouseover:(e) =>{
                //     e.target.classList.add('h_page_1_cont_large_image_custom')
                // },
                // onmouseout:(e) =>{
                //     e.target.classList.remove('h_page_1_cont_large_image_custom')
                // },
            },
            genericStyle:['bg_fit']
        }
    )
}