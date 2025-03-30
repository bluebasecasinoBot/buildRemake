import { __c, __m, __sC, __SYD  , __p, __v, __u, __g, manage_mediaQuery} from "../sydneyDom_v2.js"
import "../routeFiles.js"
import "./createAI_intro.js"
import "./createAi__sections.js"
import "./useAgentAi__sections.js"
import "./agent__use.js"
import { MainRenderInit } from "../threeDRenderScript.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container']({
                method:"add",style:{background:"radial-gradient(circle at top, #111 0%, #000 100%)"}
            }) + "background-size:cover;background-position:center top;background-repeat: no-repeat;"
        },
        [
            // __SYD.MainCanvas(),
            __SYD.subContainer(),
        ]
    )
}

__SYD.subContainer = () =>{
    return __c(
        "div",
        {
            style:`min-height:100%;width:100%;height:fit-content;position:relative;display:flex;padding-top:0px;flex-direction:column;row-gap:3rem;align-items:center;z-index:200;`,
            class:"subContainer"
        },
        [
            __SYD.popUp(),
            __SYD.createIntro_tabMain(),
            __SYD.createAI__sections_main(),
            __SYD.userAgentAi__sections_main()
        ],
        {
            createState:{
                stateName:"subContainer",
                state:{
                    scaled:false,
                    scaleIntro:false
                }
            },
            mediaQuery:{
                query:[{size:">1100px" , prop:{scaled:true}} , {size:"<800px" , prop:{scaleIntro:true}}],
                defState:{scaled:false , scaleIntro:false}
            }
        }
    )
}


__SYD.MainCanvas = () =>{
    return __c(
        "canvas",
        {
            style:"height:100%;width:100%;position:fixed;top:0;left:0;z-index:100;"
        },
        [],
        {
            type:'MainCanvas'
        }
    )
}

__SYD.popUp = () =>{
    return __c(
        "div",
        {
            style:`padding:20px 10px;min-height:30px;max-width:500px;min-width:200px;position:fixed;top:10px;left:50%;background:#0D1117;z-index:999;width:fit-content;display:flex;align-items:center;justify-content:center;border:1px solid ${__p(["popUp" , "outline"] , "norm") === "norm" ? "rgba(255, 255, 255, 0.493)" : "rgba(252, 32, 32, 0.493)"};transform:translateX(-50%) translateY(${__p(["popUp" , "popUp_state"] , false) ? "0px" : "-200%"});transition:all linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%) .4s;`
        },
        [
            __c(
                "p",
                {
                    style:"color:#fff;text-shadow:2px 2px 1px #141414;text-align:center;text-transform:capitalize;"
                },
                [
                    __p(["popUp" , "text"] , "")
                ]
            )
        ],
        {
            createState:{
                stateName:"popUp",
                state:{
                    text:"",
                    popUp_state:false,
                    outline:"norm",
                    displayText:(text , outline = "norm") =>{
                        const state = __g("popUp");
                        state.text = text;
                        state.popUp_state = true;
                        state.outline = outline;
                        __u("popUp" , {type:"a" , value:state})

                        const timer = setTimeout(() => {
                            const state = __g("popUp");
                            state.popUp_state = false;
                            __u("popUp" , {type:"a" , value:state})

                            clearTimeout(timer);
                        }, 3000);
                    },
                    disablePopUp:() =>{
                        const state = __g("popUp");
                        state.popUp_state = false;
                        __u("popUp" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}
__m(__SYD.container())