import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page6 = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;left:0;bottom:0;top:auto;min-height:30vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;column-gap:3.5rem;padding:10px 10px;background:#121212;box-shadow: 0 -5px 15px rgba(255, 215, 0, 0.3);padding:10px 20px;flex-wrap:wrap;"
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;row-gap:2.5rem;column-gap:2.5rem;flex-wrap:wrap;"
                },
                [
                    __SYD.footerImg(),
                    __SYD.telegram_app_section_footer()
                ]
            ),
            __c(
                "hr",
                {
                    style:"width:100%;opacity:.4;"
                }
            ),

            __c(
                "p",
                {
                    style:"font-size:14px;font-weight:400;"
                },
                [
                    "ZeroChain - Copyright© ~ 2024"
                ]
            )
            
        ]
    )
}

__SYD.footerImg = () =>{
    return __c(
        "div",
        {
            style:"text-transform:uppercase;display:flex;column-gap:5px;min-width:200px;height:80px;background-image:url(../assets/logo.png);cursor:pointer;background-image:url('./assets/footer.png')"
        },
        [
        ],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    // navFunction_get({route:""})
                }
            }
        }
    )
}

__SYD.telegram_app_section_footer = () =>{
    return __c(
        "div",
        {
            style:`padding:10px 0;display:flex;column-gap:40px;list-style-type:none;text-transform:capitalize;color:#fff;align-items:center;`
        },
        [
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"X" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),

            __c(
                "div",
                {
                    style:"min-height:45px;min-width:45px;height:45px;width:45px;background-image:url(./assets/tg.svg);background-color:#1490ce;background-size:60%;",
                    class:"navClick"
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                "div",
                {
                    style:"min-height:45px;min-width:45px;height:45px;width:45px;background-color:#1490ce;background-image:url(./assets/tw.png);background-size:80%;",
                    class:"navClick"
                },[],{genericStyle:['bg_fit']}
            )
        ]
    )
}