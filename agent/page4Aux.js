import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page4Aux_creationDescription = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;background-attachment:fixed;padding:10px 10px;",
            id:"customise"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:400;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:2px 2px 0px rgba(255, 215, 0, 0.2);font-family:shine;`,
                    class:"headerMainGrad"
                },
                [
                    'Customising Your Agent AI'
                ]
            ),

            __SYD.create_custom_card1()

            // __c(
            //     "div",
            //     {
            //         style:"height:fit-content;width:100%;max-width:1200px;background-color:#2C2F40;padding:20px;border-radius:15px;perspective:600px"
            //     },
            //     [
            //         __c(
            //             "img",
            //             {
            //                 style:"height:auto;width:100%;border-radius:inherit;box-shadow:inset 0 8px 12px rgba(0, 0, 0, 0.6),inset 0 -8px 12px rgba(255, 255, 255, 0.1),0 4px 10px rgba(0, 0, 0, 0.7);transform-style:preserve-3d;",
            //                 src:"./assets/createA.png",
            //                 class:"smooth_hover__3d"
            //             }
            //         )
            //     ]
            // ),

            // __c(
            //     "div",
            //     {
            //         style:"height:fit-content;width:100%;max-width:1200px;background-color:#2C2F40;padding:20px;border-radius:15px;perspective:600px"
            //     },
            //     [
            //         __c(
            //             "img",
            //             {
            //                 style:`height:auto;width:100%;border-radius:inherit;box-shadow:inset 0 8px 12px rgba(0, 0, 0, 0.6),inset 0 -8px 12px rgba(255, 255, 255, 0.1),0 4px 10px rgba(0, 0, 0, 0.7);transform-style:preserve-3d;`,
            //                 src:"./assets/createB.png",
            //                 class:"smooth_hover__3d"
            //             }
            //         )
            //     ]
            // ),
        ],
        {
            createState:{
                stateName:"page4Aux_creationDescription",
                state:{
                    flexVal:false
                }
            },
            mediaQuery:{
                query:[{size:">650px" , prop:{flexVal:true}}],
                defState:{flexVal:false}
            }
        }
    )
}

__SYD.create_custom_card1 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:1200px;min-height:900px;background:transparent;display:flex;flex-direction:column;gap:4px;perspective:800px;"
        },
        [
            __SYD.imageGrid1(["grid1.jpg" , "grid2.webp"]),
            __SYD.imageGrid2(["grid3.webp" , "grid4.png" , "grid5.jpg"]),
            __SYD.imageGrid3(["grid6.png" , "grid7.jpg"]),
        ]
    )
}

__SYD.imageGrid1 = ([image1 , image2] = []) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;gap:4px;flex-wrap:wrap;justify-content:center;"
        },
        [
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".6" : "1"};background-image:url(./assets/${image1});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"};`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".4" : "1"};background-image:url(./assets/${image2});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
        ]
    )
}

__SYD.imageGrid2 = ([image1 , image2 , image3] = []) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;gap:4px;flex-wrap:wrap;justify-content:center;"
        },
        [
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".3" : "1"};background-image:url(./assets/${image1});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".4" : "1"};background-image:url(./assets/${image2});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".3" : "1"};background-image:url(./assets/${image3});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
        ]
    )
}

__SYD.imageGrid3 = ([image1 , image2] = []) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;gap:4px;flex-wrap:wrap;justify-content:center;"
        },
        [
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".6" : "1"};background-image:url(./assets/${image1});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
            __c(
                "div",
                {
                    style:`height:300px;width:100%;flex:${__p(['page4Aux_creationDescription','flexVal'],false) ? ".4" : "1"};background-image:url(./assets/${image2});min-width:${__p(['page4Aux_creationDescription','flexVal'],false) ? "300px" : "100%"}`,
                    class:"three_d_card_style"
                },[],{genericStyle:["bg_cover"],events:{onmouseover:e =>{picTabEvent_overlay(e)},onmouseout:e =>{picTabEvent_overlay_not(e)}}}
            ),
        ]
    )
}

function picTabEvent_overlay(ev)
{
    ev.target.style.zIndex = "100"
}

function picTabEvent_overlay_not(ev)
{
    ev.target.style.zIndex = "0"
}