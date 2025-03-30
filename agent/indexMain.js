import { __c, __m, __sC, __SYD  , __p, __v, __u, __g, manage_mediaQuery} from "./sydneyDom_v2.js"
import "./scroll.js"
import "./routeFiles.js"
import "./navBar.js"
import "./page1.js"
import "./about.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page4Aux.js"
import "./page5.js"
import "./page6.js"
import "./footer.js"
import "./buyToken.js"
import { floatBot__func } from "./floatBot.js"
// import { MainRenderInit } from "./threeDRenderScript.js"

import "./page2AuxSection.js"



__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container']()
        },
        [
            __SYD.subContainer(),
            __SYD.floatBot_container(),
            // __SYD.MainCanvas(),
            __SYD.loaderScreen()
        ],
        {
            genericStyle:["bg_fit"],
            type:"container"
        }
    )
}

__SYD.loaderScreen = () =>{
    return __c(
        "div",
        {
            style:`position:fixed;height:100%;width:100%;top:0;left:0;background:#0D1117;z-index:1000;display:${__p(['loaderScreen' , 'show'], true) ? "flex" : "none"};justify-content:center;align-items:center;z-index:10000;flex-direction:column;row-gap:10px;`,
        },
        [
            __c(
                "img",
                {
                    style:"height:100px;width:auto;",
                    src:"./assets/buildGif.gif",
                    loading:"eager"
                },
            ),
            __c(
                "h1",
                {style:"color:#fff;text-align:center;font-family:shine;text-shadow:2px 2px 1px #141414;position:relative;"},
                [
                    __c("span" , {style:"background: linear-gradient(90deg, #FFD700, #B8860B, #FFD700);-webkit-background-clip: text;-webkit-text-fill-color: transparent;text-shadow: 2px 2px 3px rgba(230, 230, 230, 0.42), 0 0 5px rgba(230, 230, 230, 0.35);"},["Build AI "])
                ]
            ),
        ],
        {
            createState:{
                stateName:"loaderScreen",
                state:{
                    show:true,
                    removeLoader:() =>{
                        const state = __g("loaderScreen");
                        state.show = false;
                        __u("loaderScreen" , {type:"a" , value:state})
                    },
                    showLoader:() =>{
                        const state = __g("loaderScreen");
                        state.show = true;
                        __u("loaderScreen" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}


__SYD.subContainer = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        "div",
        {
            style:`min-height:200%;width:100%;height:fit-content;position:relative;display:flex;padding-top:0px;flex-direction:column;row-gap:3rem;align-items:center;color:#E6E6E6;z-index:200;`,
            class:"subContainer"
        },
        [
            __SYD.scaleNav(),
            __SYD.page1(),
            __SYD.hr(),
            __SYD.about_page(),
            __SYD.hr(),
            __SYD.page4Aux_creationDescription(),
            __SYD.hr(),
            __SYD.page2(),
            __SYD.auxSection__featureMain(),
            __SYD.hr(),
            __SYD.buyToken(),
            __SYD.hr(),
            __SYD.page4(),
            __SYD.hr(),
            __SYD.page5(),
            __SYD.page3(),
            __SYD.footer_main_parent()
            // __SYD.page6()
        ],
        {
            genericStyle:["bg_fit"],
            createState:{
                stateName:"subContainer",
                state:{
                    scaled:false,
                }
            },
            mediaQuery:{
                query:[{size:">1100px" , prop:{scaled:true}}],
                defState:{scaled:false}
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

__m(__SYD.container() , floatBot__func);//MainRenderInit

window.addEventListener("DOMContentLoaded" , e =>{
    const setBlub = () =>{
        const element = document.querySelectorAll(".page5Tabs");

        let initPosition = 0;
    
        let lineHeight = 0;
    
        let elementArray = [];
    
        let elementHeights = [];
    
        for(let i = 0; i < element.length; i++)
        {
            const elementHeight = element[i].offsetHeight;
    
            if(i === 0)
            {
                initPosition = 0;
                lineHeight += elementHeight + 100;
            }else{
                initPosition += element[i-1].offsetHeight;
                initPosition += 100 // row-gap
    
                lineHeight = element[i].offsetHeight + 100;
            }
    
            // lineHeight += (elementHeight + 100);
    
            elementHeights.push(lineHeight)
    
            elementArray.push(initPosition)
        }
    
        const state = __g("bulb_roadMap");
        state.size.blob = elementArray;
        state.size.line = elementHeights
        __u("bulb_roadMap" , {type:"a" , value:state})
    }

    setTimeout(() => {
        manage_mediaQuery(window.innerWidth);

        setBlub();

        __p(['loaderScreen' , 'removeLoader'] , () =>{})()
    }, 3000);
    
})

window.addEventListener('resize' , e =>{
    
    const setBlub = () =>{
        const element = document.querySelectorAll(".page5Tabs");

        let initPosition = 0;
    
        let lineHeight = 0;
    
        let elementArray = [];
    
        let elementHeights = [];
    
        for(let i = 0; i < element.length; i++)
        {
            const elementHeight = element[i].offsetHeight;
    
            if(i === 0)
            {
                initPosition = 0;
                lineHeight += elementHeight + 100;
            }else{
                initPosition += element[i-1].offsetHeight;
                initPosition += 100 // row-gap
    
                lineHeight = element[i].offsetHeight + 100;
            }
    
            // lineHeight += (elementHeight + 100);
    
            elementHeights.push(lineHeight)
    
            elementArray.push(initPosition)
    
            console.log(elementHeight)
        }
    
        const state = __g("bulb_roadMap");
        state.size.blob = elementArray;
        state.size.line = elementHeights
        __u("bulb_roadMap" , {type:"a" , value:state})
    }

    __p(['loaderScreen' , 'showLoader'] , () =>{})()

    setTimeout(() => {
        manage_mediaQuery(window.innerWidth);

        setBlub();

        // MainRenderInit();

        __p(['loaderScreen' , 'removeLoader'] , () =>{})()
    }, 1000);
})