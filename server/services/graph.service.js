const jsgraphs = require('js-graph-algorithms');
const math = require('mathjs');


module.exports.Graph = class Graph {



    constructor() {
        this.vertices = []
        this.gmls = []
        this.groups = []
        this.groupMap = []
        this.group = []

    }




    /**
     * 
     * @param {number} numOfGroups : the number of group you want to divide
     */
    match(numOfGroups) {
        if (!this.vertices)
            return []
        let count = 0
        this.vertices.forEach(v => {
            if (!this.groupMap[v.id]) {//if v not contain to group
                let flag = false
                for (let i = 0; i < v.edges.length; i++) { // for each edge in v, if e has group, add v to e group

                    let e = v.edges[i]
                    let ver = this.getVeretxById(e.to);
                    if (ver) {
                        if (this.groupMap[ver.id] && !flag) {
                            flag = true
                            this.changeGroup(ver.group, v);
                            break;
                        }
                    }

                }
                if (!flag) {//need to open new group
                    this.changeGroup(count, v);
                    count++
                }

            }
        })
        //build groups 
        this.vertices.forEach(v => {
            if (!this.group[v.group])
                this.group[v.group] = new Group(v.group)
            this.group[v.group].addVertex(v)
        })
        /**
         * grouping group 
         */
        let hasMore = false
        this.reduceGroup()
        let numVerInGroup = this.vertices.length / numOfGroups
        this.buildDirectGraphWithWeight(numVerInGroup)

        let dGroups = []
        this.group.forEach((graph, i) => {
            if (graph.length > numVerInGroup) {//need to divide the group

                let g2;
                do {
                    let reduceG = this.recursiveRedusce(graph.toArray(), new Group(i), numVerInGroup, 0);

                    let g1 = reduceG;
                    g2 = new Group(this.group.length + i);
                    let arr = reduceG.toArray();
                    graph.toArray().forEach(item => {
                        if (!arr.find(v => item.id == v.id))
                            g2.addVertex(item);
                    });
                    delete this.group[i];
                    dGroups.push(g1);
                    if (g2.length <= numVerInGroup)
                        dGroups.push(g2);
                    else
                        graph = g2;
                } while (g2.length > numVerInGroup);
            }
        })
        if (dGroups.length > 0) {
            dGroups.forEach(g => { this.group.push(g) });
        }

        this.reduceGroup();

        //brute force
        let vs = this.vertices.slice(0);

        /*let arra = [];
        let vers = this.vertices.slice(0);
        arra.push(this.cc(this.vertices.slice(0), numVerInGroup, new Group(), 0));
        for (let i = 1; i < numOfGroups; i++) {
            let tempg = arra[0].toArray();
            vers = vers.filter(v => {
                return !tempg.find(t => t.id == v.id);
            })
            arra.unshift(this.cc(vers, numVerInGroup, new Group(), 0))
        }
*/
        // let bbb = this.recursiveMatch(new Array(numOfGroups), numVerInGroup, numVerInGroup, 0, 1, vs);


        return this.grouping(numVerInGroup, numOfGroups);
    }

    cc(arr, numVerInGroup, g, i) {
        if (g.length >= +numVerInGroup.toFixed(0)) {
            return g;
        }
        if (arr.length == i || g.length + (arr.length - i) < numVerInGroup)
            return null;
        let a = g.clone();
        a.addVertex(arr[i]);
        let b = this.cc(arr, numVerInGroup, g, i + 1);
        let c = this.cc(arr, numVerInGroup, a, i + 1);
        if (!b)
            return c;
        else if (!c)
            return b;
        return c.getGml() > b.getGml() ? c : b;
    }

    divideGroup(arrMap, count, g, numVerInGroup, factor = 1) {
        let source = 0;
        let target = 1
        let ff = new jsgraphs.FordFulkerson(g, source, target);
        let minCut = ff.minCut(g);

        let arrChoose = []
        let g1 = new Group(count)
        let g2 = new Group(count + 1)


        let flag = true;
        const markedCount = ff.marked.filter(m => m).length;
        if (markedCount > 2) {
            for (let i = 2; i < ff.marked.length; i++) {
                let id = this.getIdFromArrMap(arrMap, i);
                let v2 = this.getVeretxById(id);
                if (ff.marked[i]) {
                    v2.group = count;
                    g1.addVertex(v2);
                }
                else {
                    flag = false;
                    g2.addVertex(v2);
                    v2.group = count + 1;
                }
            }
        }
        else {
            for (let i = minCut.length - 1; i >= 0; i--) {
                let e = minCut[i];
                if (e.from() != 0) {
                    if (arrChoose.find(a => a == e.from()))
                        continue;
                    let f = e.from()
                    arrChoose.push(f)
                    let id = this.getIdFromArrMap(arrMap, f)
                    let v2 = this.getVeretxById(id)
                    v2.group = count
                    g1.addVertex(v2)
                }
                else if (!arrChoose.find(a => a == e.to())) {
                    // if (arrChoose.find(a => a == e.to()))
                    //     continue;
                    let f = e.to()
                    arrChoose.push(f)
                    let id = this.getIdFromArrMap(arrMap, f)

                    let v2 = this.getVeretxById(id)
                    v2.group = count + 1
                    g2.addVertex(v2)
                }
            }
            for (let key in arrMap) {
                if (!arrChoose.find(a => arrMap[key] == a)) {
                    arrChoose.push(arrMap[key])
                    let v2 = this.getVeretxById(key)
                    v2.group = count + 1
                    g2.addVertex(v2)
                }
            }

        }

        if (g1.length == 0 || (g1.length < numVerInGroup && g2.length > numVerInGroup)) {
            return [...this.cutEdges(g2, count, numVerInGroup, factor), g1.length != 0 && g1];
        }
        else if (g2.length == 0 || (g2.length < numVerInGroup && g1.length > numVerInGroup)) {
            return [...this.cutEdges(g1, count, numVerInGroup, factor), g2.length != 0 && g2];
        }
        else if (g1.length > numVerInGroup && g2.length > numVerInGroup) {
            return [...this.cutEdges(g2, count, numVerInGroup, factor), ...this.cutEdges(g1, count, numVerInGroup, factor)];
        }


        if (g1.length == 0) {
            let temp = g1;
            g1 = g2;
            g2 = temp;
        }

        if (typeof g1 == "Array" && typeof g2 == "Array")
            return [...g1, ...g2];
        else if (typeof g1 == "Array")
            return [...g1, g2];
        else if (typeof g2 == "Array")
            return [g1, ...g2];
        else
            return [g1, g2];
    }

    cutEdges(g2, count, numVerInGroup, factor) {
        const graphAndMap = this.buildDirectGraphWithWeightForFF(g2);
        const g = graphAndMap.g;
        let isBigFactor = true;
        g.adjList.forEach(a => {
            a.forEach(e => {
                if (isBigFactor && e.capacity > factor)
                    isBigFactor = false;
                if (e.w != 0 && e.v != 0 && e.capacity != 0 && e.w != 0 && e.v != 0 && e.capacity != 0)
                    e.capacity -= factor;
            });
        });
        if (isBigFactor) {
            factor = 1;
            return this.divideGroup(graphAndMap.arrMap, count, g, numVerInGroup, factor);
        }
        else
            return this.divideGroup(graphAndMap.arrMap, count, g, numVerInGroup, factor + 1);
    }

    buildDirectGraphWithWeight(numVerInGroup) {
        let gs = []
        this.group.forEach(graph => {


            let q = [graph];
            do {
                if (q[0].length > numVerInGroup) {
                    let graphAndMap = this.buildDirectGraphWithWeightForFF(q[0]);
                    let g = graphAndMap.g;
                    let arrMap = graphAndMap.arrMap;
                    let count = gs.length;
                    // let maxGml = g.length > 1 ? this.divideGroup(arrMap, count, g[1]) : this.divideGroup(arrMap, count, g[0])
                    let maxGml = this.divideGroup(arrMap, count, g, numVerInGroup)
                    gs.push(...maxGml);
                    // if (maxGml.g1.length > numVerInGroup && maxGml.g1.length != q[0].length)
                    //     q.push(maxGml.g1);
                    // else
                    //     gs.push(maxGml.g1);



                    // if (maxGml.g2.length > 0)
                    //     q.push(maxGml.g2);
                    // else
                    // gs.push(maxGml.g2);
                }
                else
                    gs.push(q[0]);
                q = q.slice(1, q.length);

            } while (q.length >= 1);
        });

        this.group = gs;
    }

    buildDirectGraphWithWeightForFF(graph, reduce) {
        let arr = graph.toArray();
        let arrMap = []
        let toMap = []
        let negative = []
        arr.forEach((v, i) => {
            arrMap[v.id] = i + 2;
        })
        let g = new jsgraphs.FlowNetwork(arr.length + 2);
        arr.forEach((v, i) => {
            let sum = 0
            v.edges.forEach(e => {
                g.node(i).label = v._text
                if (arrMap[e.to]) {
                    if (e.weight > 0) {
                        sum += e.weight
                        toMap[e.to] ? toMap[e.to] += e.weight : toMap[e.to] = e.weight
                    }
                    else if (e.weight <= 0) {
                        negative[e.to] = true;
                        negative[v.id.toString()] = true;
                    }
                    g.addEdge(new jsgraphs.FlowEdge(arrMap[v.id], arrMap[e.to], e.weight > 0 ? e.weight : 0));
                }
            })
            //add edge from start to v
            g.addEdge(new jsgraphs.FlowEdge(0, arrMap[v.id], sum));



        })

        // let graphs = []

        arr.forEach(v => {//add edge from v to last 

            let id = v.id.toString()
            if (!negative[id]) {
                let w = toMap[id]
                if (w && reduce)
                    w = (w * reduce).toFixed(2)
                g.addEdge(new jsgraphs.FlowEdge(arrMap[v.id], 1, w ? w : -1));
            }
        })
        /*graphs.push(g)
        for (let key in negative) {

            let w = toMap[key]
            if (w && reduce)
                w = (w * reduce).toFixed(2)
            let temp = this.cloneGraph(g)
            for (let id in negative) {
                if (id != key)
                    temp.addEdge(new jsgraphs.FlowEdge(arrMap[id], 1, w ? w : -1));
            }
            graphs.push(temp)
        }*/
        return { g: g, arrMap: arrMap }
    }


    recursiveRedusce(g, target, length, i) {
        if (length <= 0)
            return target;
        else if (i == g.length)
            return null;
        let a = target.clone();
        a.addVertex(g[i]);
        let b = this.recursiveRedusce(g, a, length - 1, i + 1)
        let c = this.recursiveRedusce(g, target, length, i + 1)
        if (!b)
            return c;
        else if (!c)
            return b;
        return b.getGml() > c.getGml() ? b : c
    }


    changeGroup(num, v) {
        if (!v || v.group == num)
            return;
        v.group = num;
        this.groupMap[v.id] = true
        v.edges.forEach(e => {
            let vertex = this.getVeretxById(e.to);
            this.changeGroup(num, vertex);
        });
    }

    /**
     * 
     * @param {number} limit : num of vertex in group
     * return group with max gml
     */
    knapsack01Dp(limit, range) {
        let table = []
        // limit = +limit
        // limit = limit.toFixed(0)
        for (let i = 0; i < this.group.length + 1; i++) { // init table
            table.push([])
            for (let j = 0; j < limit + range + 1; j++) {
                table[i].push(new Group(this.group.length + i * this.group.length + j))
            }
        }

        for (let i = 1; i < this.group.length + 1; i++) {
            for (let j = 0; j < limit + range + 1; j++) {
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

        let max = table[this.group.length][limit - range];
        for (let i = limit - range; i < limit + range; i++) {
            if (max.gml <= table[this.group.length][i].gml)
                max = table[this.group.length][i];
        }
        return max;


    }
    /**
     * 
     * @param {number} length : length for each group
     */
    grouping(length, numOfGroups) {

        numOfGroups = +numOfGroups;
        length = +length;
        let groups = [];
        let groupNotComplete = [];
        let l = length % 1 == 0 ? length : (+length.toFixed(0))
        for (let i = 0; i < numOfGroups; i++) {

            let flag = false
            Math.abs(l - length) < 0.5 && Math.abs(l - length) != 0 ? flag = true : l = l
            let g = this.knapsack01Dp(l, 0);
            if (g.length < l && flag)
                g = this.knapsack01Dp(l + 1, +(l / 10).toFixed(0));
            if (g.length < l + 1 + (l / 10).toFixed(0) || g.length > l + 1 + (l / 10).toFixed(0)) {
                groupNotComplete.push(g);
            }
            else {
                groups.push(g)
            }
            this.removeChoose(g)

        }

        if (this.group.length) {
            const array = [];
            this.group.forEach(gta => array.push(...gta.toArray()));
            groupNotComplete = groupNotComplete.sort((a, b) => a.length > b.length);
            array.forEach(a => {
                groupNotComplete[0].addVertex(array.pop());
                if (!(groupNotComplete[0].length < l + 1 + (l / 10).toFixed(0) || groupNotComplete[0].length > l - 1 - (l / 10).toFixed(0))) {
                    if (groupNotComplete.length != 1) {
                        groups.push(g);
                        groupNotComplete.splice(0, 1);
                    }
                }
            });
        }
        groups.push(...groupNotComplete)
        let arr = [];
        groups.forEach(group => {
            arr.push(group.toArray())
        });
        return arr;
    }

    removeChoose(group) {
        let arr = []
        if (!group)
            return;
        for (let i = 0; i < this.group.length; i++) {
            for (let k in this.group[i].vertices) {
                if (group.contain(k)) {
                    arr.push(i)
                    break
                }
            }
        }
        for (let i = arr.length - 1; i >= 0; i--)
            this.group.splice(arr[i], 1)

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

    cloneGraph(g) {
        let temp = new jsgraphs.FlowNetwork(g.V)
        for (let i = 0; i < g.adjList.length; i++)
            for (let j = 0; j < g.adjList[i].length; j++)
                if (i == g.adjList[i][j].v)
                    temp.addEdge(new jsgraphs.FlowEdge(g.adjList[i][j].v, g.adjList[i][j].w, g.adjList[i][j].capacity))
        return temp
    }

    getIdFromArrMap(arrMap, f) {
        let id = ""
        for (let key in arrMap)
            if (arrMap[key] == f) {
                id = key
                break;
            }
        return id
    }

    /**
     * delete all empty group from group
     */
    reduceGroup() {
        for (let i = this.group.length - 1; i >= 0; i--) {
            if (!this.group[i] || this.group[i].length == 0)
                this.group.splice(i, 1);
        }
    }

    addVertex(id, text) {
        if (!this.vertices)
            this.vertices = [];
        this.vertices.push(new Vertex(id, text));
    }

    addEdge(from, to, weight) {
        let v = this.vertices.find(res => res.id === from);
        if (v)
            v.addEdge(to, weight);
    }

    getVeretxById(id) {
        return this.vertices.find(res => res.id == id);
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

    clone() {
        let g = new Group(this.num);
        for (let i in this.vertices) {
            g.addVertex(this.vertices[i]);
        }
        return g;
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

        // add edges to negatove and positive array
        for (let i = 0; i < v.edges.length; i++) {
            let e = v.edges[i];
            if (!this.vertices[e.to]) {
                if (this.positiveEdge[e.to])
                    this.positiveEdge[e.to].weight += e.weight
                if (this.negativeEdge[e.to])
                    this.negativeEdge[e.to].weight += e.weight

                if (!this.positiveEdge[e.to] || this.negativeEdge[e.to]) {
                    if (e.weight > 0)
                        this.positiveEdge[e.to] = Object.assign({}, e)
                    else
                        this.negativeEdge[e.to] = Object.assign({}, e)
                }
            }
        }

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
        // this.gml = 0;
        // // let i = 0;
        // let sign = 1;
        // let met = [];
        // for (let id in this.vertices) {
        //     // met.push([]);
        //     let v = this.vertices[id];
        //     for (let id2 in this.vertices) {
        //         let w = v.getDegree(id2);
        //         if (w != 0 && w != 1)
        //             met.push(w);
        //         if (w < 0)
        //             sign = -1;
        //         // met[met.length - 1].push(w);
        //     }
        //     // i++;
        // }
        // // let a = math.matrix(met);
        // // this.gml = sign * Math.abs(math.det(a));
        // // console.log(this.gml);
        // let mult = 1;
        // met.forEach(m => {
        //     mult += m;
        // });
        // this.gml = Math.abs(mult) / this.length;
        // return this.gml;
        // for (let id in this.vertices) {
        //     let v = this.vertices[id]
        //     let sum = 0
        //     let sp = v.getSumPositive()
        //     let np = v.getSumNegative()
        //     v.edges.forEach(e => {
        //         if (this.vertices[e.to]) {
        //             if (e.weight > 0) {
        //                 sum += e.weight / sp
        //             }
        //             else
        //                 sum += e.weight / np
        //         }

        //     })
        //     this.gml += sum
        // }
        // this.gml /= this.length

        this.gml = 0;
        for (let id in this.vertices) {
            let v = this.vertices[id];
            this.gml += this.calcGmlToVertex(v);
        }
        this.gml /= this.length;
        this.gml = +this.gml.toFixed(0);
        return this.gml;
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
     * @param {*Vertex} to 
     */

    calcGmlToVertex(to) {
        let gml = 0;
        let pos = 0, neg = 0;
        for (let id in this.vertices) {
            let w = to.weightTo(id);
            w > 0 ? pos += (w / (to.getSumPositive() > 0 ? to.getSumPositive() : 1)) : neg += (w / (to.getSumNegative() > 0 ? to.getSumNegative() : 1));
        }
        gml = pos * 0.5 + neg * 0.5 + 0.5;
        return +(gml * 100).toFixed(0);
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

    getDegree(id) {
        for (let i = 0; i < this.edges.length; i++)
            if (this.edges[i].to == id)
                return this.edges[i].weight;
        return 1;
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

    weightTo(to) {
        let edge = this.edges.find(e => to == e.to);
        return edge ? edge.weight : 0;
    }
}

class Edge {
    constructor(to, weight) {
        this.to = to;
        this.weight = weight;
    }
}
