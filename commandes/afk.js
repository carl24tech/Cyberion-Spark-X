const {zokou} = require("../framework/zokou") ;
const afkfunc = require("../bdd/afk") ;


zokou({
    nomCom : 'afk',
    categorie : 'Mods',
  } , async (dest,zk,commandeOptions) => {
  
   const {ms , repondre ,superUser , arg} = commandeOptions ;
  
   if (!superUser) {repondre('you are not allowed to use this command') ; return}
  
   if (!arg[0]) {

        let result = await afkfunc.changeAfkState(1,"on") ;

        if (result === "not defined") {
            
            repondre("You have not updated a parameter for AFk (Away From Keyboard)\n To record an afk message please enter a message after the command then an image link (the link is optional)") ;
        
        } else {

            await afkfunc.changeAfkState(1,"on") ;
            repondre("The AFK message has been activated") ;
        }
    } else {

        try {

        let text = [] ;
        let url = "no url";

        arg.forEach(element => {
            
            if (element.endsWith(".jpg") || element.endsWith(".png") || element.endsWith(".jpeg")){
                url = element ;
            } else if (element != undefined) {
                text.push(element) ;
            }
        });

        await afkfunc.addOrUpdateAfk(1,text.join(" "),url) ;

        repondre("The afk has been saved, retype the afk command to activate it") ;

        } catch (error) {
            console.log(error) ;
            repondre("An error occurred while saving the afk") ;
        }
    }
  
  }) ;
