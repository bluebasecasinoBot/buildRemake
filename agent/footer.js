import { SYD_VAR, __SYD, __c , __p} from "./sydneyDom_v2.js";
import "./icon.js"
import "./text_lib.js"

__SYD.footer_main_parent = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        'div',
        {
            style:`height:fit-content;padding:${check ? "20px 50px" : "20px 10px"};padding-top:50px;padding-bottom:20px;background:#121212;width:100%;display:flex;flex-direction:column;row-gap:40px;margin-top:50px;padding-bottom:150px;`
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;column-gap:30px;flex-wrap:wrap;row-gap:30px;width:100%;height:fit-content;justify-content:center;align-items:flex-start;'
                },
                [
                    // __SYD.footer_main_child1(),
                    __SYD.footer_main_child2(),
                    __SYD.footer_main_child3()
                ]
            ),
            __c('hr',{style:'height:2px;width:100%;background:lightgrey'}),
            __c(
                'div',
                {
                    style:'display:flex;padding:10px;justify-content:center;align-items:center'
                },
                [
                    __SYD.text_lib_type_p_glob_vmax({cnt:`© ${new Date().getFullYear()} All Right Reserved`,size:'12px',clr:'#fff'})
                ]
            )
        ]
    )
}

__SYD.footer_main_child2 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;row-gap:20px;margin-top:50px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Socials' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:50px'
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px'
                        },[
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-x-twitter' , clr :'#FFD700'}),//<i class="fa-solid fa-envelope-open-text"></i>
                                    __c('a',{href:"#"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Twitter', size:'14px' , w:'500',clr:'#fff'})]),
                                ]
                            ),
                
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-telegram' , clr :'#FFD700'}),//<i class="fa-solid fa-phone-volume"></i>
                                    __c('a',{href:"#"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Telegram', size:'14px' , w:'500',clr:'#fff'})]),
                                ]
                            ),
                
                            // __c(
                            //     'div',
                            //     {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center;max-width:400px;'},
                            //     [
                            //         __SYD.iconify_20px({clr:'#ffc2cbbb' , attr:'fa-solid fa-location-dot'}),//<i class="fa-solid fa-location-dot"></i>
                            //         __SYD.text_lib_type_p_glob_vfit({cnt:'Ivviera main address', size:'14px' , w:'500',clr:'#fff'})
                            //     ]
                            // ),
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.footer_main_hyperLink_txt = ({link = '' , cnt = ''} = {}) =>{
    return __c(
        'a',
        {
            href:link
        },
        [
            __SYD.text_lib_type_p_glob_vmax({cnt:cnt, size:'14px',w:'500',clr:'#fff' , inject:"font-weight:700;"})
        ]
    )
}

__SYD.footer_main_child3 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:100%;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;column-gap:30px;row-gap:30px;margin-top:50px'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'NAV LINKS' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px;'
                },[
                    __SYD.footer_main_hyperLink_txt({link:'#about',cnt:'About'}),
                    __SYD.footer_main_hyperLink_txt({link:'#toke',cnt:'Tokenomics'}),
                    __SYD.footer_main_hyperLink_txt({link:'#roadMap',cnt:'Road map'}),
                    __SYD.footer_main_hyperLink_txt({link:'#feature',cnt:'Features'}),
                    __SYD.footer_main_hyperLink_txt({link:'#community',cnt:'Contact us'}),
                ]
            )
        ]
    )
}
