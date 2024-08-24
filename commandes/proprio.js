const {zokou}=require("../framework/zokou")







zokou({nomCom:"reboot",categorie:"Mods",reaction:"☢️"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("command reserved for the owner only");
  }

  const {exec}=require("child_process")

    repondre("*Cyberion-V1 is rebooting...kindly be patient*");

  exec("pm2 restart all");
  

  



})
