import * as pulumi from "@pulumi/pulumi";
import { local } from "@pulumi/command";

export class LocalCommand extends pulumi.ComponentResource {
  constructor(name: string, args: pulumi.Inputs, opts: pulumi.ComponentResourceOptions = {}) {
    super("test:test:LocalCommand", name, args, opts);
  }

  protected async initialize(args: pulumi.Inputs): Promise<any> {
    const cmd = new local.Command(
      "echo",
      {
        create: "echo 'hello, world'"
      }
    );
  }
}
