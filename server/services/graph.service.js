module.exports.Graph = class Graph {



    constructor() {
        this.vertices = [];
        this.dfsForest = [];
        this.gmls = [];

    }

    addVertex(id, text) {
        if (!this.vertices)
            this.vertices = [];
        this.vertices.push(new Vertex(id, text));
    }

    addEdge(from, to, weight) {
        let v = this.vertices.find(res => res.id === from);
        v.addEdge(to, weight);
    }


    dfs() {
        if (!this.vertices)
            return [];
        this.vertices.forEach(v => {
            if (!v.visit) {
                v.setGroup(this.dfsForest.length);
                this.dfsForest.unshift([v]);
                v.visit = true;
                this.dfsAlg(v);
            }
        });

        this.dfsForest.forEach(res => {
            this.gmls.push(this.calcGml(res));
        });
        // console.log(this.gmls);
        return this.dfsForest;
    }

    dfsAlg(v) {
        v.edges.forEach(e => {
            //  console.log(e.weight);
            if (e.weight > 0) {
                let ver = this.getVeretxById(e.to);
                // console.log(ver)
                if (ver) {
                    this.dfsForest[0].push(ver);
                    let ans = ver.visit;
                    ver.visit = true;
                    ver.setGroup(v.getGroup());
                    if(!ans)
                        this.dfsAlg(ver);
                }
            }
            else{
                return;
            }
        });
    }

    calcGml(group) {
        let sum = 0;
        group.forEach(res => {
            sum += 0.5;
            if (res.edges) {
                res.edges.forEach(e => {
                    let ans = group.find(v => v.id == e.to);
                    if (ans && ans.edges.length > 0) {
                        // console.log(e.weight)
                        // console.log(e.weight / ans.edges.length)
                        sum += (e.weight / ans.edges.length);
                    }

                });
            }
        });
        return sum / group.length;
    }

    getVeretxById(id) {
        // console.log(id);
        return this.vertices.find(res => {
            // console.log(res.id + "<->" + id)
            return res.id == id;
        });
    }

}


class Vertex {

    constructor(id, text) {
        this.edges = [];
        this.id = id;
        this.visit = false;
        this.text = text;
    }

    setGroup(g){
        this.group = g;
    }

    getGroup(){
        return this.group;
    }

    addEdge(to, weight) {
        if (!this.edges)
            this.edges = [];
        this.edges.push(new Edge(to, weight));
    }

    set text(text) {
        this._text = text;
    }

    get text() {
        return this.text;
    }
}

class Edge {
    constructor(to, weight) {
        this.to = to;
        this.weight = weight;
    }
}

