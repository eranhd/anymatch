module.exports.Graph = class Graph {



    constructor() {
        this.vertices = []
        this.dfsForest = []
        this.gmls = []
        this.groups = []
        this.groupMap = []
        this.group = []

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

        if (!this.vertices)
            return []

        let count = 0

        this.vertices.forEach(v => {
            if (!this.groupMap[v.id]) {//if v not contain to group
                let flag = false
                v.edges.forEach(e => { // for each edge in v, if e has group and positive, add v to e group
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


        this.vertices.forEach(v => {
            if (!this.group[v.group])
                this.group[v.group] = new Group(v.group)
            this.group[v.group].addVertex(v)
        })


        /**
         * grouping group 
         */
        let g = []


        let numVerInGroup = this.vertices.length / numOfGroups
        return this.grouping(numVerInGroup, numOfGroups)

    }

    /**
     * 
     * @param {number} limit : num of vertex in group
     * return group with max gml
     */
    knapsack01Dp(limit) {
        let table = []
        // limit = +limit
        // limit = limit.toFixed(0)
        for (let i = 0; i < this.group.length + 1; i++) { // init table
            table.push([])
            for (let j = 0; j < limit + 1; j++) {
                table[i].push(new Group(this.group.length + i * this.group.length + j))
            }
        }

        for (let i = 1; i < this.group.length + 1; i++) {
            for (let j = 0; j < limit + 1; j++) {
                if (this.group[i - 1].length <= j) {
                    let g = this.group[i - 1]
                    if (j - g.length >= 0) { // if exits group
                        let union = g.unionGroup(table[i - 1][j - g.length])
                        if (union.getGml() * union.length > table[i - 1][j].getGml() * table[i - 1][j].length) {// if g.weight + this gml[i-1, j - this.length]  > gml[i-1, j]
                            table[i][j] = union
                        }
                        else {
                            table[i][j] = table[i - 1][j]
                        }
                    }
                }
                else {
                    table[i][j] = table[i - 1][j]
                }
            }
        }

        return table[this.group.length][limit]


    }
    /**
     * 
     * @param {number} length : length for each group
     */
    grouping(length, numOfGroups) {

        let groups = []
        for (let i = 0; i < numOfGroups; i++) {
            let g = this.knapsack01Dp(length)
            groups.push(g)
            this.removeChoose(g)

        }

        let arr = []
        groups.forEach(group => {
            arr.push(group.toArray())
        })
        return arr
    }

    removeChoose(group) {
        let arr = []
        for (let i = 0; i < this.group.length; i++) {
            for (let k in this.group[i].vertices) {
                if (group.contain(k)) {
                    arr.push(i)
                    break
                }
            }
        }
        arr.forEach(a => {
            this.group.splice(a, 1)
        })
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

class Group {
    /**
     * @param {Integer} num
     * vertices - dictionary
     */
    constructor(num) {
        this.vertices = []
        this.gml = 0
        this.negativeEdge = []
        this.positiveEdge = []
        this.num = num
        this.length = 0

    }

    /**
     * for (let id in this.vertices) {
            let v = this.vertices[id]

        }
     */

    /**
     * 
     * @param {*Vertex} v 
     */

    addVertex(v) {
        this.vertices[v.id] = v

        v.edges.forEach(e => { // add edges to negatove and positive array
            if (!this.vertices[e.to]) {
                if (this.positiveEdge[e.to])
                    this.positiveEdge[e.to].weight += e.weight
                if (this.negativeEdge[e.to])
                    this.negativeEdge[e.to].weight += e.weight

                if (!this.positiveEdge[e.to] || this.negativeEdge[e.to]) {
                    if (e.weight > 0)
                        this.positiveEdge[e.to] = e
                    else
                        this.negativeEdge[e.to] = e
                }
            }
        })

        if (this.positiveEdge[v.id])
            delete this.positiveEdge[v.id]
        if (this.negativeEdge[v.id])
            delete this.negativeEdge[v.id]
        this.length++
        this.calcGml()

    }

    getGml() {
        return this.gml + 1
    }

    /**
     * calculate the gml for this group
     */
    calcGml() {
        this.gml = 0
        for (let id in this.vertices) {
            let v = this.vertices[id]
            let sum = 0
            let sp = v.getSumPositive()
            let np = v.getSumNegative()
            v.edges.forEach(e => {
                if (this.vertices[e.to]) {
                    if (e.weight > 0) {
                        sum += e.weight / sp
                    }
                    else
                        sum += e.weight / np
                }

            })
            this.gml += sum
        }
        this.gml /= this.length
    }


    /**
     * 
     * @param {*Vertex} vertex 
     */
    exist(vertex) {
        return this.positiveEdge[vertex.id] || this.negativeEdge[v.id]
    }
    /**
     * @param {*Vertex} vertex 
     */
    getWeight(vertex) {
        let w = 0
        if (this.positiveEdge[vertex.id])
            w += this.positiveEdge[vertex.id].weight
        if (this.negativeEdge[vertex.id])
            w += this.negativeEdge[vertex.id].weight
        return w
    }

    /**
     * @param {*Group} to 
     */

    calcGmlTo(to) {
        let count = 0
        let gml = 0
        for (let id in this.vertices) {
            let v = this.vertices[id]
            if (to.exist(v)) {
                count++
                gml += to.getWeight(v)

            }
        }



        return count / gml
    }

    /**
     * 
     * @param {*Group} other 
     */
    unionGroup(other) {
        if (!other)
            return this
        let g = new Group(this.num)
        for (let id in this.vertices) {
            let v = this.vertices[id]
            g.addVertex(v)
        }
        for (let id in other.vertices) {
            let v = other.vertices[id]
            g.addVertex(v)

        }

        return g
    }

    length() {
        return this.length
    }

    toArray() {
        let arr = []
        for (let id in this.vertices) {
            let v = this.vertices[id]
            arr.push(v)
        }
        return arr
    }

    contain(id) {
        return !!this.vertices[id]
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

    getSumPositive() {
        let sum = 0
        this.edges.forEach(e => {
            e.weight > 0 ? sum += e.weight : sum += 0
        })
        return sum
    }

    getSumNegative() {
        let sum = 0
        this.edges.forEach(e => {
            e.weight < 0 ? sum += -1 * e.weight : sum += 0
        })
        return sum
    }
}

class Edge {
    constructor(to, weight) {
        this.to = to;
        this.weight = weight;
    }
}

