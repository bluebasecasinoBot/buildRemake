import { __c, __SYD , __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"

__SYD.page4 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;margin:4rem 0;",
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
                    'tokenomics',
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
                            style:`font-size:20px;text-transform:none;font-weight:500;padding:5px;width:100%;color:#FFD700;text-align:center;text-shadow:1px 1px 2px #000;`,
                            class:"text2"
                        },
                        [
                            __c("span",{style:"font-family:shine;font-size:16px;" , class:"headerMainGrad spaceCharacters"},["$BUILD "]),'is not just a utility token—it’s the catalyst for innovation on Build AI. Minted on the Base chain,' , __c("span",{style:"font-family:shine;font-size:16px;" , class:"headerMainGrad spaceCharacters"},[" $BUILD "]), 'serves multiple purposes',
                        ]
                    ),

                    __c(
                        'p',
                        {
                            style:`font-size:18px;line-height:25px;color:#fff;font-weight:900;max-width:900px;width:100%;text-align:center;text-shadow:1px 1px 2px #000;color:#fff;`,
                            class:"text3"
                        },
                        [
                            __p(['page4' , 'write'] , "") , __c("small",{style:"height:30px;margin-left:15px;display:inline;",class:"autoType__fast"},[]),
                        ]
                    )
                ]
            ),
        ],
        {
            // genericStyle:["bg_cover"],
            createState:{
                stateName:"page4",
                state:{
                    index:0,
                    write:"",
                    textIterator:0,
                    text:[
                        "Commissioning AI Creations 🤖 - Use $BUILD to deploy custom AI models tailored to your needs.",
                        "Staking & Governance 🗳️ - Stake your tokens to vote on platform enhancements and future directions.",
                        "Earning Through Contribution 💰 - Gain $BUILD by contributing data, testing new features, or sharing innovative solutions."
                    ],
                    autoType:() =>{
                        const state = __g("page4")
                        if(__p(['page4' , 'write'] , "").length < __p(['page4' , 'text'] , "")[__p(['page4' , 'textIterator'] , 0)].length)
                        {
                            state.write = state.text[__p(['page4' , 'textIterator'] , 0)].slice(0 , state.write.length+1);
                        }
                        __u("page4" , {type:"a" , value:state})
                    },
                    restartType:() =>{
                        const state = __g("page4");
                        state.write = "";
                        __u("page4" , {type:"a" , value:state})
                    },
                    animate:false,
                    init_count:() =>{
                        const state = __g('page4');
                        state.animate = true;
                        __u('page4' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page4');
                        state.animate = false;
                        __u('page4' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}
