import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v2.js";

__SYD.floatBot_container = () =>{
    return __c(
        "div",
        {
            style:"position:fixed;bottom:20px;left:20px;z-index:9999;height:120px;width:90px;pointer-events:none;",
            
        },
        [
            __c(
                "span",
                {
                    style:"position:absolute;top:calc(25px + 40px);left:50%;transform:translateX(-50%) rotateZ(180deg);height:40px;width:40px;background-image:url('./assets/propel.gif')",
                    class:"floatBot_animate__"
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                "span",
                {
                    style:`height:40px;width:40px;position:absolute;top:20px;left:50%;transform:translateX(-50%);background:${__p(["floatBot_container","redAlert"],false) ? "#FF2400" : "linear-gradient(90deg, #017ca9, #12fcfc)"};z-index:50;border-radius:50%;transition:background linear 1s;`,
                    class:"floatBot_animate"
                }
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;background-image:url(./assets/floatBot.png);z-index:100;position:absolute;left:50%;",
                    class:"floatBot_animate"
                },[
                    __c("span",{style:`transition:background linear 1s , width linear 1.5s;position:absolute;top:30px;left:35px;height:10px;width:${__p(["floatBot_container","redAlert"],false) ? "7px" : "5px"};background:${__p(["floatBot_container","redAlert"],false) ? "#8B0000" : "#007BFF"};box-shadow:0 0 5px ${__p(["floatBot_container","redAlert"],false) ? "#FF2400" : "#00FFFF"};border-radius:3px;transform:translateX(${__p(["floatBot_container","eyeX"],0)}px) translateY(${__p(["floatBot_container","eyeY"],0)}px)`}),
                    __c("span",{style:`transition:background linear 1s , width linear 1.5s;position:absolute;top:30px;left:48px;height:10px;width:${__p(["floatBot_container","redAlert"],false) ? "7px" : "5px"};background:${__p(["floatBot_container","redAlert"],false) ? "#8B0000" : "#007BFF"};box-shadow:0 0 5px ${__p(["floatBot_container","redAlert"],false) ? "#FF2400" : "#00FFFF"};border-radius:3px;transform:translateX(${__p(["floatBot_container","eyeX"],0)}px) translateY(${__p(["floatBot_container","eyeY"],0)}px)`}),
                ],{genericStyle:['bg_fit']}
            )
        ],
        {
            createState:{
                stateName:"floatBot_container",
                state:{
                    mPOSX:0,
                    mPOSY:0,
                    mPOSX_old:0,
                    mPOSY_old:0,
                    mouseHorizontal:"",
                    mouseVertical:"",
                    eyeRangeX:[-1 , 5],
                    eyeRangeY:[-5 , 5],
                    eyeX:0,
                    eyeY:0,
                    redAlert:false,
                    normalisation:(a,b,x,xmin,xmax) =>{
                        return a + (((x - xmin)*(b-a)) / (xmax - xmin))
                    },
                    updatePOS:({x , y} = {}) =>{
                        const state = __g("floatBot_container");
                        state.mPOSX = x;
                        state.mPOSY = y;
                        __u("floatBot_container" , {type:"a" , value:state})
                    },
                    updateDir:() =>{
                        const state = __g("floatBot_container");
                        const diffX = state.mPOSX - state.mPOSX_old;

                        const diffY = state.mPOSY - state.mPOSY_old;

                        switch(true)
                        {
                            case diffX > 0:
                                state.mouseHorizontal = "right";
                            break;
                            case diffX < 0:
                                state.mouseHorizontal = "left";
                            break;
                            default:
                                state.mouseHorizontal = "null"
                        }

                        switch(true)
                        {
                            case diffY > 0:
                                state.mouseVertical = "down";
                            break;
                            case diffY < 0:
                                state.mouseVertical = "up";
                            break;
                            default:
                                state.mouseVertical = "null"
                        }

                        if(state.mPOSX < 110 && state.mPOSY > window.innerHeight - 140)
                        {
                            state.redAlert = true;
                            state.eyeRangeX = [-1 , 2];
                            state.eyeRangeY = [-2 , 2];
                        }else{
                            state.redAlert = false;
                            state.eyeRangeX = [-1 , 5];
                            state.eyeRangeY = [-5 , 5];
                        }

                        state.mPOSX_old = state.mPOSX;
                        state.mPOSY_old = state.mPOSY;

                        __u("floatBot_container" , {type:"a" , value:state});

                        if(state.mouseHorizontal !== "null" || state.mouseVertical !== "null")
                        {
                            __p(["floatBot_container" , "updateBotEye"])();
                        }
                    },
                    updateBotEye: () =>{
                        const center = [window.innerWidth/2 , window.innerHeight/2];
                        const {mPOSX , mPOSY , mouseHorizontal , mouseVertical , normalisation , eyeRangeX , eyeRangeY , eyeX , eyeY} = __p(["floatBot_container"])

                        const mainX = mPOSX - center[0];

                        const mainY = mPOSY - center[1];

                        let normalisedX;
                        let normalisedY;
                        if(mouseHorizontal === "right")
                        {
                            normalisedX = normalisation(0 , eyeRangeX[1] , mPOSX , center[0] , center[0]*2);
                        }else if(mouseHorizontal === "left")
                        {
                            normalisedX = normalisation(eyeRangeX[0] , 0 , mPOSX , -110 , center[0]);
                        }else normalisedX = eyeX;

                        if(mouseVertical === "down")
                        {
                            normalisedY = normalisation(0 , eyeRangeY[1] , mPOSY , center[1] , (center[1]*2) + 140);
                        }else if(mouseVertical === "up")
                        {
                            normalisedY = normalisation(eyeRangeY[0] , 0 , mPOSY , 0 , center[1]);
                        }else normalisedY = eyeY;

                        const state = __g("floatBot_container");
                        state.eyeX = normalisedX;//state.redAlert ? 0 : 
                        state.eyeY = normalisedY;
                        __u("floatBot_container" , {type:"a" , value:state});
                    }
                }
            }
        }
    )
}

__SYD.floatBot_eye1 = () =>{
    return __c(
        "span",
        {
            style:""
        }
    )
}
const mousePos = () =>{
    
}

export function floatBot__func()
{
    setInterval(() => {
        __p(["floatBot_container" , "updateDir"])();
    }, 50);
}

window.addEventListener("mousedown" , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:e.clientX , y:e.clientY})
})

window.addEventListener("mouseup" , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:window.innerWidth/2 , y:window.innerHeight/2})
})

window.addEventListener("touchstart" , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:e.touches[0].clientX , y:e.touches[0].clientY})
})

window.addEventListener("touchend" , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:window.innerWidth/2 , y:window.innerHeight/2})
})

window.addEventListener('mousemove' , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:e.clientX , y:e.clientY})
})

window.addEventListener("touchmove" , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:e.touches[0].clientX , y:e.touches[0].clientY})
})

window.addEventListener('mouseout' , e =>{
    __p(["floatBot_container" , "updatePOS"])({x:window.innerWidth/2 , y:window.innerHeight/2})
})