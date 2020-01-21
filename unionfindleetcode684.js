var findRedundantConnection = function(edges) {
    let Parent = [...Array(1001)].map((_, x) => x);
    //console.log(Parent);
    function find(x){
        if(Parent[x] == x){
            return x;
        }
        return Parent[x] = find(Parent[x]);
    }
    function union(a, b){
        a = find(a);
        b = find(b);
        if(a === b){
            return false;
        }
        else{
            Parent[a] = b;
        }
        return true;
    }
    for(let [u, v] of edges){
        if(!union(u, v)){
            return [u, v]
        }
    }
};