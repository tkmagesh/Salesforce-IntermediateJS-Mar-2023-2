console.log('app worker loaded')
function doWork() {
    for (let i = 1; i <= 10000; i++){
        for (let j = 0; j < 4000; j++)
            for (let k = 0; k < 1000; k++) {

            }
        if (i % 100 === 0) {
            const percentCompleted = (i / 10000) * 100
            self.postMessage({ type : 'progress', percentCompleted : percentCompleted})
        }
    }
}

self.addEventListener('message', evtArg => {
    if (evtArg.data.type === 'start'){
        console.log('starting doWork')
        doWork()
        self.postMessage({ type : 'completed'})
    }
})