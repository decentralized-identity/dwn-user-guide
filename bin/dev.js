#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

// eslint-disable-next-line n/shebang
import { execute } from '@oclif/core'

execute({ development: true, dir: import.meta.url })
