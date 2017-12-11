import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild("can") canvas: ElementRef;

  private radius = 10;
  public width;
  public height = 300;
  @Input() graph;
  private points: Point[];
  private lines: Line[];
  context: CanvasRenderingContext2D;

  private pointToCahnge: Point;


  constructor() {


  }

  ngOnInit() {
    // this.width = window.screen.width * 0.8;
    this.width = this.canvas.nativeElement.parentElement.clientWidth - 10
    console.log(this.canvas.nativeElement.parentElement.clientWidth)
  }

  ngAfterViewInit() {

  }

  addVertex(id, text: string, rangex?: number, rangey?: number) {
    let p;
    if (!this.points) {
      this.points = [];
    }
    let i = Math.random() * (this.height / 10 - 4);
    i = +i.toFixed(0) + 2;

    let j = Math.random() * (this.width / 10 - 4);
    j = +j.toFixed(0) + 2;
    this.points.push(new Point(j * 10, i * 10, id, text));
  }

  addLine(from, to, weight) {
    let f = this.points.find(res => res.id === from);
    let t = this.points.find(res => res.id === to);
    if (!this.lines)
      this.lines = [];
    this.lines.push(new Line(f, t, weight));
  }

  drawVertex() {
    this.context = this.canvas.nativeElement.getContext("2d");
    // this.context.strokeStyle = "#FF0000";
    this.context.clearRect(0, 0, this.width, this.height)
    this.context.fillStyle = "gray";
    this.points.forEach(p => {
      // console.log(p)
      this.context.beginPath();
      this.context.arc(p.x, p.y, 8, 0, 2 * Math.PI);
      this.context.fill();
    });
  }

  drawEdge() {
    this.context = this.canvas.nativeElement.getContext("2d");
    // this.context.strokeStyle = "#FF0000";

    // console.log(this.lines)
    // console.log(this.lines)
    if (!this.lines)
      return;
    this.lines.forEach(l => {
      if (l.w >= 0 && l.b && l.a) {
        if (l.w > 0)
          this.context.strokeStyle = "blue";
        else
          this.context.strokeStyle = "green";
        this.context.beginPath();
        this.context.moveTo(l.a.x, l.a.y);
        this.context.lineTo(l.b.x, l.b.y);
        this.context.stroke();
      }
      else if (l.b && l.a) {
        this.context.strokeStyle = "red";
        this.context.beginPath();

        // for(let i = 0; i < 20; i++){
        this.context.moveTo(l.a.x, l.a.y);
        this.context.lineTo(l.b.x, l.b.y);
        this.context.stroke();

      }
      if (l.b) {
        this.context.rect(l.b.x, l.b.y, 3, 3)
        this.context.stroke()
      }
    });
  }


  private addGroup(v: any[]) {

    v.forEach(res => {
      // console.log(res.edges)
      if (res.edges)
        res.edges.forEach(e => {

          if (v.find(r => r.id == e.to))
            this.addLine(res.id, e.to, e.weight);
          else if (e.weight < 0)
            this.addLine(res.id, e.to, e.weight);
          else {
            console.log(e)
            this.addLine(res.id, e.to, 0);
          }
        });
    });
  }


  ngOnChanges(data) {

    console.log(this.graph);


    if (this.graph) {
      // console.log("dd");


      this.graph.forEach(g => {
        g.forEach(res => {
          // console.log(res)
          this.addVertex(res.id, res._text);
        });
      })



      this.graph.forEach(g => {
        this.addGroup(g);
      })


      // console.log(data)
      // if (this.graph) {
      //   console.log(this.graph)
      //   this.graph.vertices.forEach(res => {
      //     // console.log(res)
      //     this.addVertex(res.id);
      //   });
      //   this.graph.vertices.forEach(res => {
      //     console.log(res)
      //     if (res.edges)
      //       res.edges.forEach(e => {
      //         this.addLine(res.id, e.to, e.weight);
      //       });
      //   });
      this.drawVertex();
      this.drawEdge();
    }
  }

  getMousePos(evt) {
    let rect = this.canvas.nativeElement.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  click(e: MouseEvent) {

  }

  selectPosition(e: MouseEvent) {
    let pos = this.getMousePos(e);
    if (this.points) {
      this.pointToCahnge = this.getVertexByPosition(pos);
    }

  }

  getVertexByPosition(pos) {
    return this.points.find(res => {
      return Math.abs(pos.x - res.x) < this.radius && Math.abs(pos.y - res.y) < this.radius
    });

  }

  changePosotion(e: MouseEvent) {
    let pos = this.getMousePos(e);
    if (this.points) {
      this.drawVertex();
      this.drawEdge();
    }
    if (this.points) {
      let u = this.getVertexByPosition(pos);
      // console.log(u)
      if (u)
        this.context.fillText(u["text"], pos.x, pos.y - 10);
    }
    if (this.pointToCahnge) {
      // console.log(this.pointToCahnge)

      this.pointToCahnge.x = pos.x;
      this.pointToCahnge.y = pos.y;

    }
  }


}

class Point {
  constructor(public x, public y, public id: string, public text: string) { }
}

class Line {
  constructor(public a: Point, public b: Point, public w: number) { }
}
