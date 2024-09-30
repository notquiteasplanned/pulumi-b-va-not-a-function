import { LocalCommand } from "@internal/local-command";
import * as pulumi from "@pulumi/pulumi";
import { local } from "@pulumi/command";

const config = new pulumi.Config();

const resource = new local.Command(
  "echo",
  {
    create: "echo 'hello, world'"
  }
);

const componentResource = new LocalCommand("mycmd", { test: "hello" });
