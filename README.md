# fhir-typescript

A set of libraries to work with the HL7 FHIR standard in TypeScript.

## Docmunetation

### Project Goals

Generally, this project aims to improve the Developer Experience of working with FHIR in TypeScript and JavaScript.

* A generic FHIR SDK that operates at runtime
* Separation of concerns
  * Repeated ‘boiler-plate’ code
  * Basic (non-terminology) validation
  * Utility functions
  * Take care of the "tricky spots"

### Development Status

Please note that we have not yet achieved a '1.0' milestone.

### Project Structure

Overall, this project is organized as a monorepo with a two-level folder structure:
* [core](core) contains the FHIR Core Packages, named by the FHIR publication version identifier.
* [examples](examples) contains example projects in different combinations of platforms, named as a hyphenated set of `[platform]-[fhir version]-[label]`


### Code Generation

This project uses [fhir-codegen](http://github.com/microsoft/fhir-codegen) to generate code files.

The 'language' export used is `TypeScriptSDK`.  Today, the code-gen repo contains the 'languageInput' files used to modify and supplement automatic code generation.  Once the generation is stable, those files will be moved here.

### Build System

* Modules are built using the [TypeScript Compiler](https://www.typescriptlang.org/download).
* Tests are written in [Jest](https://jestjs.io)
* This project uses [rush](https://rushjs.io/) and [pnpm](https://pnpm.io/) to manage builds and dependencies.


```
# Pull the latest changes from Git
$ git pull

# Install NPM packages as needed
$ rush update

# Bump the versions in package.json according to version policy
$ rush version --bump

# Update changelog with a message
$ rush change --bulk --message "CHANGES" --bump-type patch

# Regenerate NPM changelogs
$ rush publish --regenerate-changelogs --version-policy ftsVersionPolicy

# Rebuild just core projects
$ rush rebuild --to-version-policy ftsVersionPolicy

# Take changes from current branch, compare to main, and publish
$ rush publish --version-policy ftsVersionPolicy --publish --apply --set-access-level public -b main

# Work on one project
$ cd ./core/r4

# There is a "test" script in the package.json, to see
# available commands, type "rushx" by itself.
$ rushx test
```

## More Information

The fhir-typescript logo is based on a fire emoji from Vincent Le Moign and licensed under Creative Commons Attribution 4.0 International.  The original source can be found [here](https://commons.wikimedia.org/wiki/File:656-fire.svg)

FHIR&reg; is the registered trademark of HL7 and is used with the permission of HL7.