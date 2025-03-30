import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page5 = () =>{
    return __c(
        "div",
        {
            style:"min-height:unset;height:fit-content;width:100%;max-width:1200px;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;background:unset;padding:10px 10px;",
            class:`${__p(['page5','animate'],false) ? "toke_animate" : ""}`,
            id:"roadMap"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:capitalize;font-weight:400;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`,
                    class:'headerMainGrad'
                },
                [
                    'Road Map',
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;column-gap:20px;flex-direction:row;position:relative;"
                },
                [
                    __SYD.bulb_roadMap(),
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:100%;display:flex;row-gap:100px;column-gap:20px;flex-wrap:wrap;flex-direction:column;"
                        },
                        [
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;min-height:150px;border-radius:20px;display:flex;justify-content:center;padding:16px 20px;flex-direction:column;align-self:flex-start;background:#121212;box-shadow:2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;",
                                    class:"transparent_comp page5Tabs text1"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:18px;font-weight:unset;padding:10px;color:#FFD700;width:100%;max-width:unset;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text spaceCharacters"
                                        },
                                        [
                                            "Phase 1: Token Launch & Platform"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Launch of " , __c("span",{style:"font-family:shine;font-size:16px;" , class:"headerMainGrad spaceCharacters"},["$BUILD"]) , " AI token on Base Chain."]),
                                    __c("li" , {style:""},["Platform ready for users to create and deploy their first AI agents."]),
                                    __c("li" , {style:""},["Simple $1 payment model for each agent created."]),
                                    __c("li" , {style:""},["Initial user onboarding and feedback collection."])
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;min-height:150px;border-radius:20px;display:flex;justify-content:center;padding:16px 20px;flex-direction:column;align-self:flex-end;background:#121212;box-shadow:2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;",
                                    class:"transparent_comp page5Tabs text2"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:18px;font-weight:unset;padding:10px;color:#FFD700;width:100%;max-width:unset;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text spaceCharacters"
                                        },
                                        [
                                            "Phase 2: AI Agent Customization & User Expansion "
                                        ]
                                    ),
                                    __c("li" , {style:""},["Expand customization options for agents, allowing more control over AI behavior and functions."]),
                                    __c("li" , {style:""},["Introduce user profiles to track and manage created agents."]),
                                    __c("li" , {style:""},["Begin promotional campaigns to attract early adopters and AI enthusiasts."]),
                                    __c("li" , {style:""},["Partnerships with key AI and blockchain communities for broader reach."]),
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;min-height:150px;border-radius:20px;display:flex;justify-content:center;padding:16px 20px;flex-direction:column;align-self:flex-start;background:#121212;box-shadow:2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;",
                                    class:"transparent_comp page5Tabs text3"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:18px;font-weight:unset;padding:10px;color:#FFD700;width:100%;max-width:unset;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text spaceCharacters"
                                        },
                                        [
                                            "Phase 3: Premium Features & Tiered Pricing "
                                        ]
                                    ),
                                    __c("li" , {style:""},["Launch premium plans for bulk agent creation at discounted rates."]),
                                    __c("li" , {style:""},["Add advanced features for AI agents, like enhanced learning capabilities or specialized functions."]),
                                    __c("li" , {style:""},["Roll out tiered access for power users with custom needs."]),
                                    __c("li" , {style:""},["Implement referral programs and reward systems to encourage community growth."])
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;min-height:150px;border-radius:20px;display:flex;justify-content:center;padding:16px 20px;flex-direction:column;align-self:flex-end;background:#121212;box-shadow:2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;",
                                    class:"transparent_comp page5Tabs text4"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:18px;font-weight:unset;padding:10px;color:#FFD700;width:100%;max-width:unset;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text spaceCharacters"
                                        },
                                        [
                                            "Phase 4: Scalability & Community Governance"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Introduce scalable solutions to handle increased demand and more complex agent creations."]),
                                    __c("li" , {style:""},["Begin building a community governance model to allow token holders to propose features and vote on platform direction."]),
                                    __c("li" , {style:""},["Explore integration with other Layer 2 or blockchain solutions to increase platform versatility."]),
                                    __c("li" , {style:""},["First steps toward decentralized autonomous organization (DAO) structure."])
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;min-height:150px;border-radius:20px;display:flex;justify-content:center;padding:16px 20px;flex-direction:column;align-self:flex-start;background:#121212;box-shadow:2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;",
                                    class:"transparent_comp page5Tabs text4"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:18px;font-weight:unset;padding:10px;color:#FFD700;width:100%;max-width:unset;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text spaceCharacters"
                                        },
                                        [
                                            "Phase 5: Full AI Ecosystem & Expansion"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Develop an AI marketplace where users can buy, sell, or trade their AI agents."]),
                                    __c("li" , {style:""},["Full integration of third-party AI tools and services into the platform."]),
                                    __c("li" , {style:""},["Ongoing optimization for user experience, performance, and platform security."]),
                                    __c("li" , {style:""},["Expansion into additional blockchains and platforms beyond Base Chain."]),
                                    __c("li" , {style:""},["Global community events to showcase AI agents and the potential of " , __c("span",{style:"font-family:shine;font-size:16px;" , class:"headerMainGrad spaceCharacters"},["$BUILD "]) , "AI."]),
                                ]
                            ),
                        ]
                    )
                ],
                {
                    events:{
                        onmouseover:e =>{
                            if(!__p(['page5' , 'animateOrb'],false))
                            {
                                const state = __g('page5');
                                state.animateOrb = true;
                                __u("page5" , {type:'a' , value:state})
                            }
                        },
                        onmouseout: e =>{
                            if(__p(['page5' , 'animateOrb'],false))
                            {
                                const state = __g('page5');
                                state.animateOrb = false;
                                __u("page5" , {type:'a' , value:state})
                            }
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:"page5",
                state:{
                    animate:false,
                    init_count:() =>{
                        const state = __g('page5');
                        state.animate = true;
                        __u('page5' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page5');
                        state.animate = false;
                        __u('page5' , {type:'a' , value:state})
                    },
                    scale:false,
                    animateOrb:false
                }
            },
            // mediaQuery:{
            //     query:[{size:"<900px" , prop:{scale:true}}],
            //     defState:{scale:false}
            // }
        }
    )
}

__SYD.bulb_roadMap = () =>{

    const run = () =>{
        const element = document.querySelectorAll(".page5Tabs");

        let initPosition = 0;

        let elementArray = []

        for(let i = 0; i < element.length; i++)
        {
            const elementHeight = element[i].offsetHeight;
            initPosition += elementHeight;
            initPosition += 100 // row-gap
            initPosition = i === 0 ? 0 : initPosition;

            elementArray.push(initPosition)
        }
    }

    return __c(
        "div",
        {
            style:`min-width:50px;top:0;left:50%;height:100%;`,
            class:"bulb_roadMap"
        },
        [
            ...(() =>{
                const elements = __p(['bulb_roadMap' , 'size' , 'blob'],[0]);
                const height = __p(['bulb_roadMap' , 'size' , 'line'],[0]);
                let x = -1;
                function isOdd__(){x++;return `${x/2}`.includes(".") ? false : true;}

                const array = []
                for(let i = 0; i < elements.length; i++)
                {
                    array.push(
                        __c(
                            "i",
                            {
                                style:`font-size:25px;display:flex;align-items:center;justify-content:center;height:50px;width:50px;border-radius:50%;position:absolute;top:${elements[i]}px;left:50%;transform:translateX(-50%);z-index:300;animation-delay:${i+1 * 1.5}s;color: #FFD700;background:#121212;`,
                                class:`fa-solid fa-right-left three_d_orb_style ${__p(['page5' , 'animateOrb'],false) ? "three_d_orb_style_animation" :""}`
                            }
                        )
                    )
                }

                for(let i = 0; i < elements.length-1; i++)
                {
                    array.push(
                        __c(
                            "span",
                            {
                                style:`height:${height[i]}px;width:4px;background:#0D1117;position:absolute;left:50%;transform:translateX(-50%);top:${elements[i] + (0*2)}px;z-index:200;`
                            }
                        )
                    )
                }
                return array;
            })()
        ],
        {
            createState:{
                stateName:"bulb_roadMap",
                state:{
                    size:{blob:[] , line:[]}
                }
            }
        }
    )
}