import { __c, __g, __p, __SYD, __u, __v, SYD_VAR } from "./sydneyDom_v2.js";

__SYD.scaleNav = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        "div",
        {
            style:`position:fixed;top:0px;bottom:auto;left:0;width:100%;padding:${check ? "5px 30px" : "5px 10px"};display:flex;align-items:center;column-gap:50px;justify-content:space-between;user-select:none;z-index:1000;background:rgba(18, 18, 18, 0.9);backdrop-filter: blur(10px);box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);color:${"#ffc2cb"};font-weight:900;transition:unset;box-shadow:0px 2px 3px #000;transform:translateY(-1px);transition:all linear .3s;`//background:linear-gradient(#000,#0000);
        },
        [   
            __SYD.siteMainTitle(),
            __SYD.scaleNavComponent(),
            __SYD.telegram_app_section(),
            __SYD.nav_menu_tog(),
            __SYD.dropDownNavMenu(),
        ],
        {
            createState:{
                stateName:"scaleNav",
                state:{
                    togNav:false,
                    bufferScale:false
                }
            }  
        }
    )
}


__SYD.siteMainTitle = () =>{
    return __c(
        "div",
        {
            style:"text-transform:uppercase;display:flex;column-gap:5px;width:200px;height:80px;justify-content:flex-start;align-items:center;"
        },
        [
            __c(
                "div",
                {
                    style:"height:50px;width:50px;background-image:url(../assets/logo.png);cursor:pointer;background-image:url('./assets/logo.png');background-size:100%"
                },[],
                {
                    genericStyle:["bg_cover"]
                }
            ),
            __c(
                "div",
                {
                    style:"display:flex;height:fit-content;width:fit-content;align-items:flex-end;gap:5px;"
                },
                [
                    __SYD.pTag({text:"Build" , class_:"headerMainGrad" , style:"font-family:shine;font-size:17px;font-weight:900;color:#fff;"}),__c("span",{style:"min-height:40px;min-width:40px;background-size:100%;background-image:url(./assets/buildPng.png);display:inline-block;"},[],{genericStyle:['bg_cover']})
                ]
            ),
            
        ],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    // navFunction_get({route:""})
                }
            },
            type:"siteMainTitle"
        }
    )
}

__SYD.scaleNavComponent = () =>{

    return __c(
        "nav",
        {
            style:`padding:10px 0;display:${__p(["subContainer" , "scaled"],false) ? "flex" : "none"};column-gap:40px;list-style-type:none;text-transform:capitalize;color:#fff;`
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"About" , function_:{onclick:(() =>{
                // __v['nav_menu_tog'].click()

                location.href = "#about"
            })} , class_:`navText` , style:"font-size:17px;font-weight:300;font-family:shine;"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Tokenomics" , function_:{onclick:(() =>{
                // __v['nav_menu_tog'].click()

                location.href = "#toke"
            })} , class_:`navText` , style:"font-size:17px;font-weight:300;font-family:shine;"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Road Map" , function_:{onclick:(() =>{
                // __v['nav_menu_tog'].click()

                location.href = "#roadMap"
            })} , class_:`navText` , style:"font-size:17px;font-weight:300;font-family:shine;"})}),
        ]
    )
}

__SYD.nav_menu_tog = () =>{

    return __c(
        "i",
        {
            style:`height:35px;width:35px;font-size:35px;display:${__p(["subContainer" , "scaled"],false) ? "none" : "block"};align-items:center;background-image:url(./assets/menu.svg);margin-right:10px;`,
            class:"click"
        },[],
        {
            genericStyle:['bg_cover'],
            type:"nav_menu_tog",
            events:{
                onclick:(e) =>{
                    const state = __g("scaleNav");
                    if(!state.togNav)
                    {
                        // e.target.classList.remove("fa-bars");
                        // e.target.classList.add("fa-xmark");

                        e.target.style.backgroundImage =  "url(./assets/close.svg)"                      
                    }else
                    {
                        // e.target.classList.add("fa-bars");
                        // e.target.classList.remove("fa-xmark");

                        e.target.style.backgroundImage =  "url(./assets/menu.svg)"  
                    }
                    console.log("clicking here")
                    if(state.togNav)
                    {
                        state.bufferScale = true;
                        const timer = setTimeout(() => {
                            const state = __g("scaleNav");
                            state.togNav = false;
                            __u('scaleNav' , {type:"a" , value:state})
                        }, 400);
                        console.log("closing");
                    }else
                    {
                        state.bufferScale = false;
                        state.togNav = true; 
                    }
                    // state.togNav = state.togNav ? false : true;
                    __u('scaleNav' , {type:"a" , value:state})
                }
            }
        }
    )
}


__SYD.dropDownNavMenu = () =>{
    const check_one = !__p(["subContainer" , "scaled"],false) && __p(['scaleNav' , 'togNav'],false);
    return __c(
        "div",
        {
            style:`height:calc(70vh - 70px);width:100vw;position:absolute;left:50%;transform:translateX(-50%);top:100%;display:${check_one ? "block" : "none"};overflow:hidden;`
        },
        [
            __SYD.dropDownNavMenu_el()
        ]
    )
}

__SYD.dropDownNavMenu_el = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;background:rgba(18, 18, 18, 0.9);backdrop-filter: blur(10px);box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);display:flex;flex-direction:column;row-gap:20px;padding:20px;color:#e6e6e6;text-transform:capitalize;animation-duration:.4s;",
            class:`drop_down_menu ${__p(['scaleNav' , 'bufferScale'],false) ? "navDropDown__reverse" : "navDropDown"}`
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"About" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#about"
            })} , style:"font-size:17px;font-weight:700;"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Tokenomics" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#toke"
            })} , style:"font-size:17px;font-weight:700;"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Roadmap" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#roadMap"
            })} , style:"font-size:17px;font-weight:700;"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Features" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#feature"
            })} , style:"font-size:17px;font-weight:700;margin-top:20px"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Contact Us" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#community"
            })} , style:"font-size:17px;font-weight:700;"})}),
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"terms" , style:"font-size:22px;font-weight:700;"}) , function_:{onclick:() =>{/*write a function here */ navFunction_get({route:"terms"})}}}),

        ]
    )
}

__SYD.telegram_app_section = () =>{
    return __c(
        "div",
        {
            style:`padding:10px 0;display:${__p(["subContainer" , "scaled"],false) ? "flex" : "none"};column-gap:40px;list-style-type:none;text-transform:capitalize;color:#fff;align-items:center;`
        },
        [
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"X" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Features" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#feature"
            })} , style:"font-size:12px;font-weight:400;font-family:shine;" , class_:"navText"})}),

            __SYD.ul_lists_el({child:__SYD.pTag({text:"Contact Us" , function_:{onclick:(() =>{
                __v['nav_menu_tog'].click()

                location.href = "#community"
            })} , style:"font-size:12px;font-weight:400;font-family:shine;" , class_:"navText"})}),
            __SYD.launch_app_btn()
        ]
    )
}
