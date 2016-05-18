export default function() {
  this.transition(
    this.fromRoute(`dashboard.home.index`),
    this.toRoute(`dashboard.home.preview`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
}
