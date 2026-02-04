// TRAP MONITORING WORKER
// Background thread that monitors and restores trap state

let trapActive = true;
let checkpointsPassed = {};
let monitoringInterval = null;

// Initialize monitoring
function startMonitoring() {
  if (monitoringInterval) return;
  
  monitoringInterval = setInterval(() => {
    // Send heartbeat to main thread
    self.postMessage({
      type: 'HEARTBEAT',
      timestamp: Date.now(),
      checkpoints: checkpointsPassed,
      trapActive
    });
    
    // Check if trap should be restored
    if (trapActive) {
      self.postMessage({
        type: 'RESTORE_TRAP',
        reason: 'periodic_check'
      });
    }
  }, 500); // Check every 500ms
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
  const { type, data } = event.data;
  
  switch(type) {
    case 'INIT':
      trapActive = true;
      startMonitoring();
      self.postMessage({ type: 'INITIALIZED' });
      break;
      
    case 'CHECKPOINT_PASSED':
      checkpointsPassed[data.checkpoint] = true;
      self.postMessage({ 
        type: 'CHECKPOINT_RECORDED',
        checkpoint: data.checkpoint 
      });
      break;
      
    case 'TRAP_DEFEATED':
      trapActive = false;
      if (monitoringInterval) {
        clearInterval(monitoringInterval);
        monitoringInterval = null;
      }
      self.postMessage({ type: 'TRAP_STOPPED' });
      break;
      
    case 'STATUS':
      self.postMessage({ 
        type: 'STATUS_RESPONSE',
        trapActive,
        checkpoints: checkpointsPassed
      });
      break;
      
    default:
      break;
  }
});

// Start monitoring immediately
startMonitoring();

console.log('Trap Worker initialized and monitoring...');
