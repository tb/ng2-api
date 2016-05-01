System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: './demo',
    'ng2-api': '/ng2-api.ts'
  },
  //packages defines our app package
  packages: {
    app: {
      main: 'main.ts',
      defaultExtension: 'ts'
    }
  }
});