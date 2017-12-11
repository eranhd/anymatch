module.exports.Graph = class Graph {



    constructor() {
        this.vertices = []
        this.dfsForest = []
        this.gmls = []
        this.groups = []
        this.groupMap = []

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

    getVeretxById(id) { return this.vertices.find(res => res.id == id); }

    calcDegree() {
        let edges = []
        this.vertices.forEach(v => {
            v.edges.forEach(e => {
                if (!edges[e.to])
                    edges[e.to] = 0
                edges[e.to]++
            })
        })
        this.vertices.forEach(v => {
            v.degree = edges[v.id]
        })
    }

    sortByDegree() {
        this.vertices.sort((a, b) => a.degree < b.degree)
        console.log(this.vertices)
    }

    dfs() {
        if (!this.vertices)
            return
        this.calcDegree()
        this.sortByDegree()
        this.vertices.forEach(v => {
            if (!v.visit) {
                v.group = this.dfsForest.length;
                this.dfsFrom(v)
            }
        })
        // console.log(this.dfsForest)
        return this.dfsForest
    }

    dfsFrom(v) {
        v.visit = true;
        if (!this.dfsForest[v.group])
            this.dfsForest[v.group] = []
        this.dfsForest[v.group].push(v)
        v.edges.forEach(e => {
            let ver = this.getVeretxById(e.to);
            if (!ver.visit) {
                ver.group = v.group
                this.dfsFrom(ver)
            }
        })
    }

    match(numOfGroups) {
        // this.dfs()
        if (!this.vertices)
            return

        let count = 0
        // this.dfsForest.forEach(df => {
        this.vertices.forEach(v => {
            if (!this.groupMap[v.id]) {//if v nit contain to group
                let flag = false
                v.edges.forEach(e => {
                    if (e.weight > 0) {
                        let ver = this.getVeretxById(e.to)
                        if (this.groupMap[ver.id] && !flag) {
                            flag = true
                            v.group = ver.group
                            this.groupMap[v.id] = true
                        }
                        if (flag && !this.groupMap[ver.id]) {
                            ver.group = v.group
                            this.groupMap[ver.id] = true
                        }
                    }
                })
                if (!flag) {//need to open new group
                    this.groupMap[v.id] = true
                    v.group = count
                    count++
                    v.edges.forEach(e => {
                        if (e.weight > 0) {
                            let ver = this.getVeretxById(e.to)

                            ver.group = v.group
                            this.groupMap[ver.id] = true

                        }
                    })
                }

            }
        })
        // })

        this.vertices.forEach(v => {
            if (!this.groups[v.group])
                this.groups[v.group] = []
            this.groups[v.group].push(v)
        })

        let g = []
        let numVerInGroup = this.vertices.length / numOfGroups
        let groupingGroup = []
        this.groups.forEach(gr => {
            if (gr.length >= numVerInGroup - numVerInGroup * 0.2 && gr.length <= numVerInGroup + numVerInGroup * 0.2)
                g.push(gr)
            else {
                if (gr.length >= numVerInGroup + numVerInGroup * 0.2) {

                }
                else {
                    gr.forEach(v => { groupingGroup.push(v) })
                    if (groupingGroup.length >= numVerInGroup - numVerInGroup * 0.2 && groupingGroup.length <= numVerInGroup + numVerInGroup * 0.2) {
                        g.push(groupingGroup)
                        groupingGroup = []
                    }
                }
            }
        })

        return g
    }

    mathFrom(v) {
        this.groupMap
    }

    calcGml(group) {

        let sum = 0;
        group.forEach(v => {
            sum += v.gml;
        })
        return sum / group.length;
    }

    calcGmlForVertex(v) {
        v.edges.forEach(e => {
            let ver = this.getVeretxById(e.to);
            if (ver.getGroup() == v.getGroup()) {
                v.gml += (e.weight / v.edges.filter(res => e.weight > 0 ? res.weight > 0 : res.weight <= 0).length) * 0.5;
            }
        });
    }


}


class Vertex {

    constructor(id, text) {
        this.edges = []
        this.id = id
        this.visit = false
        this.text = text
        this.gml = 0.5
        this.degree = 0
    }

    setGroup(g) {
        this.group = g;
    }

    getGroup() {
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

