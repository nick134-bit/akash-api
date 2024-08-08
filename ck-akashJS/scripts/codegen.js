// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const rimraf = require('rimraf').rimrafSync;
const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;

async function codegen() {
  const outPath = resolve(__dirname, '../../ck-akashJS/src');
  const protoDirs = [
    join(__dirname, '../../.cache/protos'),
  ]
  console.log(protoDirs)
  rimraf(outPath);

  await telescope({
    protoDirs,
    outPath,
    options: {
      removeUnusedImports: true,
      tsDisable: {
        files: [
          'cosmos/authz/v1beta1/tx.amino.ts',
          'cosmos/staking/v1beta1/tx.amino.ts'
        ],
        patterns: ['**/*amino.ts', '**/*registry.ts', 'k8s.io/**', 'cosmos/**']
      }, interfaces: {
        enabled: true,
        useUnionTypes: false
      },
      prototypes: {
        enableRegistryLoader: true,
        enableMessageComposer: true,
        parser: {
          keepCase: false
        },
        includePackageVar: false,
        allowUndefinedTypes: true,
        excluded: {
          packages: [
            'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)
            'cosmos.app.v1alpha1',
            'cosmos.app.v1beta1',
            'cosmos.base.kv.v1beta1',
            'cosmos.base.reflection.v1beta1',
            'cosmos.base.snapshots.v1beta1',
            'cosmos.base.store.v1beta1',
            'cosmos.base.tendermint.v1beta1',
            'cosmos.crisis.v1beta1',
            'cosmos.evidence.v1beta1',
            'cosmos.genutil.v1beta1',

            'cosmos.autocli.v1',

            'cosmos.msg.v1',
            'cosmos.nft.v1beta1',
            'cosmos.capability.v1beta1',
            'cosmos.orm.v1alpha1',
            'cosmos.orm.v1',
            'cosmos.slashing.v1beta1',
            'google.api',
            'ibc.core.port.v1',
            'ibc.core.types.v1'
          ]
        },
        methods: {
          fromJSON: false,
          toJSON: false,
          encode: true,
          decode: true,
          fromPartial: true,
          toAmino: true,
          fromAmino: true,
          fromProto: false,
          toProto: false,
        },
        addTypeUrlToDecoders: false,
        addTypeUrlToObjects: true,
        addAminoTypeToObjects: true,
        typingsFormat: {
          duration: 'duration',
          timestamp: 'date',
          useExact: false,
          useDeepPartial: true,
          num64: 'bigint',
          customTypes: {
            useCosmosSDKDec: false
          },
          useTelescopeGeneratedType: false
        }
      },
      aminoEncoding: {
        enabled: true,
        useLegacyInlineEncoding: false,
        disableMsgTypes: false,
        useProtoOptionality: true
      },
      lcdClients: {
        enabled: false
      },
      rpcClients: {
        enabled: true,
        camelCase: true
      }
    }
  })
}

void codegen();
