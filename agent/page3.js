import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page3 = () =>{
    return __c(
        "div",
        {
            style:"min-height:unset;height:fit-content;min-height:300px;width:90%;max-width:1200px;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;border-radius:15px;background: rgba(255, 255, 255, 0.1);border:1px solid rgba(255, 255, 255, 0.2);box-shadow:rgba(255, 255, 255, 0.1) 0px 4px 10px;",
            class:`${__p(['page3','animate'],false) ? "join_animate" : ""}`,//bg_animate_grad leftAngle__target rightAngle__target main_page_tab_class
            id:"community"
        },

        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '40px' : '25px'};text-transform:capitalize;font-weight:400;padding:5px;text-align:center;text-shadow:2px 2px 0px rgba(255, 215, 0, 0.2);font-family:shine;`,
                    class:"text1 headerMainGrad"
                },
                [
                    'Ready to build and customise your ' , __c("span",{style:"font-family:shine;" , class:"headerMainGrad spaceCharacters"},["$BUILD "]) , ' AI?',
                ]
            ),
            __c(
                "p",
                {
                    style:"font-size:20px;color:#FFD700;width:100%;text-align:center;"
                },
                [
                    'Become part of our community and advance your expertise in agent building!'
                ]
            ),
            __SYD.community_btn()
        ],
        {
            createState:{
                stateName:"page3",
                state:{
                    animate:false,
                    init_count:() =>{
                        const state = __g('page3');
                        state.animate = true;
                        __u('page3' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page3');
                        state.animate = false;
                        __u('page3' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}