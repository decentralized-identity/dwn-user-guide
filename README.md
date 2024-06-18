dwn-cli-app
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dwn-cli-app.svg)](https://npmjs.org/package/dwn-cli-app)
[![Downloads/week](https://img.shields.io/npm/dw/dwn-cli-app.svg)](https://npmjs.org/package/dwn-cli-app)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dwn-cli-app
$ dwn-cli COMMAND
running command...
$ dwn-cli (--version)
dwn-cli-app/0.0.0 linux-x64 node-v18.18.0
$ dwn-cli --help [COMMAND]
USAGE
  $ dwn-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dwn-cli hello PERSON`](#dwn-cli-hello-person)
* [`dwn-cli hello world`](#dwn-cli-hello-world)
* [`dwn-cli help [COMMAND]`](#dwn-cli-help-command)
* [`dwn-cli plugins`](#dwn-cli-plugins)
* [`dwn-cli plugins add PLUGIN`](#dwn-cli-plugins-add-plugin)
* [`dwn-cli plugins:inspect PLUGIN...`](#dwn-cli-pluginsinspect-plugin)
* [`dwn-cli plugins install PLUGIN`](#dwn-cli-plugins-install-plugin)
* [`dwn-cli plugins link PATH`](#dwn-cli-plugins-link-path)
* [`dwn-cli plugins remove [PLUGIN]`](#dwn-cli-plugins-remove-plugin)
* [`dwn-cli plugins reset`](#dwn-cli-plugins-reset)
* [`dwn-cli plugins uninstall [PLUGIN]`](#dwn-cli-plugins-uninstall-plugin)
* [`dwn-cli plugins unlink [PLUGIN]`](#dwn-cli-plugins-unlink-plugin)
* [`dwn-cli plugins update`](#dwn-cli-plugins-update)

## `dwn-cli hello PERSON`

Say hello

```
USAGE
  $ dwn-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ dwn-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/pratap/dwn-cli-app/blob/v0.0.0/src/commands/hello/index.ts)_

## `dwn-cli hello world`

Say hello world

```
USAGE
  $ dwn-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dwn-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/pratap/dwn-cli-app/blob/v0.0.0/src/commands/hello/world.ts)_

## `dwn-cli help [COMMAND]`

Display help for dwn-cli.

```
USAGE
  $ dwn-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dwn-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `dwn-cli plugins`

List installed plugins.

```
USAGE
  $ dwn-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dwn-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/index.ts)_

## `dwn-cli plugins add PLUGIN`

Installs a plugin into dwn-cli.

```
USAGE
  $ dwn-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dwn-cli.

  Uses bundled npm executable to install plugins into /home/pratap/.local/share/dwn-cli

  Installation of a user-installed plugin will override a core plugin.

  Use the DWN_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DWN_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dwn-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dwn-cli plugins add myplugin

  Install a plugin from a github url.

    $ dwn-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dwn-cli plugins add someuser/someplugin
```

## `dwn-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dwn-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dwn-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/inspect.ts)_

## `dwn-cli plugins install PLUGIN`

Installs a plugin into dwn-cli.

```
USAGE
  $ dwn-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dwn-cli.

  Uses bundled npm executable to install plugins into /home/pratap/.local/share/dwn-cli

  Installation of a user-installed plugin will override a core plugin.

  Use the DWN_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DWN_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dwn-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dwn-cli plugins install myplugin

  Install a plugin from a github url.

    $ dwn-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dwn-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/install.ts)_

## `dwn-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ dwn-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dwn-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/link.ts)_

## `dwn-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dwn-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dwn-cli plugins unlink
  $ dwn-cli plugins remove

EXAMPLES
  $ dwn-cli plugins remove myplugin
```

## `dwn-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ dwn-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/reset.ts)_

## `dwn-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dwn-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dwn-cli plugins unlink
  $ dwn-cli plugins remove

EXAMPLES
  $ dwn-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/uninstall.ts)_

## `dwn-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dwn-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dwn-cli plugins unlink
  $ dwn-cli plugins remove

EXAMPLES
  $ dwn-cli plugins unlink myplugin
```

## `dwn-cli plugins update`

Update installed plugins.

```
USAGE
  $ dwn-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->
