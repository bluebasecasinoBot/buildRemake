import {__sS , __SYD , __c, __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"


__sS([
    {
        nameTag:"container",
        style:{
            height:"100vh",
            width:"100vw",
            position:"relative",
            // paddingTop:"30px",
            // paddingBottom:"300px",
            overflowX:"hidden",
            overflowY:"scroll",
            background:"url(./assets/main_front2.png) , radial-gradient(circle at top, #111 0%, #000 100%)",
            // backgroundImage:"url(./assets/AgentBLogo.png)",
            color:"#E6E6E6",
            fontFamily:"jose",
        }
    },

    {
        nameTag:"rad_1",
        style:{
            borderRadius:"10px"
        }
    },

    {
        nameTag:"bookingTabDesign",
        style:{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
        }
    },

    {
        nameTag:"three_d_style",
        style:{
            boxShadow:` -1px -1px 3px #180505 inset,
            1px 1px 1px #f8a8e466 inset,
            2px 2px 5px #090303 `,
            backgroundColor:"#670015", //"rgba(36, 41, 54, 1)",
            color:"#fff"
        }
    },

    {
        nameTag:"three_d_child",
        style:{
            background:" rgb(24, 26, 36)",
            boxShadow:" 1px 1px 3px #000 inset",
        }
    },

    {
        nameTag:"top_highlight",
        style:{

        }
    },

    {
        nameTag:"txt_shad",
        style:{
            textShadow:"1px 2px 1px #000"
        }
    }
])

__sS([
    {
        nameTag:'hsec3_video_container',
        style:{
            height:'fit-content',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            rowGap:'50px',
            padding:'15px 5px',
            paddingTop:'20px',
            background:'rgba(0,0,0,.1)',
            alignItems:'center',
            position:'relative'
        }
    }
])

__sS([
    {
        nameTag:'page3FloatText',
        style:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'10px 5px',
            overflow:'visible',
        }
    }
])


__SYD.ul_lists_el = ({child , function_ = {} , otherProp = {}}) =>{
    return __c(
        "li",
        {
            style:"list-style-type:none;cursor:pointer;",
            // class:"click"
        },
        [
            child
        ],
        {
            ...otherProp,
            events:{
                ...function_
            }
        }
    )
}

__SYD.pTag = ({style = "" , class_ = "" , function_ = {} , id = "" , text , child = []} = {}) =>{
    return __c(
        "p",
        {
            style:`font-weight:300;${style};`,
            class:`${class_}`,
            id:`${id}`
        },
        [
            `${text}`,
            ...child
        ],
        {
            events:{
                ...function_
            }
        }
    )
}

__SYD.launch_app_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:none;border-radius:15px;width:fit-content;",
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "Build" ,
                   __c("i",{style:"margin-left:5px;height:18px;width:18px;font-size:18px;",class:"fa-solid fa-house-medical"})
                ]
            )
            
        ],
        {
            events:{
                onclick:e =>{
                    location.href = "agent_creation/creation.html"
                }
            }
        }
    )
}

__SYD.createAi__start = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:none;border-radius:15px;",
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "Get Started" ,
                   __c("i",{style:"margin-left:5px;",class:"fas fa-arrow-right"})
                ]
            )
            
        ],
        {
            events:{
                onclick: e =>{
                    __p(['createIntro_tabMain' , 'remove_display_func'])();

                    __p(['createAI__sections_main' , 'display_func'])();

                    __p(["popUp" , "displayText"])("Get started with creating your agent 😉");
                }
            }
        }
    )
}

__SYD.access_agent = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:none;border-radius:15px;",
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "Access Agent 🤖" ,
                   __c("i",{style:"margin-left:5px;",class:"fas fa-arrow-right"})
                ]
            )
            
        ],
        {
            events:{
                onclick: e =>{
                    __p(['createIntro_tabMain' , 'remove_display_func'])();

                    __p(['userAgentAi__sections_main' , 'display_section_1'])();

                    __p(['userAgentAi__sections_main' , 'display_func'])();

                    __p(["popUp" , "displayText"])("Access your Build AI Agent 😃");
                }
            }
        }
    )
}

__SYD.verify_agent = () =>{
    return __c(
        "div",
        {
            style:`padding:15px 25px;text-transform:none;border-radius:15px;${__p(["fetchAgent" , "verifyingAgent"],false) ? "pointer-events:none;opacity:.4;" : ""}`,
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "Verify Agent Credentials" ,
                   __c("i",{style:"margin-left:5px;",class:"fas fa-arrow-right"})
                ]
            )
        ],
        {
            events:{
                onclick: async e =>{
                    if(!__p(["fetchAgent" , "verifyingAgent"],false))
                    {
                        if(__v['agentCredinfo'].value.length > 0)
                        {
                            // __p(['createIntro_tabMain' , 'remove_display_func'])();

                            __p(['fetchAgent' , 'startVerifyingAgentAnimation'])();//setAgentVerification

                            // __p(['userAgentAi__sections_main' , 'setAgentVerification'])(true);

                            await fetch('https://agentb-server.fly.dev/verify_agent_cred', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({agentCred:__v['agentCredinfo'].value})
                            })
                            .then(response => response.json())
                            .then(data =>{
                                __p(['fetchAgent' , 'stopVerifyingAgentAnimation'])();

                                if(data.status === "Good")
                                {
                                    __p(['userAgentAi__sections_main' , 'clearAllChats'])();
                                    
                                    __p(['userAgentAi__sections_main' , 'massUpdateAgentInfo'])(data.agentInfo);

                                    __p(['userAgentAi__sections_main' , 'setAgentVerification'])(true);

                                    __p(['userAgentAi__sections_main' , 'updateAgentMessage'])(`Hey there! , am ${__p(["userAgentAi__sections_main" , "agentLoginInfo" , "agentName"] , "agent")} 👋 Welcome! I’m here to help with whatever you need regarding ${__p(['userAgentAi__sections_main' , 'agentLoginInfo' , 'expertise'])}, Let’s get started!`);
                                }else
                                {
                                    __p(["popUp" , "displayText"])(`Verification Failed server responded with ~ ${data.status}` , "warn");

                                    __p(['userAgentAi__sections_main' , 'setAgentVerification'])(false);//clearAllChats

                                    __p(['userAgentAi__sections_main' , 'clearAllChats'])();
                                }
                            })
                            .catch(err =>{
                                __p(['fetchAgent' , 'stopVerifyingAgentAnimation'])();

                                __p(["popUp" , "displayText"])(`An Error Occured ~ ${err.message}` , "warn");

                                __p(['userAgentAi__sections_main' , 'setAgentVerification'])(false);
                            })
                        }else
                        {
                            __p(["popUp" , "displayText"])("Please Enter Your Agent credentials" , "warn");
                        }
                    }
                    
                }
            }
        }
    )
}

__SYD.community_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:capitalize;border-radius:15px;",
            class:"launch_btn text2"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700"
                },
                [
                   "community" 
                ]
            )
            
        ]
    )
}

__SYD.hr = () =>{
    return __c(
        "div",
        {
            style:"height:1px;width:100%;background:linear-gradient(to right, transparent , rgba(255,255,255,.3) , transparent);"
        }
    )
}