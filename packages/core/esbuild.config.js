const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['lib/index.ts'],
  bundle: true,
  // outdir: 'dist',
  format: 'cjs',
  outfile: 'dist/cjs/index.js', // Output file for CommonJS modules
  tsconfig: 'tsconfig.cjs.json', // Specify your TypeScript configuration file
});

esbuild.build({
  entryPoints: ['lib/index.ts'],
  bundle: true,
  // outdir: 'dist',
  format: 'esm',
  outfile: 'dist/esm/index.js', // Output file for ES6 modules
  tsconfig: 'tsconfig.esm.json', // Specify your TypeScript configuration file
});
