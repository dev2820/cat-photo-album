export const paths = {
  svgPath: '/icons.svg',
  get pathToIcon() {
    return this.svgPath;
  },
  set pathToIcon(newPath) {
    this.svgPath = newPath;
  }
};
