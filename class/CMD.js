class CMD{
   constructor(){
      const execSync = require('child_process').execSync;
      this.exec=execSync
      this.command=this.command.bind(this)
   }
   command(cmd) {
      const stdout = this.exec(cmd);
      console.log(`stdout: ${stdout}`);
   }
}
module.exports=CMD