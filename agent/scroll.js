import { __v , __p, manage_mediaQuery, __g, __u} from "./sydneyDom_v2.js";
import { getThreeAccess } from "./threeDRenderScript.js";

const scroll_element = ['page1' , 'about_page' , 'page3' , 'page4' , 'page5'];//, 'about_page' , 'page2' , 'page3' ,'page4' ,'page5'

const createLabels = () =>{
    const obj = {};
    scroll_element.forEach((val,id) =>{
        obj[`${id}`] = false;
    })
    return obj
}

const scroll_element_labels = createLabels();

addEventListener("DOMContentLoaded" , e =>{
    manage_mediaQuery(window.innerWidth)
    initiatePage1AutoText();
    initiatePage4AutoText();
    __v['container'].addEventListener("scroll" , (e) =>{
        let scrollY = window.scrollY; 
        // console.log(e.target.scrollTop * 0.1)
        if(window.innerWidth > window.innerHeight)
        {
            // getThreeAccess().camera.position.setZ(e.target.scrollTop * 0.01); // Adjust the multiplier for speed
        }
        for(let i = scroll_element.length-1; i >= 0 ; i--)
            {
                if(e.target.scrollTop > __v[scroll_element[i]].offsetTop - (window.innerHeight/2))
                {
                    if(!scroll_element_labels[`${i}`])
                    {
                        __p([scroll_element[i],'init_count'],() =>{})();
                        // if(scroll_element[i] !== "page1")
                        // {
                        //     __v['scaleNav'].style.backgroundColor = "#171717"
                        //     // __v['siteMainTitle'].style.backgroundImage = "url('./assets/zChainLogo__.png')"
                        // }else
                        // {
                        //     __v['scaleNav'].style.backgroundColor = "#1490ce";
                        //     // __v['siteMainTitle'].style.backgroundImage = "url('./assets/zChainLogo.png')"
                        // }
                    }
                    for(let j = i-1; j >= 0; j--)
                    {
                        if(!scroll_element_labels[`${i}`])
                        {
                            scroll_element_labels[`${j}`] = false;
                            __p([scroll_element[j],'del_count'],() =>{})();
                        }
                    }
        
                    for(let j = i+1; j < scroll_element.length; j++)
                    {
                        if(!scroll_element_labels[`${i}`])
                        {
                            scroll_element_labels[`${j}`] = false;
                            __p([scroll_element[j],'del_count'],() =>{})();
                        }
                    }
                    scroll_element_labels[`${i}`] = true;
                    break;
                }else{
                    scroll_element_labels[`${i}`] = false;
                }
            }
    })
})

addEventListener("scrollend", e =>{//__v[scroll_element[0]].offsetTop - 120
    //window.scrollY
    console.log("scrolling")
    
})

function initiatePage1AutoText()
{
    if(__p(['page1' , 'write'] , "").length >= __p(['page1' , 'text'] , "").length)
    {
        let timer = setTimeout(() => {
            __p(['page1' , 'restartType'] , () =>{})();
            initiatePage1AutoText()
        }, 2000);
    }else
    {
        let timer = setTimeout(() => {
            __p(['page1' , 'autoType'] , () =>{})();

            initiatePage1AutoText()
        }, 100);
    }
}


function initiatePage4AutoText()
{
    if(__p(['page4' , 'write'] , "").length >= __p(['page4' , 'text'] , "")[__p(['page4' , 'textIterator'] , 0)].length)
    {
        const state = __g("page4");
        if(__p(['page4' , 'textIterator'] , 0) < 2)
        {
            state.textIterator++;
        }else
        {
            state.textIterator = 0
        }
        __u("page4" , {type:"a" , value:state})

        let timer = setTimeout(() => {
            __p(['page4' , 'restartType'] , () =>{})();
            initiatePage4AutoText()
        }, 2000);
    }else
    {
        let timer = setTimeout(() => {
            __p(['page4' , 'autoType'] , () =>{})();

            initiatePage4AutoText()
        }, 60);
    }
}