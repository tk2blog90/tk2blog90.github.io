const {exec} = require('child_process');

/**
 * Run command asynchronously.
 * @param command {string} Command to run.
 * @returns {Promise<unknown>}
 */
function runCommand(command) {
  return new Promise((resolve, reject) => {
    const process = exec(command);
    
    process.on('error', (code, signal) => {
      console.log(`command error: "${command}"`, code, signal);
      reject();
    });
    
    process.on('exit', (code, signal) => {
      console.log(`command exit: "${command}"`, code, signal);
      resolve();
    });
  });
}

/**
 * Run push process.
 * @returns {Promise<void>}
 */
async function run() {
  // Move to this directory.
  await runCommand(`cd ${__dirname}`);
  
  // Add missing files.
  await runCommand(`git add .`);
  
  // Commit changes.
  await runCommand(`git commit -m ${new Date().toISOString()}`);
  
  // Push.
  await runCommand(`git push origin master`);
}

run();
