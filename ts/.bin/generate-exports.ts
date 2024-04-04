#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

const distDir = path.resolve(__dirname, '../dist/generated');
const files = fs.readdirSync(distDir);
const paths = files.reduce(
  (acc, file) => {
    const match = file.match(/index.(.*)\.d\.ts/);

    if (match) {
      const dottedPath = match[1];
      const slashedPath = dottedPath.replace(/\./g, '/');
      const resolvedPath = `./dist/generated/index.${dottedPath}`;

      acc.tsconfig[`@akashnetwork/akash-api/${slashedPath}`] = [resolvedPath];
      acc.package[`./${slashedPath}`] = `${resolvedPath}.js`;
    }

    return acc;
  },
  { package: {}, tsconfig: {} },
);

const tsconfigPaths = path.resolve(__dirname, '../tsconfig.paths.json');
fs.writeFileSync(
  tsconfigPaths,
  JSON.stringify({ compilerOptions: { paths: paths.tsconfig } }, null, 2),
);

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'),
);
packageJson.exports = paths.package;
fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(packageJson, null, 2),
);
