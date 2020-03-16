
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let hash = 0;
        let prime = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            hash = (hash * prime + value) % this.keyMap.length
        }
        return hash
    }
    set(key, value){
        let newKey = this._hash(key)
        let pair = [key, value]
        if(!this.keyMap[newKey]){
            this.keyMap[newKey] = [];
        }
        this.keyMap[newKey].push(pair);
        // console.log(this.keyMap[newKey])
    }
    get(key){
        let hashedKey = this._hash(key)
        if(this.keyMap[hashedKey]){
            for(let i = 0; i < this.keyMap[hashedKey].length; i++){
                if(this.keyMap[hashedKey][i][0] === key){
                    return this.keyMap[hashedKey][i][1]
                }
            }
            return undefined
        }
    }
    keys(){
        let keys = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }
    values(){
        let values = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values
    }
}

let map = new HashTable()
map.set('heat', 'its lit')
map.set('fire', 'still')
map.set('what', 'cmon')
map.set('dope', 'cmon')
map.set('darkblue','My first push' )
map.set('salmon', 'second item')
// console.log(map.get('fire'))

console.log(map.keys())
console.log(map.values())

