import { __c, __SYD , __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"

__SYD.buyToken = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:1200px;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;margin:4rem 0;padding:10px;",
            class:`${__p(['page4','animate'],false) ? "toke_animate" : ""}` , id:"toke"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:capitalize;font-weight:400;padding:5px;width:fit-content;color:#fff;text-align:center;text-shadow:2px 2px 0px rgba(255, 215, 0, 0.2);font-family:shine;`,
                    class:"text1 headerMainGrad text_border_decoration"
                },
                [
                    'Buy Build',__c("span",{style:"min-height:50px;min-width:40px;background-size:150%;background-image:url(./assets/buildGif.gif);display:inline-block;"},[],{genericStyle:['bg_cover']}),' on uniswap'
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;width:100%;row-gap:35px;height:fit-content;align-items:center;"
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['subContainer','scaled'],false) ? '20px' : '20px'};text-transform:none;font-weight:400;padding:5px;width:90%;color: #FFD700;text-align:center;text-shadow:1px 1px 2px #000;`,
                            class:"text2"
                        },
                        [
                            'Join us as we redefine the way people interact with and build AI. Welcome to the world of ' , __c("span",{style:"font-family:shine;" , class:"headerMainGrad spaceCharacters"},["$BUILD "]) , 'AI. Welcome to the future.',
                        ]
                    ),
                    __SYD.launch_app_btn()
                ]
            ),
        ]
    )
}
