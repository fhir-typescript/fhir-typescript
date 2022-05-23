# fhir-typescript

A set of libraries to work with the HL7 FHIR standard in TypeScript.

# Documentation

This project uses [rush](https://rushjs.io/) and [pnpm](https://pnpm.io/) to manage builds and dependencies.

```
# Pull the latest changes from Git
$ git pull

# Install NPM packages as needed
$ rush update

# Do a clean rebuild of everything
$ rush rebuild

# Rebuild just core projects
$ rush rebuild --only tag:core

# Work on one project
$ cd ./core/r4.core

# Let's assume there is a "start" script in the package.json.
# (To see the available commands, type "rushx" by itself.)
$ rushx start
```

Most code is written in [TypeScript](https://typescriptlang.org).


## More Information

FHIR&reg; is the registered trademark of HL7 and is used with the permission of HL7.