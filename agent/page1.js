import { __c, __g, __p, __SYD, __u, __v } from "./sydneyDom_v2.js"

__SYD.page1 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:30px;padding:0 10px;padding-top:90px;z-index:500;"
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;align-items:center;width:100%;max-width:800px;min-height:300px;flex-direction:column;row-gap:20px;justify-content:center;color:#ffffff;"
                },
                [
                    __c(
                        "h1",
                        {style:"color:#fff;text-align:center;font-family:shine;position:relative;"},
                        [
                            __c("span" , {class:"headerMainGrad" , style:""},["Build"]) , __c("span",{style:"min-height:60px;min-width:60px;background-size:150%;background-image:url(./assets/buildGif.gif);display:inline-block;"},[],{genericStyle:['bg_cover']})
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"font-size:17px;text-align:center;font-weight:900;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;"
                        },
                        [
                            // __p(['page1' , 'write'] , "") , __c("small",{style:"margin-left:15px;display:inline;",class:"autoType"},[]),
                            "In a world where AI has become essential, Build AI emerges as a revolutionary platform that transforms the way we create artificial intelligence."
                        ]
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;column-gap:15px;row-gap:15px;column-gap:25px;width:fit-content;justify-content:center;align-items:center;flex-wrap:wrap;background:#121212;border-radius: 12px;box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.1);padding:20px;border:2px solid #E6E6E6;"
                },
                [
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , class_:"navClick btns_style" , style:"font-size:16px;font-weight:700;"})}),
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"Twitter" , class_:"navClick btns_style" , style:"font-size:16px;font-weight:700;"})}),
                    __c(
                        "div",
                        {
                            style:"width:100%;display:inherit;justify-content:center;"
                        },
                        [
                            __SYD.launch_app_btn()
                        ]
                    )
                    
                ]
            ),
            
        ],
        {
            createState:{
                stateName:"page1",
                state:{
                    text:"In a world where AI has become essential, Build AI emerges as a revolutionary platform that transforms the way we create artificial intelligence.",
                    write:"",
                    autoType:() =>{
                        const state = __g("page1")
                        if(__p(['page1' , 'write'] , "").length < __p(['page1' , 'text'] , "").length)
                        {
                            state.write = state.text.slice(0 , state.write.length+1);
                        }
                        __u("page1" , {type:"a" , value:state})
                    },
                    restartType:() =>{
                        const state = __g("page1");
                        state.write = "";
                        __u("page1" , {type:"a" , value:state})
                    },
                    init_count:() =>{
                            __v["page1"].querySelector("h1").classList.add("h1_animate")
                    },
                    del_count:() =>{
                        __v["page1"].querySelector("h1").classList.remove("h1_animate")
                    }
                }
            }
        }
    )
}