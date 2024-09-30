# pulumi-b-va-not-a-function

A sample repository for a minimal reproducible example of errors mixing Pulumi resources and component resources.

Commenting out either resource in [`infra/index.ts`](infra/index.ts) results in that resource being successfully planned, but with both definitions uncommented it results in:

```sh
$ pulumi up
Please choose a stack, or create a new one: dev
Enter your passphrase to unlock config/secrets
    (set PULUMI_CONFIG_PASSPHRASE or PULUMI_CONFIG_PASSPHRASE_FILE to remember):
Enter your passphrase to unlock config/secrets
Previewing update (dev):
     Type                       Name            Plan       Info
 +   pulumi:pulumi:Stack        infra-test-dev  create     1 error
 +   ├─ test:test:LocalCommand  mycmd           create
 +   └─ command:local:Command   echo            create

Diagnostics:
  pulumi:pulumi:Stack (infra-test-dev):
    error: Running program '~/pulumi-b-va-not-a-function/infra/index.ts' failed with an unhandled exception:
    <ref *1> Error: failed to register new resource echo [command:local:Command]: 13 INTERNAL: Request message serialization failure: b.Va is not a function
        at Object.registerResource (~/pulumi-b-va-not-a-function/infra/node_modules/@pulumi/runtime/resource.ts:444:27)
        at new Resource (~/pulumi-b-va-not-a-function/infra/node_modules/@pulumi/resource.ts:507:13)
        at new CustomResource (~/pulumi-b-va-not-a-function/infra/node_modules/@pulumi/resource.ts:962:9)
        at new Command (~/pulumi-b-va-not-a-function/infra/node_modules/@pulumi/local/command.ts:317:9)
        at file://~/pulumi-b-va-not-a-function/infra/index.ts:5:13
        at ModuleJob.run (node:internal/modules/esm/module_job:262:25)
        at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:483:26) {
      promise: Promise { <rejected> [Circular *1] }
    }
```
