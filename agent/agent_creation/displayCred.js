import { __c, __g, __p, __SYD, __u, __v } from "../sydneyDom_v2.js";

__SYD.cred_container = () =>{
    return __c(
        "div",
        {
            style:`padding:20px 16px;background:#121212;box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.1);border:2px solid #E6E6E6;display:${__p(["cred_container" , "display"],false) ? "flex" : "none"};flex-direction:column;row-gap:25px;border-radius:10px;width:100%;`
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:20px;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);" , class:"spaceCharacters"},["wallet Adx: "]),
                    __SYD.input_type_text({name:"wallet_adx" , type:"text" , ph:"Wallet Adx" , w:"500" , size:"16px" , inject:"background:#171717;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,.5);" , cls:"launch_btn" , otherProps:{readonly:true , value:__p(["cred_container" , "walletAdx"],"")}}),

                    __c("i" , {style:"font-size:25px;color:#FFD700;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-solid fa-copy"} click`},[],{
                        events:{
                            onclick:e =>{
                                navigator.clipboard.writeText(__p(["cred_container" , "walletAdx"],"")).then(() => {
                                    console.log("Text copied to clipboard!");

                                    __p(["popUp" , "displayText"])(`Wallet adx copied ... 🎉`);
                                    
                                }).catch(err => {
                                    console.error("Failed to copy text: ");

                                    __p(["popUp" , "displayText"])(`Failed to copy wallet adx: ${err.message}` , "warn");
                                });
                            }
                        }
                    }),
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:40px;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);" , class:"spaceCharacters"},["Paste Txn Id to confirm transaction: "]),
                    __SYD.input_type_text({name:"tnxID" , type:"text" , ph:"Enter Txn ID" , w:"500" , size:"16px" , inject:"background:#171717;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,1)" , cls:"launch_btn" , otherProps:{value:__p(["cred_container" , "txnId"],"")} , fnc:{
                        oninput: e =>{
                            __p(['cred_container','updateTxnId'])(e.target.value)
                        }
                    }}),

                    __c("i" , {style:"font-size:25px;color:#FFD700;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-regular fa-share-from-square"} click`},[],{
                        events:{
                            onclick:async e =>{
                                //clipboard copy text
                                __p(["createAi__sections_sec2" , "startAnimation_txn"])();
                                __v["loadTxn"].scrollIntoView();

                                __v['trackID__copy'].style.opacity = '.6';

                                __v['trackID__copy'].style.pointerEvents = 'none';

                                await fetch('https://agentb-server.fly.dev/checkTxnStatus__save', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({agentInfo:__p(['createAI__sections_main','userInfo']) , txnId:__p(['cred_container','txnId'])})
                                })
                                .then(response => response.json())
                                .then(data =>{
                                    if(data.status.includes("Failed"))
                                    {
                                        __p(["popUp" , "displayText"])(`${data.status}` , "error");

                                        __p(['createAi__sections_sec2' , 'updateTxnText'])(data.status , true);

                                    }else
                                    {
                                        __p(["popUp" , "displayText"])(`${data.status}`);

                                        __p(['createAi__sections_sec2' , 'updateTxnText'])(data.status);

                                        __v['trackID__copy'].style.opacity = '1';

                                        __v['trackID__copy'].style.pointerEvents = 'auto';

                                        __p(['cred_container' , 'updateTrackId'])(data.trackingID)
                                    }
            
                                    __p(["createAi__sections_sec2" , "endAnimation_txn"])();
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    e.target.style.pointerEvents = "none";
                                    e.target.style.opacity = "1"
                                });
                            }
                        }
                    }),
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:20px;opacity:.6;pointer-events:none;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);" , class:"spaceCharacters"},["Tracking ID: "]),
                    __SYD.input_type_text({name:"wallet_adx" , type:"text" , ph:"Tracking ID" , w:"500" , size:"16px" , inject:"background:#171717;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,.5);" , cls:"launch_btn" , otherProps:{readonly:true , value:__p(["cred_container" , "Track_id"],"")}}),

                    __c("i" , {style:"font-size:25px;color:#FFD700;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-solid fa-copy"} click`},[],{
                        events:{
                            onclick:e =>{
                                navigator.clipboard.writeText(__p(["cred_container" , "Track_id"],"")).then(() => {
                                    console.log("Text copied to clipboard!");

                                    __p(["popUp" , "displayText"])(`tracking ID copied ... 🎉`);
                                    
                                }).catch(err => {
                                    console.error("Failed to copy text: ");

                                    __p(["popUp" , "displayText"])(`Failed to copy Tracking ID: ${err.message}` , "warn");
                                });
                            }
                        }
                    }),
                ],
                {
                    type:"trackID__copy"
                }
            ),
        ],
        {
            createState:{
                stateName:"cred_container",
                state:{
                    display:false,
                    walletAdx:"",
                    Track_id:"",
                    txnId:"",
                    displayFunc:() =>{
                        const state = __g("cred_container");
                        state.display = true;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    un_displayFunc:() =>{
                        const state = __g("cred_container");
                        state.display = false;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateCred:(walletAdx) =>{
                        const state = __g("cred_container");
                        state.walletAdx = walletAdx;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    clearCred:() =>{
                        const state = __g("cred_container");
                        state.walletAdx = "";
                        state.Track_id = "";
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateTxnId:(ID) =>{
                        const state = __g("cred_container");
                        state.txnId = ID;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateTrackId:(ID) =>{
                        const state = __g("cred_container");
                        state.Track_id = ID;
                        __u("cred_container" , {type:"a" , value:state})
                    }, 
                }
            }
        }
    )
}