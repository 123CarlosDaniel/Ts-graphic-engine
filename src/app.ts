namespace TSE {
    export class Engine {
        private _count = 0
        public constructor() {
            console.log('hola mundo')
        }
        public start() {
            this.loop()
        }
        private loop() {
            console.log(this._count)
            requestAnimationFrame(this.loop.bind(this))
        }
    }
}

window.addEventListener('load', () => {
    let e = new TSE.Engine()
})
